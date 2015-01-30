/// <reference path="phaser.d.ts" />
/// <reference path="game.state.ts" />

window.onload = () => {
    var game = new Phaser.Game(480,800,Phaser.AUTO,'blocks-game');
    game.state.add('game',blocks.Game);
    game.state.start('game');
};

