"use strict";
const path = require('path');
const fs = require('fs');
const Twitter = require('twitter');
const characters = require('./characters');

const INTERVAL = 1000 * 60 * 5; // five minutes.

const LOG_FILE = "post_log.txt";
const LOG_PATH = path.join(__dirname, LOG_FILE);


const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

/**
    Pick a random emoji.
*/
const pick_emoji = () => {
    const i = Math.floor(Math.random() * characters.length);
    return characters[i];
};

/**
    Get a random user who have been active recently.
*/
const pick_user = (f) =>
    client.stream('statuses/sample', {}, (stream) => {
        stream.on('data', tweet => {
            if (tweet && tweet.user && tweet.user.screen_name) {
                stream.destroy();
                f(tweet.user.screen_name);
            }
        });

        stream.on('error', e => {
            console.error(e);
        });
    });

const logResult = (msg) => {
    console.log(msg);
    fs.appendFile(LOG_PATH, msg + '\n', err => {
        if (err)
            console.error(err);
    });
}

/**
    Get status messsage.
*/
const status_message = (user, emoji) =>
    '@' + user + ' I ' + emoji + ' you!';

/**
    Send the message.
*/
const share_the_awesome = (user, emoji) =>
    client.post('statuses/update', {
        status: status_message(user, emoji)
    }, (error, tweet, response) => {
        if (error) {
            console.log(error);
            return;
        }
        logResult('Shared the ' + emoji + ' with ' + user);
    });

const main = () => {
    const emoji = pick_emoji();
    pick_user(user => {
        share_the_awesome(user, emoji);
        setTimeout(main, INTERVAL);
    })
};

main();
