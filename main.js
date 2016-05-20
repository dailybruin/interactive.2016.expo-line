$(document).ready(function(){

  $(".nav a").click(function(event) {
      event.preventDefault();
      var href = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(href).offset().top
      }, 600, function(){
        window.location.href = href;
      });
  });

  $(".line-1").fadeIn(1500, afterFade1).removeClass('hidden');
  function afterFade1() {
    $(".line-2").fadeIn(1000, afterFade2).removeClass('hidden');
  }
  function afterFade2() {
    $(".line-3").fadeIn(1000).removeClass('hidden');
  }

  // Grab the template script
  var theTemplateScript = $("#data-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  var mydata = data;

  // Pass our data to the template
  var theCompiledHtml = theTemplate(mydata);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);

});

Handlebars.registerHelper("counter", function (index){
    return index + 1;
});
