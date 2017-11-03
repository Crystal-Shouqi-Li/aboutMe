

var theQuotes=["Not everything that can be counted counts, and not everything that counts can be counted ~ Einstein",
"Problems worthy of attack prove their worth by fighting back ~ Erdos", 
"Obstacles are those frightful things you see when you take your eyes off your goal ~Ford",
"If everything seems under control, you're just not going fast enough ~Mario Andretti"
];
function changeQuotes(){
var randomNum=Math.floor(Math.random()*4);
document.getElementById("quotes").innerHTML=theQuotes[randomNum];
}

function changeColor(){
  var randomColor=["#dbe9ff","maroon","#C390D4"]
  var randomNum=Math.floor(Math.random()*3);
  document.getElementById("changeColor").style.color=randomColor[randomNum]
}


function changeDiv1(){
var div=document.getElementById("TH1");
  if(div.style.display==="none"){
    div.style.display="block";
  }
  else{
    div.style.display="none";
  }
}
function changeDiv2(){
var div=document.getElementById("TH2");
  if(div.style.display==="none"){
    div.style.display="block";
  }
  else{
    div.style.display="none";
  }
}
function changeDiv3(){
var div=document.getElementById("TH3");
  if(div.style.display==="none"){
    div.style.display="block";
  }
  else{
    div.style.display="none";
  }
}
function changeDiv4(){
var div=document.getElementById("TH4");
  if(div.style.display==="none"){
    div.style.display="block";
  }
  else{
    div.style.display="none";
  }
}
function changeDiv5(){
var div=document.getElementById("TH5");
  if(div.style.display==="none"){
    div.style.display="block";
  }
  else{
    div.style.display="none";
  }
}
function changeDiv6(){
var div=document.getElementById("TH6");
  if(div.style.display==="none"){
    div.style.display="block";
  }
  else{
    div.style.display="none";
  }
}
function myFunction() {
    //document.getElementById("myDropdown").classList.toggle("show");
    var selectedValue=document.getElementById("myDropdown").value;
    
    var github=document.getElementById("github");
    var yelp=document.getElementById("yelp");
    var insta=document.getElementById("insta");
    var spotify=document.getElementById("spotify");

    if(selectedValue==="Git"){
      github.style.display="flex";
    }
    else{
      github.style.display="none";
    }

    if(selectedValue==="Yelp"){
      yelp.style.display="flex";
    }
    else{
      yelp.style.display="none";
    }

    if(selectedValue==="Inst"){
      insta.style.display="flex";
    }
    else{
      insta.style.display="none";
    }

    if(selectedValue==="Spot"){
      spotify.style.display="flex";
    }
    else{
      spotify.style.display="none";
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {

      console.log("We just clicked "+event.target.tagName);
  //if (event.target.tagName === 'SELECT') {
    //myFunction();
    // var dropdowns = document.getElementsByClassName("dropdown-content");
    // var i;
    // for (i = 0; i < dropdowns.length; i++) {
    //   var openDropdown = dropdowns[i];
    //   if (openDropdown.classList.contains('show')) {
    //     openDropdown.classList.remove('show');
    //   }
    // }
  //}
}

function buttonClicked(){
  alert("You have successfully submitted a form")
}
