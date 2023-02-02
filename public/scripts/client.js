/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//The function below re-encodes text so that unsafe characters are converted into a safe "encoded" representation (prevents XSS attacks).
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const renderTweets = function(tweets) { //loop through a data object and feed each element to createTweetElement
  $(".old-tweet").empty(); //allow latest tweet to display without refreshing
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $(".old-tweet").append($tweet);
  }
};


const createTweetElement = function(tweetObj) { //turn a tweet object into a HTML tweet element
  const $oldTweet = `
    <article>
      <header>
        <div>
          <img alt="profile pic" src="${tweetObj.user.avatars}">
          <span>${tweetObj.user.name}</span>
        </div>
        <span id="tweet-handle">${tweetObj.user.handle}</span>
      </header>
      <p>${escape(tweetObj.content.text)}</p>
      <footer>
        <span>${timeago.format(tweetObj.created_at)}</span>
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

const loadTweets = function() { //make a request to /tweets and receive the array of tweets as JSON
  $.getJSON("/tweets/", function(data) {
    renderTweets(data.reverse());
  });
};


/////////////////////// jQuery's document ready function ///////////////////////

$(function() {
  $(".tweet-form").submit(function(event) {
    event.preventDefault();

    const charLimit = 140;
    const tweetLength = $(this).find("#tweet-text").val().length;
    //.find selector gets the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element

    if (!tweetLength) {
      alert("Please enter your tweet!");
      return;
    }

    if (tweetLength > charLimit) {
      alert("Oops your tweet is too long!");
      return;
    }
    
    const $newTweet = $(this).serialize();
    $.post("/tweets/", $newTweet, function() { //send data to the server
      $("#tweet-text").val(""); //clear textarea for next input
      $(".counter").val(charLimit); //reset counter after textarea clears
      loadTweets(); //if the request succeeds, this function will execute
    });
    
  });
});