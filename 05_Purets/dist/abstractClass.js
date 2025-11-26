"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class instagram extends TakePhoto {
    constructor(cameramode, filter, burst) {
        super(cameramode, filter);
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
const ru = new instagram("test", "test", 4);
