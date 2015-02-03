/// <reference path="phaser.d.ts" />
/// <reference path="config.ts" />
/// <reference path="mosaique.ts" />
var g;
class T extends Phaser.Sprite{
    constructor(game,x,y){
        super(game,x,y);
    }
}
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

            var T = new blocks.Mosaique('T',game,0,1);
            var Z = new blocks.Mosaique('Z',game,2,4);
            var ZMirrored = new blocks.Mosaique('ZMirrored',game,3,0);
            var L = new blocks.Mosaique('L',game,4,3);
            var LMirrored = new blocks.Mosaique('LMirrored',game,0,6);
            var Square = new blocks.Mosaique('Square',game,7,0);
            var I = new blocks.Mosaique('I',game,7,3);

            game.add.existing(T);
            game.add.existing(Z);
            game.add.existing(ZMirrored);
            game.add.existing(L);
            game.add.existing(LMirrored);
            game.add.existing(Square);
            game.add.existing(I);



            this.initKeyHandling();
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
        initKeyHandling(){
            var game = this.game;
            var keySpace = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            var keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            var keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            var keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            keySpace.onDown.add(this.move,this);
            keyDown.onDown.add(this.move,this);
            keyLeft.onDown.add(this.move,this);
            keyRight.onDown.add(this.move,this);
        }
    }
}

