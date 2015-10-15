$(document).ready(function() { 
  
  // Get the quote from Forismatic via AJAX GET call
  function getQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      type: 'GET',
      dataType: 'jsonp',
      jsonpCallback: "saveQuote",
      data: 'method=getQuote&format=jsonp&lang=en&jsonp=saveQuote',
      success: function(data) { 
        if (!data.quoteAuthor) {
          data.quoteAuthor = 'Uknown';
        }
        displayQuote(data);
        generateTweetLink(data);
      }
    });
   }
  
  // Display the quote on the page
  function displayQuote(quote)	{
    $('#quote').text(quote.quoteText);
    $('#author').text(quote.quoteAuthor);
  }
  
  // Generate Tweet button link
  function generateTweetLink(quote) {
    var base_url = 'http://twitter.com/home?status=';
    var tweet_text = quote.quoteText + ' (' + quote.quoteAuthor + ')' ;
    $('#tweetQuote').attr('href', base_url + encodeURIComponent(tweet_text));
  }
  
  // Display one quote when the page loads
  getQuote();
  
  // Display new quote when the Get a New Quote button is clicked
  $( "#getQuote" ).click(function() {
    getQuote();
  });
});