

  function bold() {
    
    document.getElementById("para").style.fontWeight="bold";
  }

  function italic() {
    
    document.getElementById("para").style.fontStyle="italic";
  }

  function underlined() {
    
    document.getElementById("para").style.textDecoration="underline";
  }

 
  function myFont() {
     
    var a=document.getElementById("font").value;
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
     
    var a=document.getElementById("size").value;
    if (a==="15"){
      document.getElementById("para").style.fontSize="15px";

    }
    else if (a==="17"){
      document.getElementById("para").style.fontSize="17px";
    }
    else 
    {
      document.getElementById("para").style.fontSize="20px";
    }
  }