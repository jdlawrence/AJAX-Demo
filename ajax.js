console.log('hi');

$(document).ready(function() {
  console.log('inside jquery: ');

  $.ajax({
    url: 'https://www.reddit.com/.json',
    // url: 'http://www.setgetgo.com/randomword/get.php',
    type: 'GET',
    success: function(data) {
      console.log('data: ', data);
    },
    error: function(data, textStatus, error) {
      console.log('error: ', data, 'data', textStatus, 'error', error);
    }

  });

  // .done(function(data) {
  //   console.log('data', data);
  // })
  // .fail(function(jqXHR, textStatus){
  //   console.log('textStatus: ', textStatus, jqXHR);
  // });

});