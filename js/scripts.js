////////BE////////
var translator = function(userInput) {
    userInput=userInput.toLowerCase(); //works

    // spec deals with words that start with a vowel:
    if (["a", "e", "i", "o", "u"].indexOf(userInput[0]) > -1) {
        return userInput=userInput+"ay";
    }
    // spec deals with words that begin with one or more consonants
   else {
   //for loop checks for multiple consonants
       for (var i = 0; i<userInput.length; i++){

           if (["a", "e", "i", "o", "u"].indexOf(userInput[i]) > -1){
               var firstConsonants = userInput.slice(0, i);
               var middleWord = userInput.slice(i, userInput.length);
               userInput = middleWord + firstConsonants + "ay";
               break;}
            }
    return userInput}
  }

/////////UI/////////
$(document).ready(function(){
  // alert("Blah");
  $("#user-input").submit(function(event){
    // var userInput = prompt("userInput");
    var userInput = $("input#text-input").val();
    // alert("userInput: " + userInput);
    var userOutput = translator(userInput);
    $("p#text-output").text(userOutput);
    // alert("userOutput: " + userOutput);
    event.preventDefault();
  });











});
