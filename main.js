'use strict'

const snoowrap = require('snoowrap')
const r = new snoowrap(require('./config.js'))
r.config({continueAfterRatelimitError: true})

function mapComment(comment, parent, callback) {
    callback(comment, parent)
    comment.replies.forEach(reply => mapComment(reply, comment, callback))
}

const sub = process.argv[2] || 'BlackPeopleTwitter' // node ./main.js [sub]
r.getSubreddit(sub).getHot().forEach(post => {
    post
        .expandReplies({limit: 1, depth: 5})
        .comments
        .forEach(cmt => {
            mapComment(cmt, null, (cm, parent) => {
                if (cm.score > 100) {
                    // max parent score for the child to be interesting
                    // you can experiment with this formula by fitting a line
                    // to points (x = child score, y = max parent score)
                    const parentMax = cm.score * 0.4 + 20
                    if (parent instanceof snoowrap.objects.Comment && parent.score <= parentMax) {
                        console.log(`https://reddit.com${post.permalink}${cm.name.slice(3)}?context=10000`)
                    }
                }
            })
        })
})
