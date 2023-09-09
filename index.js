// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
$(function () {
  // $('p').css('color', 'red');
  $('.entry-page p:first-child').text('変更できたよ');
  $('ol li:nth-of-type(even)').css('color', 'red');
});
