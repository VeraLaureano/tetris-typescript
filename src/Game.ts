// src/Game.ts
import { Board } from './Board';
import { Piece } from './Piece';
import { Controls } from './Controls';

export class Game {
    private board: Board;
    private currentPiece: Piece;
    private controls: Controls;
    private ctx: CanvasRenderingContext2D;
    private gameInterval: number | null = null;

    private static colors: string[] = ["#4B0082", "#2E8B57", "#8B4513","#A52A2A", "#556B2F", "#6A5ACD", "#B22222"];

    constructor(ctx: CanvasRenderingContext2D) {
        this.board = new Board(Game.colors);
        this.currentPiece = this.generateRandomPiece();
        this.controls = new Controls();
        this.ctx = ctx;

        // Asignamos las acciones a los controles
        this.controls.onMoveLeft = () => this.movePiece('left');
        this.controls.onMoveRight = () => this.movePiece('right');
        this.controls.onMoveDown = () => this.movePiece('down');
        this.controls.onRotate = () => this.rotatePiece();
    }

    start() {
        if (this.gameInterval) return; // Si ya está corriendo el juego, no lo iniciamos de nuevo
        this.gameInterval = setInterval(() => {
            this.update();
            this.render();
        }, 500);
    }

    gameOver() {
      if (this.gameInterval)
        clearInterval(this.gameInterval);

      this.gameInterval = null;
      alert("Game over!")
    }

    reset() {}

    update() {
        this.currentPiece.moveDown();
        if (this.board.checkCollision(this.currentPiece)) {
            this.currentPiece.setRow(this.currentPiece.getRow()-1); // Volver a la posición anterior
            this.board.placePiece(this.currentPiece);
            this.board.clearFullRows();

            this.currentPiece = this.generateRandomPiece();
            
            if (this.board.checkCollision(this.currentPiece))
              return this.gameOver();
        }
    }

    render() {
        this.board.draw(this.ctx);
        this.drawCurrentPiece();
    }

    drawCurrentPiece() {
        const coords = this.currentPiece.getCoords();
        coords.forEach(coord => {
            this.ctx.fillStyle = this.currentPiece.getColor();
            this.ctx.fillRect(coord.col * 30, coord.row * 30, 30, 30);
            this.ctx.strokeStyle = 'black';
            this.ctx.strokeRect(coord.col * 30, coord.row * 30, 30, 30);
        });
    }

    movePiece(direction: 'left' | 'right' | 'down') {
      const prevPiece = new Piece(
          this.currentPiece.getShape(), // Crea una copia de la forma de la pieza
          this.currentPiece.getColor()        // Copia el color de la pieza
      );
      prevPiece.setCol(this.currentPiece.getRow());
      prevPiece.setCol(this.currentPiece.getCol());
  
      // Mover la pieza
      if (direction === 'left') this.currentPiece.moveLeft();
      if (direction === 'right') this.currentPiece.moveRight();
      if (direction === 'down') this.currentPiece.moveDown();
  
      // Verificar colisión
      if (this.board.checkCollision(this.currentPiece)) {
          this.currentPiece = prevPiece; // Restaurar la pieza en caso de colisión
      }
    }

    rotatePiece() {
        this.currentPiece.rotate();
        if (this.board.checkCollision(this.currentPiece)) {
            this.currentPiece.rotate(); // Deshacer la rotación si hay colisión
            this.currentPiece.rotate();
            this.currentPiece.rotate();
        }
    }

    private generateRandomPiece() {
        const shapes = [
            [[1, 1, 1, 1]], // I
            [[1, 1], [1, 1]], // O
            [[0, 1, 0], [1, 1, 1]], // T
            [[1, 0, 0], [1, 1, 1]], // L
            [[0, 0, 1], [1, 1, 1]], // J
            [[0, 1, 1], [1, 1, 0]], // S
            [[1, 1, 0], [0, 1, 1]] // Z
        ];

        const colorIndex: number = Math.floor(Math.random() * Game.colors.length)
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

        const coloredShape = randomShape.map(row => 
            row.map(cell => cell === 1 ? colorIndex + 1 : 0) 
        );    

        return new Piece(coloredShape, Game.colors[colorIndex]);
    }
}
