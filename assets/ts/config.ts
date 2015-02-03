module blocks{
    export var Config = {
        Game:{
            COLUMNS: 12,
            ROWS: 20,
            SQUARE_SIDE: 40,
            get WIDTH(){
                return this.COLUMNS * this.SQUARE_SIDE;
            },
            get HEIGHT(){
                return this.ROWS * this.SQUARE_SIDE;
            },
            get RANDOMCOLOR(){
               var colors = [0x4d90fe, 0xCC8081, 0x888888, 0x0971B2, 0x9937B2, 0xFFFEBA, 0xFFFC19, 0x00CCFF, 0x24459A, 0xfaa614, 0x24459A, 0xe81123, 0x52b043, 0x24459A, 0xea3e24, 0x00188f, 0xba141a, 0xe51400, 0x68217a, 0xc1d304]
                return (Math.random()*colors.length) | 0;
            }
        }
    }
}

var c = blocks.Config;
