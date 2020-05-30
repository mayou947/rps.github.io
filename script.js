/* This is a simplified version of the game.
The Computer ALWAYS picks ROCK.  
Does user's choose wins,looses, or ties vs ROCK? */

function play(user) {
  let result = "";

  if (user === 'rock') {
    result = "tie";
  }
  if (user === 'paper') {
    result = "win";
  }
  if (user === 'scissors') {
    result = "lose";
  }

  myMessage = "Computer chose rock, you " + result + "!"
  alert(myMessage);
  sayMessage(myMessage);
}

/*https://stackoverflow.com/questions/15653145/using-google-text-to-speech-in-javascript*/
function sayMessage(theMessage){
  let msg = new  SpeechSynthesisUtterance(theMessage);
  window.speechSynthesis.speak(msg);
}
