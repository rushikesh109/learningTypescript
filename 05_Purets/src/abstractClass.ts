abstract class TakePhoto {
    constructor(
        public cameraMode : String,
        public filter : string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        //some complex calculation
        return 8
    }
}

class instagram extends TakePhoto {
    constructor(
        public cameramode: string,
        public filter: string,
        public burst: number
    ){
        super(cameramode, filter)
    }
    getSepia(): void {
        console.log("sepia");
    }

}

const ru = new instagram("test", "test", 4);