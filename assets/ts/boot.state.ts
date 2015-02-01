/// <reference path="phaser.d.ts" />
/// <reference path="preload.state.ts" />
module blocks{
    export class Boot extends Phaser.State{
        create(){
            var game = this.game;

            game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;

            game.state.add('preload',blocks.Preload);
            game.state.start('preload');
        }
    }
}