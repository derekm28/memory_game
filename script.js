const gameContainer = document.getElementById("game");

let flipped = false;
let card1;
let card2;
let flippedCard = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  let curCard = event.target;

  if (
    flipped
  )

    return;

  if (
    curCard.classList.contains('flipped')
  )

    return;


  curCard.style.background = curCard.classList[0];

  if (
    !card1 || !card2
  ) {

    curCard.classList.add('flipped');


    card1 = card1 || curCard;

    if (
      card1 === curCard
    ) {

      return null;
    }

    else {
      card2 = curCard;
    }
  }
  if (
    card1 && card2
  )

    flipped = true;

if (
  card1.className === card2.className
){
  match()
} else {
  noMatch()
}
console.log(flippedCard);
}

function match() {
  card1.removeEventListener('click', handleCardClick)
  card2.removeEventListener('click', handleCardClick)
  card1 = null
  card2 = null
  flipped = false;
  flippedCard = flippedCard + 2
}

function noMatch() {
  setTimeout(function () {
    card1.style.background = null
    card2.style.background = null
    card1.classList.remove('flipped')
    card2.classList.remove('flipped')
    card1 = null
    card2 = null
    flipped = false;
  }, 600)

  if (flippedCard === COLORS.length) alert("game over!");

}




// when the DOM loads
createDivsForColors(shuffledColors);
