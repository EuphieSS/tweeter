/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const createTweetElement = (tweetObj) => {
  const oldTweet = `
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

  return oldTweet;
};

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

const $tweet = createTweetElement(tweetData);

$(function() {
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('.old-tweet').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});