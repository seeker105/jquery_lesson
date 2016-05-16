$(document).ready(function(){
  console.log($('input[type=checkbox]'));



  // EVENT DRIVEN PROGRAMMING
  $("td:first").on('click', function(){
    console.log("hello");
  });

  $('td').on('click', function(){
    $(this).append("Ouch!");
  });


});
