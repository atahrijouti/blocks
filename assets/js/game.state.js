var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="phaser.d.ts" />
/// <reference path="config.ts" />
/// <reference path="mosaique.ts" />
var g;
var T = (function (_super) {
    __extends(T, _super);
    function T(game, x, y) {
        _super.call(this, game, x, y);
    }
    return T;
})(Phaser.Sprite);
var blocks;
(function (blocks) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this);
        }
        Game.prototype.preload = function () {
            this.backgroundBitMap = this.game.cache.getBitmapData('backgroundBitMap');
            this.squareBitMap = this.game.cache.getBitmapData('squareBitMap');
        };
        Game.prototype.create = function () {
            var game = this.game;
            g = this.blob = game.make.bitmapData();
            this.backgroundSprite = game.add.tileSprite(0, 0, game.width, game.height, this.backgroundBitMap);
            var T = new blocks.Mosaique('T', game, 0, 1);
            var Z = new blocks.Mosaique('Z', game, 2, 4);
            var ZMirrored = new blocks.Mosaique('ZMirrored', game, 3, 0);
            var L = new blocks.Mosaique('L', game, 4, 3);
            var LMirrored = new blocks.Mosaique('LMirrored', game, 0, 6);
            var Square = new blocks.Mosaique('Square', game, 7, 0);
            var I = new blocks.Mosaique('I', game, 7, 3);
            game.add.existing(T);
            game.add.existing(Z);
            game.add.existing(ZMirrored);
            game.add.existing(L);
            game.add.existing(LMirrored);
            game.add.existing(Square);
            game.add.existing(I);
            this.initKeyHandling();
        };
        Game.prototype.move = function (key) {
            var game = this.game;
            if (key.keyCode == Phaser.Keyboard.SPACEBAR) {
                var x = Phaser.Math.snapTo(game.rnd.integerInRange(0, c.Game.WIDTH), c.Game.SQUARE_SIDE);
                var y = Phaser.Math.snapTo(game.rnd.integerInRange(0, c.Game.HEIGHT), c.Game.SQUARE_SIDE);
                var sprite = game.make.sprite(x, y);
                this.squareBitMap.add(sprite);
                game.add.existing(sprite);
            }
            if (key.keyCode == Phaser.Keyboard.DOWN) {
            }
            if (key.keyCode == Phaser.Keyboard.LEFT) {
            }
            if (key.keyCode == Phaser.Keyboard.RIGHT) {
            }
        };
        Game.prototype.update = function () {
        };
        Game.prototype.initKeyHandling = function () {
            var game = this.game;
            var keySpace = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            var keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            var keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            var keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            keySpace.onDown.add(this.move, this);
            keyDown.onDown.add(this.move, this);
            keyLeft.onDown.add(this.move, this);
            keyRight.onDown.add(this.move, this);
        };
        return Game;
    })(Phaser.State);
    blocks.Game = Game;
})(blocks || (blocks = {}));
//# sourceMappingURL=game.state.js.map