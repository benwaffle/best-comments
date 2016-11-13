'use strict'

const snoowrap = require('snoowrap')
const r = new snoowrap(require('./config.js'))
r.config({continueAfterRatelimitError: true})

const mapComment = cb => cms => {
    cb(cms)
    cms.replies.forEach(mapComment(cb))
}

const sub = process.argv[2] || 'BlackPeopleTwitter' // node ./main.js [sub]
r.getSubreddit(sub).getHot().forEach(post => {
    post
        .expandReplies({limit: 1, depth: 5})
        .comments
        .forEach(mapComment(cm => {
            if (cm.score > 100) {
                r.getComment(cm.parent_id).fetch().then(parent => {
                    // max parent score for the child to be interesting
                    // you can experiment with this formula by fitting a line
                    // to points (x = child score, y = max parent score)
                    const parentMax = cm.score * 0.4 + 20
                    if (parent instanceof snoowrap.objects.Comment && parent.score <= parentMax) {
                        r.getSubmission(cm.link_id).permalink.then(link => {
                            console.log(`https://reddit.com${link}${cm.name.slice(3)}?context=10000`)
                        })
                    }
                })
            }
        }))
})
