//variables
const sendTweet = document.querySelector("#formulario"),
  containerTweets = document.querySelector("#lista-tweets");
let tweets = [];

//Event Listener
sendTweet.addEventListener("submit", addTweet);

document.addEventListener("DOMContentLoaded", () => {
  tweets = JSON.parse(localStorage.getItem("tweets")) || [];

  createHtml();
});

//functions
function addTweet(e) {
  e.preventDefault();

  const tweet = document.querySelector("#tweet").value;

  if (tweet == "") {
    showError("this field can be empty");

    return;
  }

  tweetObj = {
    id: Date.now(),
    tweet,
  };

  tweets = [...tweets, tweetObj];

  createHtml();

  sendTweet.reset();
}

function showError(error) {
  const message = document.createElement("p"),
    container = document.querySelector("#contenido");

  message.textContent = error;
  message.classList.add("error");

  container.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 3000);
}

function createHtml() {
  clearTweets();

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      const btnRemove = document.createElement("a"),
        groupTweets = document.createElement("ul"),
        li = document.createElement("li");

      btnRemove.classList.add("borrar-tweet");
      btnRemove.innerHTML = "X";

      //add remove function
      btnRemove.onclick = () => {
        removeTweet(tweet.id);
      };

      li.innerHTML = tweet.tweet;

      li.appendChild(btnRemove);

      groupTweets.appendChild(li);
      containerTweets.appendChild(groupTweets);
    });
  }

  synchronizeStorage();
}

function clearTweets() {
  while (containerTweets.firstChild) {
    containerTweets.removeChild(containerTweets.firstChild);
  }
}

function synchronizeStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function removeTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);

    createHtml();
}
