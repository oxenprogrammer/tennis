import Phaser from 'phaser';
import Game from './scenes/game';
import GameBackground from './scenes/gameBackground';
// eslint-disable-next-line import/no-unresolved

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
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);
game.scene.add('game', Game);
game.scene.add('game-background', GameBackground);
game.scene.start('game');
