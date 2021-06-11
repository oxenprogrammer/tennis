import Phaser from 'phaser';

/** @type {Phaser.Types.Core.GameConfig}
 * {width} number
 * {height} number
 * {type} class
 */
const config = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
};

// eslint-disable-next-line no-new
new Phaser.Game(config);
