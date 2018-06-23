/* Exercise 2: Color picker */
$(document).ready(function(){

  function setPreviewColor(color){
  $('.preview').css('background-color', color);
  };

  function addBox(color){
    $('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>');
  }; 

  $(document).on('click', "#add-to-favorite", function() {
    console.log("This is the add to favorite button");
    addBox($('#color').val());
  });

  $("#color").keyup(function() {
  setPreviewColor($('#color').val());
  $('.color-code').text($('.preview').css('background-color'));
  });
});