$(document).ready(function () {

  /* Your code goes here */
  $('#step12 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    });
  });
  $('#step3456 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      console.log('The request succeeded!');
      $('#step3456').append(responseData);
    }).fail(function() {
      $('#step3456').append('We\'ll try harder next time!');
      console.log('The request failed!');
    }).always(function() {
      console.log('Hey the request finished!');
    });
  });
  $('#step7 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
      $('#step7').append(responseData);
    });
  });
  $('#step8 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: { timezone: 'Asia/Kolkata' },
      dataType: 'text'
    }).done(function(responseData) {
      $('#step8').append(responseData);
    });
  });
  $('#step9 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'
    }).done(function(responseData) {
      $('#ul').append(responseData);
    });
  });
});
