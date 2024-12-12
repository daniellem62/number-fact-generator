//MVP 1

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

const newTriviaButton = document.getElementById("triviaBtn");

newTriviaButton.addEventListener("click", getAndDisplayTriviaFact);

document.addEventListener("DOMContentLoaded", getAndDisplayTriviaFact);

function displayTriviaFact(fact) {
  const factElement = document.getElementById("fact");
  factElement.textContent = fact;
}
async function getAndDisplayTriviaFact() {
  const fact = await getTriviaFact();
  displayTriviaFact(fact);
}
