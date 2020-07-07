  const notAnOption = `Not an option.`


//Main Menu
const mainMenuText = `You are stuck in a room full of many different objects. The door to the room is currently locked. In the metal door handle you notice a combination lock.`
const mainMenuOptions = `In the room you notice:\n1. Calender,\n2. Bookcase,\n3. Table and Lamp\n4. Chest of Drawers\n5. Rug\n6. Desk\n7. Bed\n8. Window\n9. Door\n0. Quit`
const mainMenuResponses = [1,2,3,4,5,6,7,8,9,0]

//Calender
const calenderText = `The calender hangs by a small nail on the wall. The month reads November and the year reads 2017.`
const calenderMenuOptions =`\n1. Inspect\n2. Pick Up`
const calenderMenuResponses = [1,2]

//Table and Lamp
const tableLampText =`The lamp is placed on a dark wooden side table. Beside the lamp is a remote control.`
const tableLampOptions = `\n1. Inspect\n2. Look Under Lamp`
const tableLampResponses = [1,2]
const lampCodeAnswer = '14'

//Bookcase
const bookcaseText = `The bookcase is full of all kinds of different books. At the botttom is a small draw`
const bookcaseMenuOptions = `\n1. Inspect\n2. Open Drawer`
const bookcaseMenuResponses = [1,2]

//window
const windowText = `Out the window all you can see is the brick wall before you.`

//Rug
const rugText = `Something`
const rugMenuOptions = `\n1. Inspect\n2. Look Underneath\n3. Pick Up Remote Control`
const rugMenuResponses = [1,2]

//Door
const doorText = `The metal door frame is consistent with the metal handle. You notice there are no marks or scratches.`
const doorMenuOptions =`\n1. Open Door\n2. Knock\n3. Attmpt Opening by Force`
const doorMenuResponses = [1,2,3]
const doorCodeAnswer = '4321'

function startGame() {
  goToMainMenu();
}

function goToMainMenu() {
  let mainMenuResponse =  getAnswer(mainMenuText + mainMenuOptions, mainMenuResponses);
  //Calender
  if(mainMenuResponse === 1){
    calender()
  }

  //Bookcase
  if(mainMenuResponse === 2){
    bookcase()
  }

  //Table and Lamp
  if(mainMenuResponse === 3){
    tableLamp()
  }

  //Rug
  if(mainMenuResponse === 5){
    rug();
  }

  //Window
  if(mainMenuResponse === 8){
    alert(windowText);
    goToMainMenu();
  }

  //Door
  if(mainMenuResponse === 9){
    door();
  }

  //Quit
  if(mainMenuResponse === 0){
    location.reload();
  }
}

//1
function calender(){
  let calenderMenuResponse = getAnswer(calenderText + calenderMenuOptions, calenderMenuResponses)

  if(calenderMenuResponse === 1){
    alert(`There is a picture of a fireworks display at the top. On the calender, some of the dates contain text:\n1st - Daylight Savings\n5th - Guy Fawks\n8th - Rememberance Sunday\n11th - Rememberance Day\n26th - Thanksgiving Day`);
    calender();
  }
  if (calenderMenuResponse === 2){
    pickUpCalender()
  }

  function pickUpCalender(){
    let pickUpText = `Behind the calender is only a blank wall with the one nail sticking out.`
    let pickUpMenuOptions = `\n1. Put Back\n2. Flick Through`
    let pickUpMenuResponses=[1,2]
    let pickUpMenuResponse = getAnswer(pickUpText + pickUpMenuOptions, pickUpMenuResponses)

    if(pickUpMenuResponse === 1) {
      alert(`Despite trying to straighten the calender, it remains crooked.`)
      calender()
    }
    if(pickUpMenuResponse == 2) {
      alert(`Flicking through the calender there is no extra writing. It appears as though the other months are untouched.`)
      pickUpCalender()
    }
  }
}

