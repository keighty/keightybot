var Twit = require('twit')

var bot = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET,
  timeout_ms: 60*1000,
})

bot.post('statuses/update', {status: 'hello, bot-world'}, function (err, data, res) {
  if (err) {
    console.log(err)
  }
})
