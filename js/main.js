import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () => {
  onRestartClick();
});
let tiles = document.querySelectorAll(".board-title");

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    console.log(tile.dataset.index);

    onTileClick(tile.dataset.index);
  });
});

function onTileClick(i) {
  game.makeMove(i);

  gameView.update(game);
}

function onRestartClick() {
  game = new Game();
  gameView.update(game);
}

gameView.update(game);
