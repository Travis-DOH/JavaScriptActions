// Call request-promise from @actions/core library
const request = require("request-promise");

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent":
            "Writing JavaScript action GitHub Skills course"
    },
    json: true
};

async function getJoke() {
    const res = await request(options);
    // Return "joke" key from the JSON object provided by the API
    return res.joke;
}

// Export the function for use in the main.js file
module.exports = getJoke;