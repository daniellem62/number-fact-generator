//MVP 1
//Pull a random trivia fact from http://numbersapi.com/

//Test pulling from the API
async function getFact() {
  try {
    const response = await fetch(`http://numbersapi.com/random?json`, {
      headers: {
        Accept: "application/JSON",
      },
    });
    const data = await response.json();
    console.log(data.text);
    return data.text;
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}
getFact();

const newTriviaButton = document.getElementById("triviaBtn");
//fetch the api in a variable
//create another variable for the JSON
//Return result
//When the user presses a button
newTriviaButton.addEventListener("click", getFact);
//Then diplay fact as text into a field
function displayFact(fact) {
  const factElement = document.getElementById("fact");
  factElement.textContent = fact;
}
async function getAndDisplayFact() {
  const fact = await getFact();
  displayFact(fact);
}
