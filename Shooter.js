class Man extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("download.png");
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
    }
  }