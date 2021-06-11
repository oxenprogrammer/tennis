import Phaser from 'phaser';

export default class TitleScreen extends Phaser.Scene {
  preload() {
    this.load.image('background', 'assets/background.png');
  }

  create() {
    this.add.image(240, 320, 'background').setScrollFactor(1, 0);
    // const text = this.add.text(400, 250, 'GAMER');
    // text.setColor('green');
    // text.setOrigin(0.5, 0.5);
    // text.setFontSize(36);
  }
}