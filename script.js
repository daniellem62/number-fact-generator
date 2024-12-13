//MVP 1
//Show random trivia on page load
document.addEventListener("DOMContentLoaded", getAndDisplayTriviaFact);

//Assign image for Trivia

const picture = document.getElementById("picture");

//TRIVIA SECTION

//Pull random Trivia from API
async function getTriviaFact() {
  try {
    let inputText = document.getElementById("userInput").value;
    if (inputText == "") {
      inputText = "random"
    }
    const response = await fetch(`http://numbersapi.com/${inputText}?json`, {
      headers: {
        Accept: "application/JSON",
      },
    });
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}

//Assigned Trivia button
const newTriviaButton = document.getElementById("triviaBtn");

//Function to change to Trivia Image
function changeToTrivia() {
  picture.src = "images/Chasers.jpg";
}

//Adds click event to the trivia button
newTriviaButton.addEventListener("click", () => {
  getAndDisplayTriviaFact();
  changeToTrivia();
});

//Update the DOM with new fact
function displayTriviaFact(fact) {
  const factElement = document.getElementById("fact");
  factElement.textContent = fact;
}

//Retrieves and displays new joke
async function getAndDisplayTriviaFact() {
  const fact = await getTriviaFact();
  displayTriviaFact(fact);

}

//MATH SECTION

//Pull random math from API
async function getMathFact() {
  try {
    let inputText = document.getElementById("userInput").value;
    if (inputText == "") {
      inputText = "random"
    }
    const response = await fetch(`http://numbersapi.com/${inputText}/math?json&min=0&max=10000`, {
      headers: {
        Accept: "application/JSON",
      },
    });
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}

//Assigned math button
const newMathButton = document.getElementById("mathBtn");

//Function to change to Trivia Image
function changeToMath() {
  picture.src = "images/Einstein-2.jpg";
}

//Adds click event to the trivia button
newMathButton.addEventListener("click", () => {
  getAndDisplayMathFact();
  changeToMath();
});

//Update the DOM with new fact
function displayMathFact(fact) {
  const factElement = document.getElementById("fact");
  factElement.textContent = fact;
}

//Retrieves and displays new joke
async function getAndDisplayMathFact() {
  const fact = await getMathFact();
  displayMathFact(fact);
}

//DATE SECTION

//Pull random date from API
async function getDateFact() {
  try {
    let inputText = document.getElementById("userInput").value;
    if (inputText == "") {
      inputText = "random"
    }
    const response = await fetch(`http://numbersapi.com/${inputText}/date?json`, {
      headers: {
        Accept: "application/JSON",
      },
    });
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}

//Assigned date button
const newDateButton = document.getElementById("dateBtn");

//function to change to Date Image
function changeToDate() {
  picture.src = "images/Calendar.jpg";
}

//Adds click event to the date button
newDateButton.addEventListener("click", () => {
  getAndDisplayDateFact();
  changeToDate();
});

//Update the DOM with new fact
function displayDateFact(fact) {
  const factElement = document.getElementById("fact");
  factElement.textContent = fact;
}

//Retrieves and displays new joke
async function getAndDisplayDateFact() {
  const fact = await getDateFact();
  displayDateFact(fact);
}

//YEAR SECTION

//Pull random year from API
async function getYearFact() {
  try {
    let inputText = document.getElementById("userInput").value;
    if (inputText == "") {
      inputText = "random"
    }
    const response = await fetch(`http://numbersapi.com/${inputText}/year?json`, {
      headers: {
        Accept: "application/JSON",
      },
    });
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}

//Assigned year button
const newYearButton = document.getElementById("yearBtn");

//Function to change to Year Image
function changeToYear() {
  picture.src = "images/Year.jpg";
}

//Adds click event to the year button
newYearButton.addEventListener("click", () => {
  getAndDisplayYearFact(); 
  changeToYear();
});

//Update the DOM with new fact
function displayYearFact(fact) {
  const factElement = document.getElementById("fact");
  factElement.textContent = fact;
}

//Retrieves and displays new joke
async function getAndDisplayYearFact() {
  const fact = await getYearFact();
  displayYearFact(fact);
}

