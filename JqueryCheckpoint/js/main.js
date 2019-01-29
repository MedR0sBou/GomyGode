function bold() {
    $('#para').css("font-weight", "bold");
}
function italic() {
    $('#para').css("font-style", "italic");
}
function underlined() {
    $('#para').css("text-decoration", "underline");
}

$(document).ready(function()
{
    $("#b").dblclick(function()
    {
        $('#para').css("font-weight", "normal");
    })
});

$(document).ready(function()
{
    $("#i").dblclick(function()
    {
        $('#para').css("font-style", "normal");
    })
});

$(document).ready(function()
{
    $("#u").dblclick(function()
    {
        $('#para').css("text-decoration" , "none");
    })
});




 function myFont() {
     
    var a=$('#font').val();
    if (a==="bold"){
     bold();
    }
    else if (a==="italic"){
     italic();
    }
    else 
    {
      underlined();
    }
  }

  
  function mysize() {
     
    var a=$('#size').val();
    if (a==="15"){
      $('#para').css("font-size","15px");

    }
    else if (a==="17"){
        $('#para').css("font-size","17px");
    }
    else 
    {
        $('#para').css("font-size","20px");
    }
  }