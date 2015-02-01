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
            }
        }
    }
}

var c = blocks.Config;
