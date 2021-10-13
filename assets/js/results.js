$(document).ready(function () {
  "use strict";
  const url = 'https://prize.africtivistes.org/api/count';

  $.ajax(url,   // request url
    {
      dataType: 'json',
      success: function (data, status, xhr) {// success callback function
        console.log(data);
    }
  });

});