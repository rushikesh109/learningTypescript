"use strict";
class Instagram {
    constructor(camermode, brust, mode) {
        this.camermode = camermode;
        this.brust = brust;
        this.mode = mode;
    }
}
class youtube {
    constructor(camermode, mode, brust) {
        this.camermode = camermode;
        this.mode = mode;
        this.brust = brust;
    }
    createStory() {
        console.log("Story is created");
    }
}
