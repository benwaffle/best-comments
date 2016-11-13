# Best Reddit Comments

1. Fill out config.js
  1. Create a new reddit app [here](https://www.reddit.com/prefs/apps/) for `clientId` and `clientSecret`
  2. run [this tool](https://github.com/not-an-aardvark/reddit-oauth-helper) (give it `read` scope) for the refreshToken
2. Run `node main.js [subreddit]`

## Example run

```
$ node main.js all                 
https://reddit.com/r/BikiniBottomTwitter/comments/5cm9nz/got_10_seconds_on_the_clock/d9xs8pa?context=10000
https://reddit.com/r/Art/comments/5cmae4/brutalist_sand_castles/d9xsv55?context=10000
https://reddit.com/r/quityourbullshit/comments/5cn3be/i_understand_this_one_concerns_politics_but_its/d9xwh5f?context=10000
https://reddit.com/r/quityourbullshit/comments/5cn3be/i_understand_this_one_concerns_politics_but_its/d9xx2u2?context=10000
https://reddit.com/r/quityourbullshit/comments/5cn3be/i_understand_this_one_concerns_politics_but_its/d9xx8ww?context=10000
https://reddit.com/r/gifs/comments/5cm1rd/snowboarding/d9xvd4e?context=10000
https://reddit.com/r/BlackPeopleTwitter/comments/5clxhe/the_universe_cant_fucking_resist_a_dare/d9xotu7?context=10000
https://reddit.com/r/BlackPeopleTwitter/comments/5clxhe/the_universe_cant_fucking_resist_a_dare/d9xp6p1?context=10000
https://reddit.com/r/Overwatch/comments/5cmvcb/you_might_not_want_to_tell_your_friends_about_that/d9xu71h?context=10000
https://reddit.com/r/gaming/comments/5cnaq7/50_cents_each_at_a_church_bazaar/d9xuerr?context=10000
https://reddit.com/r/todayilearned/comments/5cmorf/til_that_the_music_used_in_the_you_wouldnt_steal/d9xqwl4?context=10000
https://reddit.com/r/TheNewRight/comments/5cmups/this_needs_to_be_on_rall_until_the_riots_stop/d9xwdwo?context=10000
https://reddit.com/r/hockey/comments/5cmdtv/extremely_photogenic_ryan_hartman/d9xs3vx?context=10000
https://reddit.com/r/aww/comments/5cm08n/excuse_me_i_think_this_is_my_seat/d9xx246?context=10000
https://reddit.com/r/aww/comments/5cm08n/excuse_me_i_think_this_is_my_seat/d9xxol5?context=10000
https://reddit.com/r/aww/comments/5cm08n/excuse_me_i_think_this_is_my_seat/d9xwo8k?context=10000
https://reddit.com/r/pics/comments/5cmg4q/my_favorite_protest_sign_so_far/d9xuvt7?context=10000
https://reddit.com/r/pics/comments/5cmg4q/my_favorite_protest_sign_so_far/d9xsdf0?context=10000
https://reddit.com/r/pics/comments/5cmg4q/my_favorite_protest_sign_so_far/d9xthml?context=10000
https://reddit.com/r/pics/comments/5cmg4q/my_favorite_protest_sign_so_far/d9xre5a?context=10000
https://reddit.com/r/WTF/comments/5cm5sx/warning_death_making_a_sandstorm/d9xtf9r?context=10000
https://reddit.com/r/WTF/comments/5cm5sx/warning_death_making_a_sandstorm/d9xvqie?context=10000
https://reddit.com/r/WTF/comments/5cm5sx/warning_death_making_a_sandstorm/d9xsjdo?context=10000
https://reddit.com/r/WTF/comments/5cm5sx/warning_death_making_a_sandstorm/d9xtizm?context=10000
https://reddit.com/r/WTF/comments/5cm5sx/warning_death_making_a_sandstorm/d9xtwxw?context=10000
https://reddit.com/r/WTF/comments/5cm5sx/warning_death_making_a_sandstorm/d9xmenv?context=10000
https://reddit.com/r/WTF/comments/5cm5sx/warning_death_making_a_sandstorm/d9xpejj?context=10000
https://reddit.com/r/WTF/comments/5cm5sx/warning_death_making_a_sandstorm/d9xlu42?context=10000
https://reddit.com/r/Showerthoughts/comments/5clsye/my_dad_used_to_say_that_if_i_didnt_watch_any/d9xohvf?context=10000
https://reddit.com/r/Showerthoughts/comments/5clsye/my_dad_used_to_say_that_if_i_didnt_watch_any/d9xqudg?context=10000
```
