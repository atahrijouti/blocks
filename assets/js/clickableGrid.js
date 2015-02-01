var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="phaser.d.ts" />
var blocks;
(function (blocks) {
    var ClickableGrid = (function (_super) {
        __extends(ClickableGrid, _super);
        function ClickableGrid() {
            _super.call(this);
            ClickableGrid.COLUMNS = 12;
            ClickableGrid.ROWS = 20;
            ClickableGrid.SQUARE_SIDE = 40;
        }
        ClickableGrid.prototype.preload = function () {
        };
        ClickableGrid.prototype.create = function () {
            var game = this.game;
            game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
            this.makeBackgroundSprite();
            this.makeSquareSprite();
            /*
             TODO: find out if there is a better way of passing bitmapdata to tilesprite
             TODO: also find out how caching works.
             */
            this.backgroundSprite = game.add.tileSprite(0, 0, game.width, game.height, this.backgroundBitMap);
            var bg = game.add.sprite(0, 0);
            bg.fixedToCamera = true;
            bg.scale.setTo(game.width, game.height);
            bg.inputEnabled = true;
            bg.input.priorityID = 0;
            bg.events.onInputDown.add(this.onTileClick, this);
        };
        ClickableGrid.prototype.makeSquareSprite = function () {
            var game = this.game;
            var bmd = this.squareBitMap = game.make.bitmapData(ClickableGrid.SQUARE_SIDE, ClickableGrid.SQUARE_SIDE, 'squareBitMap', true);
            bmd.ctx.fillStyle = '#2378ef';
            bmd.ctx.fillRect(0, 0, ClickableGrid.SQUARE_SIDE, ClickableGrid.SQUARE_SIDE);
            bmd.ctx.strokeStyle = '#efefef';
            bmd.ctx.lineWidth = 1;
            bmd.ctx.closePath();
            bmd.render();
        };
        ClickableGrid.prototype.makeBackgroundSprite = function () {
            var game = this.game;
            var bmd = this.backgroundBitMap = game.make.bitmapData(ClickableGrid.SQUARE_SIDE, ClickableGrid.SQUARE_SIDE, 'backgroundBitMap', true);
            var ctx = bmd.ctx;
            ctx.strokeStyle = '#444466';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, ClickableGrid.SQUARE_SIDE);
            ctx.moveTo(0, ClickableGrid.SQUARE_SIDE);
            ctx.lineTo(ClickableGrid.SQUARE_SIDE, ClickableGrid.SQUARE_SIDE);
            ctx.stroke();
            ctx.closePath();
            bmd.render();
        };
        ClickableGrid.prototype.onTileClick = function (bg, pointer) {
            if (pointer.isDown) {
                console.log('clicked tile');
                var game = this.game;
                var bmd = this.squareBitMap;
                bmd.ctx.beginPath();
                var fromx = game.rnd.realInRange(0, ClickableGrid.SQUARE_SIDE);
                var fromy = game.rnd.realInRange(0, ClickableGrid.SQUARE_SIDE);
                bmd.ctx.moveTo(fromx, fromy);
                var tox = game.rnd.realInRange(0, ClickableGrid.SQUARE_SIDE);
                var toy = game.rnd.realInRange(0, ClickableGrid.SQUARE_SIDE);
                bmd.ctx.lineTo(tox, toy);
                bmd.ctx.stroke();
                var sprite = this.game.add.sprite(Phaser.Math.snapToFloor(pointer.x, ClickableGrid.SQUARE_SIDE), Phaser.Math.snapToFloor(pointer.y, ClickableGrid.SQUARE_SIDE), this.squareBitMap);
                sprite.inputEnabled = true;
                sprite.input.priorityID = 1;
                sprite.events.onInputDown.add(this.onSpriteClick, this);
            }
        };
        ClickableGrid.prototype.onSpriteClick = function (sprite, pointer) {
            if (pointer.isDown) {
                console.log('clicked sprite');
                sprite.kill();
            }
        };
        return ClickableGrid;
    })(Phaser.State);
    blocks.ClickableGrid = ClickableGrid;
})(blocks || (blocks = {}));
//# sourceMappingURL=clickableGrid.js.map