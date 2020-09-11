class Pig extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/enemy.png");
    this.vanishing = 255;
  }
  display() {
    //console.log(this.body.speed);
    if (this.body.speed < 3) {
      super.display();
    }
    else {
      push();
      this.vanishing = this.vanishing - 10;
      tint(255, this.vanishing);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
      World.remove(world, this.body);
    }
  }
};