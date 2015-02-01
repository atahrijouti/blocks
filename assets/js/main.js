/// <reference path="phaser.d.ts" />
/// <reference path="config.ts" />
/// <reference path="boot.state.ts" />
var game;
window.onload = function () {
    game = new Phaser.Game(c.Game.WIDTH, c.Game.HEIGHT, Phaser.AUTO, 'blocks-game');
    game.state.add('boot', blocks.Boot);
    game.state.start('boot');
};
//# sourceMappingURL=main.js.map