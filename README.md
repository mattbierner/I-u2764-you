# I U+2764 You

Bot that tweets, "I X you", where X is a random emoji, at random accounts.

Emojis can be open to interpretation, so the results can be rather entertaining.

# Running
To run:

```bash
$ npm install
```

Make sure to set the following environment variables:

```bash
$ export TWITTER_CONSUMER_KEY="your app key"
$ export TWITTER_CONSUMER_SECRET="your app secret"
$ export TWITTER_ACCESS_TOKEN_KEY="your access token key"
$ export TWITTER_ACCESS_TOKEN_SECRET="your access token secret"
```

Then just run the script, `$ node index.js`.

I recommend running the script using [forever][forever], `$ forever index.js`, so the fun never has to stop.


[forever]: https://github.com/foreverjs/forever
