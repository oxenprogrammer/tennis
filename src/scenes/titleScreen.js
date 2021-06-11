// eslint-disable-next-line import/no-unresolved
import Phaser from 'phaser';

export default class TitleScreen extends Phaser.Scene {
  preload() {
    this.load.image('background', 'assets/background.png');
  }

  create() {
    this.add.tileSprite(800, 500, 'background');
    // const text = this.add.text(400, 250, 'GAMER');
    // text.setColor('green');
    // text.setOrigin(0.5, 0.5);
    // text.setFontSize(36);
  }
}