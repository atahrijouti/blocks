/// <reference path="phaser.d.ts" />
module blocks {
    export class Game extends  Phaser.State{
        game:Phaser.Game;
        static COLUMNS:number;
        static ROWS:number;
        static SQUARE_SIDE:number;

        constructor(){
            super();
            Game.COLUMNS = 12;
            Game.ROWS = 20;
            Game.SQUARE_SIDE = 40;
        }
        preload(){}
        create(){
            var game = this.game;
            game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;

            this.makeBackgroundSprite();
            //TODO: find out if there is a better way of passing bitmapdata to tilesprite
            game.add.tileSprite(0,0,game.width,game.height,game.cache.getBitmapData('backgroundBitMap'));

            console.log('lol');

        }
        render(){

        }
        makeBackgroundSprite(){
            var game = this.game;
            var bmd = game.make.bitmapData(Game.SQUARE_SIDE,Game.SQUARE_SIDE,'backgroundBitMap',true);
            var ctx = bmd.ctx;
            ctx.strokeStyle = '#444466';
            ctx.lineWidth = 1;

            ctx.beginPath();

            ctx.moveTo(0,0);
            ctx.lineTo(0,Game.SQUARE_SIDE);

            ctx.moveTo(0,Game.SQUARE_SIDE);
            ctx.lineTo(Game.SQUARE_SIDE,Game.SQUARE_SIDE);

            ctx.stroke();

            ctx.closePath();
            bmd.render();

        }
    }
}

