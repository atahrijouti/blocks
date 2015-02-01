var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="phaser.d.ts" />
/// <reference path="preload.state.ts" />
var blocks;
(function (blocks) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.create = function () {
            var game = this.game;
            game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
            game.state.add('preload', blocks.Preload);
            game.state.start('preload');
        };
        return Boot;
    })(Phaser.State);
    blocks.Boot = Boot;
})(blocks || (blocks = {}));
//# sourceMappingURL=boot.state.js.map