/// <reference path="phaser.d.ts" />
/// <reference path="config.ts" />
var g;
module blocks {
    export class Game extends Phaser.State{
        game:Phaser.Game;
        backgroundBitMap:Phaser.BitmapData;
        squareBitMap:Phaser.BitmapData;
        blobBitMap:Phaser.BitmapData;
        backgroundSprite:Phaser.TileSprite;
        blob:Phaser.Group;
        cursors:Phaser.CursorKeys;

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
            g = this.blob = game.make.group();

            this.backgroundSprite = game.add.tileSprite(0,0,game.width,game.height,this.backgroundBitMap);

            var bg = game.add.sprite(0, 0);
            bg.fixedToCamera = true;
            bg.scale.setTo(game.width, game.height);
            bg.inputEnabled = true;
            bg.input.priorityID = 0;
            bg.events.onInputDown.add(this.onTileClick,this);

            //game.add.existing(this.blob);

            var keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
            var keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            var keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            var keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            var keyPageUp = game.input.keyboard.addKey(Phaser.Keyboard.PAGE_UP);
            var keyPageDown = game.input.keyboard.addKey(Phaser.Keyboard.PAGE_DOWN);

            keyUp.onDown.add(this.move,this);
            keyDown.onDown.add(this.move,this);
            keyLeft.onDown.add(this.move,this);
            keyRight.onDown.add(this.move,this);
            keyPageUp.onDown.add(this.move,this);
            keyPageDown.onDown.add(this.move,this);



        }
        move(key : Phaser.Key){
            if(key.keyCode == Phaser.Keyboard.UP){
                this.blob.position.y -= c.Game.SQUARE_SIDE;
            }
            if(key.keyCode == Phaser.Keyboard.DOWN){
                this.blob.position.y += c.Game.SQUARE_SIDE;
            }
            if(key.keyCode == Phaser.Keyboard.LEFT){
                this.blob.position.x -= c.Game.SQUARE_SIDE;
            }
            if(key.keyCode == Phaser.Keyboard.RIGHT){
                this.blob.position.x += c.Game.SQUARE_SIDE;
            }
            if(key.keyCode == Phaser.Keyboard.PAGE_UP){
                console.log(this.blob.getBounds());

            }
            if(key.keyCode == Phaser.Keyboard.PAGE_DOWN){
                console.log(this.blob.getBounds());
            }
        }
        update(){

        }
        onTileClick(bg,pointer){
            if(pointer.isDown){
                console.log('clicked tile');

                this.updateCachedSprite();
                var sprite = this.game.make.sprite(
                    Phaser.Math.snapToFloor(pointer.x - this.blob.position.x,c.Game.SQUARE_SIDE),
                    Phaser.Math.snapToFloor(pointer.y - this.blob.position.y,c.Game.SQUARE_SIDE));

                this.squareBitMap.add(sprite);
                sprite.inputEnabled = true;
                sprite.input.priorityID = 1;
                sprite.events.onInputDown.add(this.onSpriteClick,this);

                this.blob.add(sprite);
            }
        }
        updateCachedSprite(){
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
        }
        onSpriteClick(sprite,pointer){
            if(pointer.isDown){
                console.log('clicked sprite');
                sprite.kill();
            }
        }
    }
}

