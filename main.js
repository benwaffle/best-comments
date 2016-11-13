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
                    if (parent instanceof snoowrap.objects.Comment && cm.score >= parent.score*2) {
                        r.getSubmission(cm.link_id).permalink.then(link => {
                            console.log(`https://reddit.com${link}${cm.name.slice(3)}?context=10000`)
                        })
                    }
                })
            }
        }))
})
