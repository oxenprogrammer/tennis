// eslint-disable-next-line import/no-unresolved
import Phaser from 'phaser';
import WebFontFile from '../../webFontFile';

export default class TitleScreen extends Phaser.Scene {
  preload() {
    const fonts = new WebFontFile(this.load, 'Press Start 2P');
    this.load.addFile(fonts);
    this.load.image('player', 'assets/player-icon.png');
  }

  create() {
    // this.add.sprite(400, 250, 'player');
    const text = this.add.text(400, 200, 'Legendary Tennis');
    text.setColor('white');
    text.setOrigin(0.5, 0.5);
    text.setFontSize(24);

    const start = this.add.text(400, 250, 'Press Space to Start');
    start.setColor('white');
    start.setOrigin(0.5, 0.5);
    start.setFontSize(28);
    start.setFontFamily('"Press Start 2P"');

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('game');
    });
  }
}