

//I am indebted to Rohan Fletcher for scaffolding this code for me to complete. I wouldn't have completed this challenge by myself. Thank you so much for your patience Rohan!

document.addEventListener('DOMContentLoaded', pageReady);

//the display to take input from/interact with the user
function pageReady() {
  var buttons = document.getElementById('buttons').getElementsByTagName('button');
  for(i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', handleClick);
  }

  //do something when one of these buttons are pushed
  function isFunctionButton(buttonPushed) {
    const functions = '+-*/='
    for (i = 0; i < functions.length; i++) {
      if (buttonPushed == functions[i]) {
        return true
      }
    }
    return false
  }

  //do something when one of the red special button is pushed
  function isSpecialButton(buttonPushed) {
    var specials = ['ac', 'ce']
    for (i = 0; i < specials.length; i++) {
      if (buttonPushed == specials[i]) {
        console.log("specials")
        return true
      }
    }
    return false
  }

  //variables we'll need to perform the calc
  var answer = 0;
  var numBuffer = '';
  var lastFunc = '';
  var numFuncPressed = 0;

  //when the button is pushed, link it here from the HTML
  function handleClick(e){
    buttonPushed = e.target.value;

    //if special button is pushed, the return answer to 0 on the display and wait for instructions
    if (isSpecialButton(buttonPushed) == true) {
      answer = 0;
      numBuffer = '';
      lastFunc = '';
      document.getElementById('answer').innerHTML = answer;

    //otherwise if the function button is pushed
    } else if (isFunctionButton(buttonPushed) == true) {

      //and if there's a decimal point pushed,
      if (numBuffer == '.') {

        //you make the decimal into a float (decimal numbers)
        number = parseFloat(buttonPushed);
      } 

      //or if you're on the last function
      if (lastFunc != '') {
        // and if the function pushed is + , - , * or /
        if (lastFunc == '+') {
          answer += parseFloat(numBuffer).toFixed(2);
        } else if (lastFunc == '-') {
          answer -= parseFloat(numBuffer).toFixed(2);
        } else if (lastFunc == '*') {
          answer *= parseFloat(numBuffer).toFixed(2);
        } else if (lastFunc == '/') {
          answer /= parseFloat(numBuffer).toFixed(2);
        }

      //otherwise just display whatever number was punched in
      } else {
        answer = parseFloat(numBuffer);
        answer = answer.toFixed(2);
      }
      // display the answer by feeding the HTML doc and changing it
      document.getElementById('answer').innerHTML = answer;
      lastFunc = buttonPushed;
      numBuffer = '';
    } else {
      if (false /* pushed == dot and dot in numbuffer */) {
        // ignore the dot
      }
      numBuffer += buttonPushed;
      console.log(buttonPushed, numBuffer);
      document.getElementById('answer').innerHTML = numBuffer;
    }

  }
}
