$(function() {
  $("textarea").on("input", function() {
    const $charCounter = $(this).parent().children(".tweet-button-counter").children(".counter");
    const limit = 140;
    let $remainder = limit - $(this).val().length;
    $charCounter.text($remainder);

    if ($remainder < 0) {
      $charCounter.css("color", "rgb(234, 11, 111)");
    } else {
      $charCounter.css("color", "#545149");
    }
  });
});
