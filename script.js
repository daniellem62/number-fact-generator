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
    return data;
} catch (error) {
    console.log(`error: ${error.message}`);
}
}
getFact();

//fetch the api in a variable
//create another variable for the JSON 
//Return result

//When the user presses a button
//Then diplay fact as text into a field


