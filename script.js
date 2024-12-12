//MVP 1
//Show random trivia on page load
document.addEventListener("DOMContentLoaded", getAndDisplayTriviaFact);

//TRIVIA SECTION

//Pull random Trivia from API
async function getTriviaFact() {
  try {
    const response = await fetch(`http://numbersapi.com/random?json&min=0&max=10000`, {
      headers: {
        Accept: "application/JSON",
      },
    });
    const data = await response.json();
    console.log(data);
    return data.text;
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}

//Assigned Trivia button
const newTriviaButton = document.getElementById("triviaBtn");

//Adds click event to the trivia button
newTriviaButton.addEventListener("click", getAndDisplayTriviaFact);

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
    const response = await fetch(`http://numbersapi.com/random/math?json&min=0&max=10000`, {
      headers: {
        Accept: "application/JSON",
      },
    });
    const data = await response.json();
    console.log(data);
    return data.text;
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}

//Assigned math button
const newMathButton = document.getElementById("mathBtn");

//Adds click event to the trivia button
newMathButton.addEventListener("click", getAndDisplayMathFact);

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
    const response = await fetch(`http://numbersapi.com/random/date?json`, {
      headers: {
        Accept: "application/JSON",
      },
    });
    const data = await response.json();
    console.log(data);
    return data.text;
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}

//Assigned date button
const newDateButton = document.getElementById("dateBtn");

//Adds click event to the trivia button
newDateButton.addEventListener("click", getAndDisplayDateFact);

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
    const response = await fetch(`http://numbersapi.com/random/year?json&min=0&max=2025`, {
      headers: {
        Accept: "application/JSON",
      },
    });
    const data = await response.json();
    console.log(data);
    return data.text;
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}

//Assigned year button
const newYearButton = document.getElementById("yearBtn");

//Adds click event to the year button
newYearButton.addEventListener("click", getAndDisplayYearFact);

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