/// <reference path="phaser.d.ts" />
/// <reference path="config.ts" />
var g;
module blocks {
    export class Game extends Phaser.State{
        game:Phaser.Game;
        backgroundBitMap:Phaser.BitmapData;
        squareBitMap:Phaser.BitmapData;
        backgroundSprite:Phaser.TileSprite;
        blob:Phaser.BitmapData;
        constructor(){
            super();
        }
        preload(){
            this.backgroundBitMap = this.game.cache.getBitmapData('backgroundBitMap');
            this.squareBitMap = this.game.cache.getBitmapData('squareBitMap');

        }
        create(){
            var game = this.game;
            g = this.blob = game.make.bitmapData();

            this.backgroundSprite = game.add.tileSprite(0,0,game.width,game.height,this.backgroundBitMap);

            var keySpace = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            var keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            var keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            var keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

            keySpace.onDown.add(this.move,this);
            keyDown.onDown.add(this.move,this);
            keyLeft.onDown.add(this.move,this);
            keyRight.onDown.add(this.move,this);
        }
        move(key : Phaser.Key){
            var game = this.game;

            if(key.keyCode == Phaser.Keyboard.SPACEBAR){
                var x = Phaser.Math.snapTo(game.rnd.integerInRange(0,c.Game.WIDTH),c.Game.SQUARE_SIDE);
                var y = Phaser.Math.snapTo(game.rnd.integerInRange(0,c.Game.HEIGHT),c.Game.SQUARE_SIDE);
                var sprite = game.make.sprite(x,y);
                this.squareBitMap.add(sprite);
                game.add.existing(sprite);
            }
            if(key.keyCode == Phaser.Keyboard.DOWN){
            }
            if(key.keyCode == Phaser.Keyboard.LEFT){
            }
            if(key.keyCode == Phaser.Keyboard.RIGHT){
            }
        }

        update(){

        }
    }
}

