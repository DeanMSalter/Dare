const notAnOption = `Not an option.`
console.log("test222")

//Main Menu
const mainMenuText = `You are stuck in a room full of many different objects. The door to the room is currently locked. In the metal door handle you notice a combination lock.`
const mainMenuOptions = `In the room you notice:\n1. Calender\n2. Bookcase\n3. Table and Lamp\n4. Chest of Drawers\n5. Rug\n6. Desk\n7. Bed\n8. Window\n9. Door\n0. Quit`
const mainMenuResponses = [1,2,3,4,5,6,7,8,9,0]

//Calender
const calenderText = `The calender hangs by a small nail on the wall. The month reads November and the year reads 2017.`
const calenderMenuOptions =`\n1. Inspect\n2. Pick Up`
const calenderMenuResponses = [1,2]

//Table and Lamp
const tableLampText ='The lamp is placed on a dark wooden side table. Beside the lamp is a remote control.'
const tableLampMenuOptions = `\n1. Inspect\n2. Look Under Lamp`
const tableLampMenuResponses = [1,2]
const colourCombinations = [
  ["Red", "Amber", "Pink", "Purple", "Amber"],
  ["Amber", "Orange", "Yellow", "Brown", "Amber"],
  ["Pink", "Yellow", "White", "Light Blue", "Cream"],
  ["Purple", "Brown", "Light Blue", "Blue", "Green"],
  ["Amber", "Amber", "Cream", "Green", "Yellow"],
];
const lampCodeValidAnswers = [1,2,3,4,5]
const colours = ["Red", "Orange", "White", "Blue", "Yellow"]
let colour1 = null;
let colour2 = null;
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
    throw ("Exit")
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
      alert(`Red Leather Book\nOnce there were coloured boats. They fought in a huge battle until most were destroyed. In the end they decided to never have such a devastating war. So, the red and the blue fleets joined together in a treaty.`)
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
  let tableLampMenuResponse = getAnswer(tableLampText + tableLampMenuOptions, tableLampMenuResponses)
  if(tableLampMenuResponse === 1){
    let lampCodeAttempt = getAnswer("The lamp has a white base and is currently turned off. The remote next to the lamp shows coloured buttons.\n1.Red\n2.Orange\n3.White\n4.Blue\n5.Yellow.", lampCodeValidAnswers);
    if(lampCodeAttempt){
      lampCodeAttempt --
      if(colour1 !== null && colour2 !== null) {
        colour1 = lampCodeAttempt;
        alert("The lamp is now " + colours[colour1]);
        colour2 = null;
      }
      else if(colour1 !== null && colour2 === null){
        colour2 = lampCodeAttempt;
        if(colourCombinations[colour1][colour2] == "Purple"){
          alert("The lamp lights up with a Blue background and Red shape in the middle that resembles a number 3.");
        }else{
          alert("The lamp is now " + colourCombinations[colour1][colour2]);
        }
      }
      else if(colour1 === null && colour2 === null) {
        colour1 = lampCodeAttempt;
        alert("The lamp is now " + colours[colour1]);
      }
      tableLamp();
    }
  }
  if (tableLampMenuResponse === 2){
    alert(`The table is blank underneath. There are no distinct markings.`);
    tableLamp();
  }
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
  console.log("adsadsadad")
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
