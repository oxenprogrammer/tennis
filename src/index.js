import './style/main.scss';

// eslint-disable-next-line import/no-unresolved
import Phaser from 'phaser';
import Game from './scenes/game';
import GameBackground from './scenes/gameBackground';
import TitleScreen from './scenes/titleScreen';

/** @type {Phaser.Types.Core.GameConfig}
 * {width} number
 * {height} number
 * {type} class
 */

const index = () => {
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
  game.scene.add('title', TitleScreen);
  game.scene.start('title');
  // game.scene.start('game');
};

const { body } = document;
const heading = document.createElement('h1');
heading.setAttribute('class', 'heading');
heading.textContent = 'Tennis Masters Tour';

body.appendChild(heading);
body.appendChild(index());
