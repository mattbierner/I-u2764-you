# I U+2764 You

Bot that tweets, "I X you", where X is a random emoji, at random accounts.

Emojis can be open to interpretation, so the results are often rather entertaining. [See it in action here](https://twitter.com/I_u2764_U).

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

Then just run the script, `$ node index.js`. A log of who and what was tweeted is written to `post_log.txt`.

I recommend running the script using [forever][forever], `$ forever start index.js`, so the fun never has to stop.


[forever]: https://github.com/foreverjs/forever
