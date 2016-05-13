function makeString(object) {
  if (object == null)
    return '';
  return String(object);
};

$(document).ready(function(){

  // Grab the template script
  var theTemplateScript = $("#data-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  var mydata = data[1];

  // Pass our data to the template
  var theCompiledHtml = theTemplate(mydata);

  console.log(theCompiledHtml);
  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);

});
