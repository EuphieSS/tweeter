/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


const renderTweets = function(tweets) { //loop through a data object and feed each element to createTweetElement
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('.old-tweet').append($tweet);
  }
};


const createTweetElement = (tweetObj) => { //turn a tweet object into a HTML tweet element
  const $oldTweet = `
    <article>
      <header>
        <div>
          <img alt="profile pic" src="${tweetObj.user.avatars}">
          <span>${tweetObj.user.name}</span>
        </div>
        <span id="tweet-handle">${tweetObj.user.handle}</span>
      </header>
      <p>${tweetObj.content.text}</p>
      <footer>
        <span>${tweetObj.created_at}</span>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
    `;

  return $oldTweet;
};



$(function() {
  renderTweets(data);
});