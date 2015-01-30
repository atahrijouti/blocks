var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="phaser.d.ts" />
var blocks;
(function (blocks) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this);
            Game.COLUMNS = 12;
            Game.ROWS = 20;
            Game.SQUARE_SIDE = 40;
        }
        Game.prototype.preload = function () {
        };
        Game.prototype.create = function () {
            var game = this.game;
            game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
            this.makeBackgroundSprite();
            //TODO: find out if there is a better way of passing bitmapdata to tilesprite
            game.add.tileSprite(0, 0, game.width, game.height, game.cache.getBitmapData('backgroundBitMap'));
            console.log('lol');
        };
        Game.prototype.render = function () {
        };
        Game.prototype.makeBackgroundSprite = function () {
            var game = this.game;
            var bmd = game.make.bitmapData(Game.SQUARE_SIDE, Game.SQUARE_SIDE, 'backgroundBitMap', true);
            var ctx = bmd.ctx;
            ctx.strokeStyle = '#444466';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, Game.SQUARE_SIDE);
            ctx.moveTo(0, Game.SQUARE_SIDE);
            ctx.lineTo(Game.SQUARE_SIDE, Game.SQUARE_SIDE);
            ctx.stroke();
            ctx.closePath();
            bmd.render();
        };
        return Game;
    })(Phaser.State);
    blocks.Game = Game;
})(blocks || (blocks = {}));
//# sourceMappingURL=game.state.js.map