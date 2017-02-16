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
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      console.log('The request succeeded!');
      $('#step3456').append(responseData);
    }).fail(function(jqXHR, textStatus, errorThrown) {
      $('body').append(jqXHR.responseText);
      // $('body').append(jqXHR);
      console.log('The request failed!');
    }).always(function() {
      console.log('Hey the request finished!');
    });
  });
  $('#step7 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: { amount: 5 },
      dataType: 'text'
    }).done(function(responseData) {
      $('#step7').append(responseData);
    });
  });
  $('#submit').on('click', function() {
    var x = document.getElementById('text').value;
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: { timezone: x },
      dataType: 'text'
    }).done(function(responseData) {
      console.log('done');
      $('#step8').append(responseData);
    }).fail(function() {
      $('#step8').append('ERROR');
      console.log('fail');
    }).always(function() {
      console.log('always');
    });
  });
  $('#step8 #sub').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: { timezone: 'Europe/Sofia' },
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
