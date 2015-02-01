/// <reference path="phaser.d.ts" />
/// <reference path="config.ts" />

module blocks {
    export class Game extends Phaser.State{
        game:Phaser.Game;
        backgroundBitMap:Phaser.BitmapData;
        squareBitMap:Phaser.BitmapData;
        backgroundSprite:Phaser.TileSprite;

        constructor(){
            super();
        }
        preload(){
            /*
             TODO: find out if there is a better way of passing bitmapdata to tilesprite
             TODO: also find out how caching works.
             */
            this.backgroundBitMap = this.game.cache.getBitmapData('backgroundBitMap');
            this.squareBitMap = this.game.cache.getBitmapData('squareBitMap');
        }
        create(){
            var game = this.game;

            this.backgroundSprite = game.add.tileSprite(0,0,game.width,game.height,this.backgroundBitMap);

            var bg = game.add.sprite(0, 0);
            bg.fixedToCamera = true;
            bg.scale.setTo(game.width, game.height);
            bg.inputEnabled = true;
            bg.input.priorityID = 0;
            bg.events.onInputDown.add(this.onTileClick,this);

        }

        onTileClick(bg,pointer){
            if(pointer.isDown){
                console.log('clicked tile');
                var game = this.game;
                var bmd = this.squareBitMap;
                bmd.ctx.beginPath();
                var fromx = game.rnd.realInRange(0, c.Game.SQUARE_SIDE);
                var fromy = game.rnd.realInRange(0, c.Game.SQUARE_SIDE);
                bmd.ctx.moveTo(fromx,fromy);
                var tox = game.rnd.realInRange(0, c.Game.SQUARE_SIDE);
                var toy = game.rnd.realInRange(0, c.Game.SQUARE_SIDE);
                bmd.ctx.lineTo(tox,toy);
                bmd.ctx.stroke();

                var sprite = this.game.add.sprite(
                    Phaser.Math.snapToFloor(pointer.x,c.Game.SQUARE_SIDE),
                    Phaser.Math.snapToFloor(pointer.y,c.Game.SQUARE_SIDE),
                    this.squareBitMap);

                sprite.inputEnabled = true;
                sprite.input.priorityID = 1;
                sprite.events.onInputDown.add(this.onSpriteClick,this);

            }
        }
        onSpriteClick(sprite,pointer){
            if(pointer.isDown){
                console.log('clicked sprite');
                sprite.kill();
            }
        }
    }
}