//2
function bookcase() {
  let bookcaseMenuResponse = getAnswer(bookcaseText + bookcaseMenuOptions, bookcaseMenuResponses)

  if(bookcaseMenuResponse === 1){
    alert(`Each book has words missing form the spines due to being damaged. None of them are readable.`);
    bookcase();
  }
  if (bookcaseMenuResponse === 2){
    let bookcaseDrawText = `The draw is locked with a combination lock that uses X's and O's.`
    let bookcaseDrawResponses = 'XoXXoX'
    let bookcaseDrawResponse = codeEntry(bookcaseDrawText, bookcaseDrawResponses)

    if(bookcaseDrawResponse) {
      alert(`The draw opens to reveal two books.`)
      bookcaseDrawMenu()
    }
    else {
      alert(`The combination doesn't work.`)
      bookcase();
    }
  }
  function bookcaseDrawMenu(){
    let bookcaseDrawMenuText =`In the draw there are two books. One with a red leather cover and the other a green hardback.`
    let bookcaseDrawMenuOptions = `\n1. Read the Red Book\n2. Read the Green Book\n3. Close the Draw`
    let bookcaseDrawMenuResponses = [1,2,3]
    let bookcaseDrawMenuResponse = getAnswer(bookcaseDrawMenuText + bookcaseDrawMenuOptions, bookcaseDrawMenuResponses)

    if (bookcaseDrawMenuResponse === 1){
      alert(`Red Leather Book\nOnce there were four boats. One red, one orange, one blue and one green. They fought in a huge battle. In the end, green was superior.`)
      bookcaseDrawMenu()
    }
    else if (bookcaseDrawMenuResponse === 2){
      alert(`Once there were seven puppies. Some had red collars, some blue, some orange and some green. Each of the puppies were given a number. Number 4 had black spots, numer 3 had brown spots. But number 7 had no marks or scratches at all.`)
      bookcaseDrawMenu()
    }
    else if (bookcaseDrawMenuResponse === 3){
      bookcase();
    }
  }
}

//3
function tableLamp(){
  let tableLampMenuResponse = getAnswer(tableLampText + tabeLampMenuOptions, tableLampMenuResponses)

  if(tableLampMenuResponse === 1){
    alert(`The remote next to the lamp shows coloured buttons.\1.Red\2.Orange\3.White\4.Blue\5.Yellow.`);
    let lampCodeAttempt = codeEntry("The lamp requires you to press the correct buttons in order to turn on, lampCodeAnswer")

  }
  if (tableLampMenuResponse === 2){
    alert(`The table is blank underneath. There are no distinct markings.`);
    tableLamp();
}

//5
function rug(){
  let rugMenuResponse = getAnswer(rugText + rugMenuOptions, rugMenuResponses)

  if(rugMenuResponse === 1){
    alert(`The large rug covers most of the floor at the bottom of the bed. The top right corner seems to curl up slightly.`);
    rug();
  }
  if (rugMenuResponse === 2){
    alert(`There are ettchings on the bottom of the rug. These resemble B, C, L, D.`);
    rug();
  }
}

//9
function door(){
  let doorMenuResponse = getAnswer(doorText + doorMenuOptions, doorMenuResponses);

  if(doorMenuResponse === 1){
    let doorCodeAttempt = codeEntry("The door requires a code", doorCodeAnswer);
    if(doorCodeAttempt === 0) {
      alert("The combination lock does not allow you to enter more than 4 numbers.");
      door();
    }
    if(doorCodeAttempt){
      alert("You Win!");
    } else {
      alert("You try the handle but it doesnt seem to move.");
      door();
    }
  }

  if(doorMenuResponse === 2) {
    alert('There is no response.');
    door();
  }

  if(doorMenuResponse === 3){
    alert('The door does not move. You hurt your shoulder')
    door();
  }
}


//Utility
function getAnswer(question, validAnswers){
  let answer = "";
  while(answer.toString().trim() === ""){
    answer = prompt(question);
    if(answer === null || answer === false) {
      return  goToMainMenu();
    }
    answer = parseInt(answer);
    if(!validAnswers.includes(answer)) {
      alert(notAnOption)
      answer = "";
    }
  }
  return answer;
}

function codeEntry(question, correctAnswer){
  let answer = "";
  while(answer.toString().trim() === ""){
    answer = prompt(question);
    if(answer === null || answer === false){
      return goToMainMenu();
    }
  }
  if(answer.length > correctAnswer.length){
    return 0;
  }else if(answer === correctAnswer) {
    return true;
  }else {
    return false;
  }
}
