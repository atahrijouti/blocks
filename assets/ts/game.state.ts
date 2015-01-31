/// <reference path="phaser.d.ts" />
module blocks {
    export class Game extends  Phaser.State{
        game:Phaser.Game;
        static COLUMNS:number;
        static ROWS:number;
        static SQUARE_SIDE:number;
        backgroundBitMap:Phaser.BitmapData;
        squareBitMap:Phaser.BitmapData;

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
            this.makeSquareSprite();
            /*
            TODO: find out if there is a better way of passing bitmapdata to tilesprite
            TODO: also find out how caching works.
            */

            game.add.tileSprite(0,0,game.width,game.height,this.backgroundBitMap);
            game.add.sprite(
                Phaser.Math.snapToFloor(2*Game.SQUARE_SIDE,Game.SQUARE_SIDE),
                Phaser.Math.snapToFloor(2*Game.SQUARE_SIDE,Game.SQUARE_SIDE),
                this.squareBitMap);

            game.input.onDown.add(this.onTileClick, this);
        }
        render(){

        }
        makeSquareSprite(){
            var game = this.game;

            var bmd = this.squareBitMap = game.make.bitmapData(Game.SQUARE_SIDE,Game.SQUARE_SIDE,'squareBitMap',true);

            bmd.ctx.fillStyle = '#2378ef';
            bmd.ctx.fillRect(0,0,Game.SQUARE_SIDE,Game.SQUARE_SIDE);

            bmd.ctx.strokeStyle = '#efefef';
            bmd.ctx.lineWidth = 1;

            bmd.ctx.closePath();

            bmd.render();
        }
        makeBackgroundSprite(){
            var game = this.game;
            var bmd = this.backgroundBitMap = game.make.bitmapData(Game.SQUARE_SIDE,Game.SQUARE_SIDE,'backgroundBitMap',true);
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
        onTileClick(pointer,me){
            if(pointer.isDown){
                var game = this.game;
                var bmd = this.squareBitMap;
                bmd.ctx.beginPath();
                var fromx = game.rnd.realInRange(0, Game.SQUARE_SIDE);
                var fromy = game.rnd.realInRange(0, Game.SQUARE_SIDE);
                bmd.ctx.moveTo(fromx,fromy);
                var tox = game.rnd.realInRange(0, Game.SQUARE_SIDE);
                var toy = game.rnd.realInRange(0, Game.SQUARE_SIDE);
                bmd.ctx.lineTo(tox,toy);
                bmd.ctx.stroke();

                this.game.add.sprite(
                    Phaser.Math.snapToFloor(pointer.x,Game.SQUARE_SIDE),
                    Phaser.Math.snapToFloor(pointer.y,Game.SQUARE_SIDE),
                    this.squareBitMap);
            }
        }
    }
}

