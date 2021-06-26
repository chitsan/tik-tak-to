export default class GameView {
  constructor() {}
  update(game) {
    this.updateTurn(game);
    this.updateBoard(game);
  }
  updateBoard(game) {
    const winning = game.findWinningCombinations();

    for (let i = 0; i < game.board.length; i++) {
      const title = document.querySelector(`.board-title[data-index='${i}']`);
      title.classList.remove("title-winner");
      let tileType = game.board[i] == "X" ? "title-x" : "title-o";
      title.innerHTML = `<span class="${tileType}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;

      if (winning && winning.includes(i)) {
        title.classList.add("title-winner");
      }
    }
  }

  updateTurn(game) {
    let playerX = document.querySelector(".player-x");
    let playerO = document.querySelector(".player-o");
    playerX.classList.remove("active");
    playerO.classList.remove("active");
    if (game.turn == "X") {
      playerX.classList.add("active");
    } else {
      playerO.classList.add("active");
    }
  }
}
