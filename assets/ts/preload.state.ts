/// <reference path="phaser.d.ts" />
/// <reference path="game.state.ts" />
/// <reference path="config.ts" />

module blocks {
    export class Preload extends Phaser.State {
        preload(){
            this.makeBackgroundSprite();
            this.makeSquareSprite();

        }
        create(){
            var game = this.game;
            game.state.add('game',blocks.Game);
            game.state.start('game');
        }
        makeBackgroundSprite(){
            var game = this.game;
            var bmd = game.make.bitmapData(c.Game.SQUARE_SIDE,c.Game.SQUARE_SIDE,'backgroundBitMap',true);
            var ctx = bmd.ctx;
            ctx.strokeStyle = '#444466';
            ctx.lineWidth = 1;

            ctx.beginPath();

            ctx.moveTo(0,0);
            ctx.lineTo(0,c.Game.SQUARE_SIDE);

            ctx.moveTo(0,c.Game.SQUARE_SIDE);
            ctx.lineTo(c.Game.SQUARE_SIDE,c.Game.SQUARE_SIDE);

            ctx.stroke();

            ctx.closePath();
            bmd.render();

        }
        makeSquareSprite(){
            var game = this.game;

            var bmd = game.make.bitmapData(c.Game.SQUARE_SIDE,c.Game.SQUARE_SIDE,'squareBitMap',true);

            bmd.ctx.fillStyle = '#2378ef';
            bmd.ctx.fillRect(0,0,c.Game.SQUARE_SIDE,c.Game.SQUARE_SIDE);

            bmd.ctx.strokeStyle = '#efefef';
            bmd.ctx.lineWidth = 1;

            bmd.ctx.closePath();

            bmd.render();
        }
    }
}
