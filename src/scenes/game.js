import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  paddleLeft;

  paddleRight;

  cursors;

  leftKey;

  preload() {}

  create() {
    const ball = this.add.circle(400, 250, 10, 0xffffff, 1);
    this.physics.add.existing(ball);
    ball.body.setCollideWorldBounds(true, 1, 1);
    ball.body.setVelocity(-200, 0);
    ball.body.setBounce(1, 1);

    this.paddleLeft = this.add.rectangle(30, 250, 25, 100, 0x0000ff, 1);
    this.paddleRight = this.add.rectangle(770, 250, 25, 100, 0xff0000, 1);

    this.physics.add.existing(this.paddleLeft, true);
    this.physics.add.existing(this.paddleRight, true);
    this.physics.add.collider(this.paddleLeft, ball);
    this.physics.add.collider(this.paddleRight, ball);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.leftKey = this.input.keyboard;
  }

  update() {
    const { body } = this.paddleRight;
    const leftBody = this.paddleLeft.body;
    const W = this.leftKey.addKey('W');
    const S = this.leftKey.addKey('S');

    if (this.cursors.up.isDown) {
      this.paddleRight.y -= 10;
      body.updateFromGameObject();
    }

    if (this.cursors.down.isDown) {
      this.paddleRight.y += 10;
      body.updateFromGameObject();
    }

    if (W.isDown) {
      this.paddleLeft.y -= 10;
      leftBody.updateFromGameObject();
    }

    if (S.isDown) {
      this.paddleLeft.y += 10;
      leftBody.updateFromGameObject();
    }
  }
}