import Phaser from 'phaser';
import Game from './scenes/game';

/** @type {Phaser.Types.Core.GameConfig}
 * {width} number
 * {height} number
 * {type} class
 */
const config = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
  backgroundColor: '#61DE2A',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};

const game = new Phaser.Game(config);
game.scene.add('game', Game);
game.scene.start('game');
