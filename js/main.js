//  var sum = Number(prompt("raqam kiriting"));

//  if(sum == " "){
//      console.log("raqam kiritng");
//  }else{
//      console.log("yaxshi");
//  }


// var armyAge = 18;
// var maxArmyAge = 27;

// var health = true;

// var userAge = Number(prompt("yoshiz"));

// if(maxArmyAge >= userAge && armyAge <= userAge){
//     console.log("yaxshi");
// }else{
//     console.log("yomon");
// }

// var textTitle = document.querySelectorAll("h1");
// var textTitle = document.getElementById("text");
// var textTitle = document.getElementsByTagName("h1")

// console.log(textTitle);


var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form-input");
var elFormSelect = document.querySelector(".form-select");
var elFormSelectname = document.getElementById("option");
var elFormResult = document.querySelector(".form-result");

var uzs = 10845;
var rub = 79.48;
var euro = 0.88;



elForm.addEventListener("submit" , function(e){

  e.preventDefault();

  var elInputVal = Number(elFormInput.value);
  var elSelectVal = Number(elFormSelect.value);
  var elSelectVal2 = Number(elFormSelect.getAttributeNames);
  var result = elInputVal * elSelectVal;

  elFormResult.textContent = (result);

});
