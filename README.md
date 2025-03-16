# Number Facts Generator

A simple web application that fetches interesting number facts from an external API. Users can enter a number to receive a math or trivia fact, enter a date or year for related facts, or get a random fact in different categories. Built with JavaScript, HTML, and CSS for a smooth and interactive experience.

## 📋 Overview
This project enhances skills in:

- Fetching data using the `fetch()` API
- Handling asynchronous operations with `async/await`
- Manipulating the DOM dynamically
- Implementing basic error handling for robustness

## 🚀 Getting Started

### Step 1: How It Works
Users can interact with the application by:
- Entering a number to get a math or trivia fact.
- Entering a date (month/day) to receive historical facts.
- Entering a year for year-based trivia.
- Requesting a completely random fact.

### Step 2: API Used
This project utilizes the **NumbersAPI** to fetch interesting numerical facts. API documentation: [NumbersAPI](http://numbersapi.com/)

### Step 3: Project Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/number-facts-generator.git
   ```
2. Open `index.html` in a browser.
3. Interact with the app by entering numbers or dates.

## 🛠️ Tech Stack
- **JavaScript** - Fetching data and DOM manipulation
- **HTML** - Structuring the UI
- **CSS** - Styling for a responsive design

## 📜 Code Implementation
Example of fetching number facts:
```js
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
```

## 🎯 Success Criteria
This project meets the following goals:
- Successfully fetches and displays data from NumbersAPI
- Provides an interactive UI for users to explore number facts
- Implements error handling for failed requests
- Responsive design ensuring accessibility across devices

## 🔍 Testing Checklist
Before deployment, the application was tested for:
- Browser compatibility (Chrome, Firefox, Edge)
- Proper error handling for network failures
- Responsive design on different screen sizes
- Ensuring data retrieval for different number types

## 📚 Resources
- [MDN Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript DOM Manipulation Guide](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [Async/Await Syntax](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

## 🤝 Contributing
Feel free to fork this repository and submit pull requests with improvements, bug fixes, or new features!

---



