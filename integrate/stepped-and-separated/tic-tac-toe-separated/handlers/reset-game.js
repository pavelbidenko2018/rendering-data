function resetGame() {
  debugger;
  // update state
  game.board = [
    null, null, null,
    null, null, null,
    null, null, null
  ];
  game.nextPlayer = 'X';

  // update UI from state
  for (let id = 0; id < 9; id++) {
    document.getElementById(id).innerHTML = game.board[id];
  }

  // log action
  log.push({
    handler: 'reset board',
    game: deepClone(game)
  })
}
