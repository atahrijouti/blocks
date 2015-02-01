/// <reference path="phaser.d.ts" />
module blocks {
    export class ClickableGrid extends  Phaser.State{
        game:Phaser.Game;
        static COLUMNS:number;
        static ROWS:number;
        static SQUARE_SIDE:number;
        backgroundBitMap:Phaser.BitmapData;
        squareBitMap:Phaser.BitmapData;
        backgroundSprite:Phaser.TileSprite;

        constructor(){
            super();
            ClickableGrid.COLUMNS = 12;
            ClickableGrid.ROWS = 20;
            ClickableGrid.SQUARE_SIDE = 40;
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

            this.backgroundSprite = game.add.tileSprite(0,0,game.width,game.height,this.backgroundBitMap);
            var bg = game.add.sprite(0, 0);
            bg.fixedToCamera = true;
            bg.scale.setTo(game.width, game.height);
            bg.inputEnabled = true;
            bg.input.priorityID = 0;
            bg.events.onInputDown.add(this.onTileClick,this);

        }

        makeSquareSprite(){
            var game = this.game;

            var bmd = this.squareBitMap = game.make.bitmapData(ClickableGrid.SQUARE_SIDE,ClickableGrid.SQUARE_SIDE,'squareBitMap',true);

            bmd.ctx.fillStyle = '#2378ef';
            bmd.ctx.fillRect(0,0,ClickableGrid.SQUARE_SIDE,ClickableGrid.SQUARE_SIDE);

            bmd.ctx.strokeStyle = '#efefef';
            bmd.ctx.lineWidth = 1;

            bmd.ctx.closePath();

            bmd.render();
        }
        makeBackgroundSprite(){
            var game = this.game;
            var bmd = this.backgroundBitMap = game.make.bitmapData(ClickableGrid.SQUARE_SIDE,ClickableGrid.SQUARE_SIDE,'backgroundBitMap',true);
            var ctx = bmd.ctx;
            ctx.strokeStyle = '#444466';
            ctx.lineWidth = 1;

            ctx.beginPath();

            ctx.moveTo(0,0);
            ctx.lineTo(0,ClickableGrid.SQUARE_SIDE);

            ctx.moveTo(0,ClickableGrid.SQUARE_SIDE);
            ctx.lineTo(ClickableGrid.SQUARE_SIDE,ClickableGrid.SQUARE_SIDE);

            ctx.stroke();

            ctx.closePath();
            bmd.render();

        }
        onTileClick(bg,pointer){
            if(pointer.isDown){
                console.log('clicked tile');
                var game = this.game;
                var bmd = this.squareBitMap;
                bmd.ctx.beginPath();
                var fromx = game.rnd.realInRange(0, ClickableGrid.SQUARE_SIDE);
                var fromy = game.rnd.realInRange(0, ClickableGrid.SQUARE_SIDE);
                bmd.ctx.moveTo(fromx,fromy);
                var tox = game.rnd.realInRange(0, ClickableGrid.SQUARE_SIDE);
                var toy = game.rnd.realInRange(0, ClickableGrid.SQUARE_SIDE);
                bmd.ctx.lineTo(tox,toy);
                bmd.ctx.stroke();

                var sprite = this.game.add.sprite(
                    Phaser.Math.snapToFloor(pointer.x,ClickableGrid.SQUARE_SIDE),
                    Phaser.Math.snapToFloor(pointer.y,ClickableGrid.SQUARE_SIDE),
                    this.squareBitMap);

                sprite.inputEnabled = true;
                sprite.input.priorityID = 1;
                sprite.events.onInputDown.add(this.onSpriteClick,this);

            }
        }
        onSpriteClick(sprite,pointer){
            if(pointer.isDown){
                console.log('clicked sprite')
                sprite.kill();
            }
        }
    }
}

