/* Make a call to https://api.rawg.io/api/games and pass the JSON object it returns to a function called createGames.

For each game object in the results, the createGames function should create the following HTML in a loop. Replace the placeholder values with the relevant properties from each object: */

const apiUrl = "https://api.rawg.io/api/games";

fetch(apiUrl)
  .then(response => response.json())
  .then(createGames);

function createGames(json) {
  const results = json.results;

  const resultsdiv = document.querySelector(".results");

  let html = "";

  results.forEach(game => {
    console.dir(game);
    let gameName = game.name;
    let imageUrl = game.background_image;

    if (game) {
      gameName = game.name;
      imageUrl = game.background_image;
    }

    html += `<div class="game">
            <h2>${gameName}</h2>
            <img src=${imageUrl} alt="Name of game">
        </div>`;
  });

  resultsdiv.innerHTML = html;
}
