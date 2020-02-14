/* Make a call to https://api.rawg.io/api/games/4200 and pass the JSON object it returns to a function called createGameDetails.

Inside createGameDetails replace the placeholder values in the HTML above with properties from the object returned from the API call.

Use either the background_image or background_image_additional property as the background image of the <div class="image"> element. */

const apiUrl = "https://api.rawg.io/api/games/4200";

fetch(apiUrl)
  .then(response => response.json())
  .then(createGamesDetails);

function createGamesDetails(json) {
  const imageDiv = document.querySelector(".image");
  imageDiv.style.backgroundImage = `url('${json.background_image}')`;

  const nameDiv = document.querySelector("h1");
  nameDiv.innerHTML = json.name;

  const descriptionDiv = document.querySelector(".description");
  descriptionDiv.innerHTML = json.description;
}
