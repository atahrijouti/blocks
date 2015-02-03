var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="phaser.d.ts" />
/// <reference path="config.ts" />
var g;
var blocks;
(function (blocks) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this);
        }
        Game.prototype.preload = function () {
            /*
             TODO: find out if there is a better way of passing bitmapdata to tilesprite
             TODO: also find out how caching works.
             */
            this.backgroundBitMap = this.game.cache.getBitmapData('backgroundBitMap');
            this.squareBitMap = this.game.cache.getBitmapData('squareBitMap');
        };
        Game.prototype.create = function () {
            var game = this.game;
            g = this.blob = game.make.group();
            this.backgroundSprite = game.add.tileSprite(0, 0, game.width, game.height, this.backgroundBitMap);
            var bg = game.add.sprite(0, 0);
            bg.fixedToCamera = true;
            bg.scale.setTo(game.width, game.height);
            bg.inputEnabled = true;
            bg.input.priorityID = 0;
            bg.events.onInputDown.add(this.onTileClick, this);
            //game.add.existing(this.blob);
            var keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
            var keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            var keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            var keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            var keyPageUp = game.input.keyboard.addKey(Phaser.Keyboard.PAGE_UP);
            var keyPageDown = game.input.keyboard.addKey(Phaser.Keyboard.PAGE_DOWN);
            keyUp.onDown.add(this.move, this);
            keyDown.onDown.add(this.move, this);
            keyLeft.onDown.add(this.move, this);
            keyRight.onDown.add(this.move, this);
            keyPageUp.onDown.add(this.move, this);
            keyPageDown.onDown.add(this.move, this);
        };
        Game.prototype.move = function (key) {
            if (key.keyCode == Phaser.Keyboard.UP) {
                this.blob.position.y -= c.Game.SQUARE_SIDE;
            }
            if (key.keyCode == Phaser.Keyboard.DOWN) {
                this.blob.position.y += c.Game.SQUARE_SIDE;
            }
            if (key.keyCode == Phaser.Keyboard.LEFT) {
                this.blob.position.x -= c.Game.SQUARE_SIDE;
            }
            if (key.keyCode == Phaser.Keyboard.RIGHT) {
                this.blob.position.x += c.Game.SQUARE_SIDE;
            }
            if (key.keyCode == Phaser.Keyboard.PAGE_UP) {
                console.log(this.blob.getBounds());
            }
            if (key.keyCode == Phaser.Keyboard.PAGE_DOWN) {
                console.log(this.blob.getBounds());
            }
        };
        Game.prototype.update = function () {
        };
        Game.prototype.onTileClick = function (bg, pointer) {
            if (pointer.isDown) {
                console.log('clicked tile');
                this.updateCachedSprite();
                var sprite = this.game.make.sprite(Phaser.Math.snapToFloor(pointer.x - this.blob.position.x, c.Game.SQUARE_SIDE), Phaser.Math.snapToFloor(pointer.y - this.blob.position.y, c.Game.SQUARE_SIDE));
                this.squareBitMap.add(sprite);
                sprite.inputEnabled = true;
                sprite.input.priorityID = 1;
                sprite.events.onInputDown.add(this.onSpriteClick, this);
                this.blob.add(sprite);
            }
        };
        Game.prototype.updateCachedSprite = function () {
            var game = this.game;
            var bmd = this.squareBitMap;
            bmd.ctx.beginPath();
            var fromx = game.rnd.realInRange(0, c.Game.SQUARE_SIDE);
            var fromy = game.rnd.realInRange(0, c.Game.SQUARE_SIDE);
            bmd.ctx.moveTo(fromx, fromy);
            var tox = game.rnd.realInRange(0, c.Game.SQUARE_SIDE);
            var toy = game.rnd.realInRange(0, c.Game.SQUARE_SIDE);
            bmd.ctx.lineTo(tox, toy);
            bmd.ctx.stroke();
        };
        Game.prototype.onSpriteClick = function (sprite, pointer) {
            if (pointer.isDown) {
                console.log('clicked sprite');
                sprite.kill();
            }
        };
        return Game;
    })(Phaser.State);
    blocks.Game = Game;
})(blocks || (blocks = {}));
//# sourceMappingURL=pre-game.state.js.map