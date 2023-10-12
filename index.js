// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
$(function () {
  // $('p').css('color', 'red');
  // $('.entry-page p:first-child').text('変更できたよ');
  // $('ol li:nth-of-type(even)').css('color', 'red');
  $('#dark-button').parents('.entry-page').find('h1').css('color', 'red');
});

$('.entry-list').on('click', function () {
  $(this).next().toggle();
});

$('#dark-button').on('click', function () {
  $(this).parents('.entry-page').addClass('entry-page--is-dark');
  $(this)
    .parents('.entry-page')
    .find('h1')
    .after('<p>ダークモードにするときは部屋を明るくしてね</p>');
});
