var a ;
function show_hide1(){
  if(a==1){
    document.getElementById("image1","image2").style.display="inline";
    return a=0;
  }
  else 
  {
    document.getElementById("image1","image2").style.display="none";
    return a=1;
  }  
}

var a;
function show_hide2(){
  if(a==1){
    document.getElementById("image2").style.display="inline";
    return a=0;
  }
  else 
  {
    document.getElementById("image2").style.display="none";
    return a=1;
  }  
}



