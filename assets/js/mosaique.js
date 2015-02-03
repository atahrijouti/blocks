var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="config.ts" />
/// <reference path="phaser.d.ts" />
var blocks;
(function (blocks) {
    var Mosaique = (function (_super) {
        __extends(Mosaique, _super);
        function Mosaique(shape, game, row, col) {
            _super.call(this, game, col * c.Game.SQUARE_SIDE, row * c.Game.SQUARE_SIDE);
            this.types = {
                T: [2, 3, [[0, 0], [0, 1], [0, 2], [1, 1]]],
                Z: [2, 3, [[0, 0], [0, 1], [1, 1], [1, 2]]],
                ZMirrored: [2, 3, [[0, 1], [0, 2], [1, 0], [1, 1]]],
                L: [2, 3, [[0, 0], [1, 0], [1, 1], [1, 2]]],
                LMirrored: [2, 3, [[0, 0], [0, 1], [0, 2], [1, 0]]],
                Square: [2, 2, [[0, 0], [0, 1], [1, 0], [1, 1]]],
                I: [1, 4, [[0, 0], [0, 1], [0, 2], [0, 3]]]
            };
            this.shape = shape;
            this.grid = [];
            this.fillGrid();
            if (this.types[shape]) {
                this.rows = this.grid.length;
                this.cols = this.grid[0].length;
                var side = c.Game.SQUARE_SIDE;
                this.bitMap = this.game.make.bitmapData(side * this.cols, side * this.rows);
                this.paint();
            }
            else if (shape === 'blob') {
                this.bitMap = this.game.make.bitmapData(c.Game.WIDTH, c.Game.HEIGHT, 'blobBitmap');
                this.rows = c.Game.ROWS;
                this.cols = c.Game.COLUMNS;
            }
        }
        Mosaique.prototype.paint = function () {
            if (!this.types[this.shape]) {
                return;
            }
            var squareBitmap = this.game.cache.getBitmapData('squareBitMap');
            var side = c.Game.SQUARE_SIDE;
            for (var i = 0; i < 4; i++) {
                var cell = this.types[this.shape][2][i];
                this.bitMap.draw(squareBitmap, cell[1] * side, cell[0] * side);
            }
            this.bitMap.add(this);
        };
        Mosaique.prototype.fillGrid = function () {
            var shape = this.shape;
            if (!this.types[this.shape]) {
                return;
            }
            for (var i = 0; i < this.types[shape][0]; i++) {
                this.grid.push(new Array(this.types[shape][1]));
            }
            for (var i = 0; i < 4; i++) {
                var cell = this.types[shape][2][i];
                this.grid[cell[0]][cell[1]] = 1;
            }
        };
        return Mosaique;
    })(Phaser.Sprite);
    blocks.Mosaique = Mosaique;
})(blocks || (blocks = {}));
//# sourceMappingURL=mosaique.js.map