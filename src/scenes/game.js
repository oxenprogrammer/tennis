import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  preload() {}

  create() {
    const ball = this.add.circle(400, 250, 10, 0xffffff, 1);
    this.physics.add.existing(ball);
    ball.body.setCollideWorldBounds(true, 1, 1);
    ball.body.setVelocity(-200, 0);
    ball.body.setBounce(1, 1);

    const paddleLeft = this.add.rectangle(30, 250, 25, 100, 0x0000ff, 1);
    const paddleRight = this.add.rectangle(770, 250, 25, 100, 0xff0000, 1);

    this.physics.add.existing(paddleLeft, true);
    this.physics.add.existing(paddleRight, true);
    this.physics.add.collider(paddleLeft, ball);
    this.physics.add.collider(paddleRight, ball);
  }
}