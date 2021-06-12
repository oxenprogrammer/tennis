// eslint-disable-next-line import/no-unresolved
import Phaser from 'phaser';
import WebFontFile from '../../webFontFile';

export default class Game extends Phaser.Scene {
  init() {
    this.leftScore = 0;
    this.rightScore = 0;
  }

  paddleLeft;

  paddleRight;

  cursors;

  leftKey;

  ball;

  leftScore;

  rightScore;

  leftScoreLabel;

  rightScoreLabel;

  preload() {
    const fonts = new WebFontFile(this.load, 'Press Start 2P');
    this.load.addFile(fonts);
  }

  create() {
    this.physics.world.setBounds(-100, 0, 1000, 500);
    this.ball = this.add.circle(400, 250, 10, 0xffffff, 1);
    this.physics.add.existing(this.ball);
    this.ball.body.setCollideWorldBounds(true, 1, 1);

    this.resetBall();
    this.ball.body.setBounce(1, 1);

    this.paddleLeft = this.add.rectangle(30, 250, 25, 100, 0x0000ff, 1);
    this.paddleRight = this.add.rectangle(770, 250, 25, 100, 0xff0000, 1);

    this.physics.add.existing(this.paddleLeft, true);
    this.physics.add.existing(this.paddleRight, true);
    this.physics.add.collider(this.paddleLeft, this.ball);
    this.physics.add.collider(this.paddleRight, this.ball);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.leftKey = this.input.keyboard;

    this.leftScoreLabel = this.add.text(100, 24, '0');
    this.leftScoreLabel.setColor('blue');
    this.leftScoreLabel.setFontSize(24);
    this.leftScoreLabel.setFontFamily('"Press Start 2P"');

    this.rightScoreLabel = this.add.text(500, 24, '0');
    this.rightScoreLabel.setColor('red');
    this.rightScoreLabel.setFontSize(24);
    this.rightScoreLabel.setFontFamily('"Press Start 2P"');
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

    if (this.ball.x < -30) {
      this.incrementRightScore();
      this.resetBall();
    }

    if (this.ball.x > 830) {
      this.incrementLeftScore();
      this.resetBall();
    }
  }

  incrementLeftScore() {
    this.leftScore += 1;
    this.leftScoreLabel.text = `Score: ${this.leftScore.toString()}`;
  }

  incrementRightScore() {
    this.rightScore += 1;
    this.rightScoreLabel.text = `Score: ${this.rightScore.toString()}`;
  }

  resetBall() {
    this.ball.setPosition(400, 250);
    const angle = Phaser.Math.Between(10, 360);
    const vector = this.physics.velocityFromAngle(angle, 400);
    this.ball.body.setVelocity(vector.x, vector.y);
  }
}