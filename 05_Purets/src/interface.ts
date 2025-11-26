interface takePhoto {
  camermode: string;
  brust: number;
  mode: string;
}

interface Story{
    createStory(): void
}

class Instagram implements takePhoto {
  constructor(
    public camermode: string,
    public brust: number,
    public mode: string
  ) {}
}

class youtube implements Instagram, Story {
    constructor(
        public camermode: string,
        public mode: string,
        public brust : number,
    ){}

    createStory(): void {
        console.log("Story is created");
    }
}
