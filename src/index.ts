// src/index.ts
import { Game } from './Game';

const canvas = document.getElementById('tetris') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const startSection = document.getElementById('start-section') as HTMLElement;
const startBtn = document.getElementById('start-btn') as HTMLElement;

const game = new Game(ctx);

export const startGame = () => {
  canvas.style.display = 'flex'
  startSection.style.display = 'none'
  game.start()
}

startBtn.addEventListener('click', startGame)