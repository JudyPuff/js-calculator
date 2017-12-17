document.addEventListener('DOMContentLoaded', pageReady);

function pageReady() {
  var buttons = document.getElementById('buttons').getElementsByTagName('button');
  for(i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', handleClick);
  }

  function isFunctionButton(buttonPushed) {
    const functions = '+-*/='
    for (i = 0; i < functions.length; i++) {
      if (buttonPushed == functions[i]) {
        console.log("FUNCTION")
        return true
      }
    }
    return false
  }

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

  var answer = 0;
  var numBuffer = '';
  var lastFunc = '';
  var numFuncPressed = 0;

  function handleClick(e){
    buttonPushed = e.target.value;
    console.log('buttonPushed: ', buttonPushed);
    if (isSpecialButton(buttonPushed) == true) {
      answer = 0;
      numBuffer = '';
      lastFunc = '';
      document.getElementById('answer').innerHTML = answer;
    } else if (isFunctionButton(buttonPushed) == true) {
      if (numBuffer == '.') {
        number = parseFloat(buttonPushed);
      } else {
        number = parseInt(buttonPushed);
      }
      if (lastFunc != '') {
        // if there is a previous function
        if (lastFunc == '+') {
          answer += parseInt(numBuffer);
        } else if (lastFunc == '-') {
          answer -= parseInt(numBuffer);
        } else if (lastFunc == '*') {
          answer *= parseInt(numBuffer);
        } else if (lastFunc == '/') {
          answer /= parseInt(numBuffer);
        }
      } else {
        answer = parseInt(numBuffer);
      }
      // write out answer
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
