/// <reference path="phaser.d.ts" />
/// <reference path="game.state.ts" />
/// <reference path="config.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var blocks;
(function (blocks) {
    var Preload = (function (_super) {
        __extends(Preload, _super);
        function Preload() {
            _super.apply(this, arguments);
        }
        Preload.prototype.preload = function () {
            this.makeBackgroundSprite();
            this.makeSquareSprite();
        };
        Preload.prototype.create = function () {
            var game = this.game;
            game.state.add('game', blocks.Game);
            game.state.start('game');
        };
        Preload.prototype.makeBackgroundSprite = function () {
            var game = this.game;
            var bmd = game.make.bitmapData(c.Game.SQUARE_SIDE, c.Game.SQUARE_SIDE, 'backgroundBitMap', true);
            var ctx = bmd.ctx;
            ctx.strokeStyle = '#444466';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, c.Game.SQUARE_SIDE);
            ctx.moveTo(0, c.Game.SQUARE_SIDE);
            ctx.lineTo(c.Game.SQUARE_SIDE, c.Game.SQUARE_SIDE);
            ctx.stroke();
            ctx.closePath();
            bmd.render();
        };
        Preload.prototype.makeSquareSprite = function () {
            var game = this.game;
            var bmd = game.make.bitmapData(c.Game.SQUARE_SIDE, c.Game.SQUARE_SIDE, 'squareBitMap', true);
            bmd.ctx.fillStyle = '#2378ef';
            bmd.ctx.fillRect(0, 0, c.Game.SQUARE_SIDE, c.Game.SQUARE_SIDE);
            bmd.ctx.strokeStyle = '#efefef';
            bmd.ctx.lineWidth = 1;
            bmd.ctx.closePath();
            bmd.render();
        };
        return Preload;
    })(Phaser.State);
    blocks.Preload = Preload;
})(blocks || (blocks = {}));
//# sourceMappingURL=preload.state.js.map