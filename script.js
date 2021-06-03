const jokeData = document.querySelector("#jokeData");

const jokeButton = document.querySelector("#jokeButton");

function getNewJoke() {
    axios.get("https://official-joke-api.appspot.com/jokes/random")
    .then(response => jokeData.innerHTML = `${response.data.setup}<br>${response.data.punchline}`)
    .catch(err => alert(err))
}

jokeButton.addEventListener("click", getNewJoke);
