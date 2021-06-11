import Game from './scenes/game';
import Phaser from 'phaser';
import TitleScreen from './scenes/titleScreen';

/** @type {Phaser.Types.Core.GameConfig}
 * {width} number
 * {height} number
 * {type} class
 */
const config = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};

// eslint-disable-next-line no-new
const game = new Phaser.Game(config);
game.scene.add('titleScreen', TitleScreen);
game.scene.add('game', Game);
// game.scene.start('titleScreen');
game.scene.start('game');
