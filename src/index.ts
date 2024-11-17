// src/index.ts
import { Game } from './Game';

const canvas = document.getElementById('tetris') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

const game = new Game(ctx);
game.start();
