// eslint-disable-next-line import/no-unresolved
import Phaser from 'phaser';

export default class GameBackground extends Phaser.Scene {
  preload() {}

  create() {
    this.add.line(400, 250, 0, 0, 0, 480, 0xffffff, 1).setLineWidth(2.5, 2.5);
    this.add.circle(400, 250, 50).setStrokeStyle(5, 0xffffff, 1);
    this.add.rectangle(40, 250, 1500, 480).setStrokeStyle(5, 0xffffff, 1);
  }
}
