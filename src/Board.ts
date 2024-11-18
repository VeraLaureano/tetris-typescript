// src/Board.ts
import { Piece } from './Piece';

export class Board {
    private grid: number[][];
    private colors: string[];
    readonly rows: number = 20;
    readonly cols: number = 10;

    constructor(colors: string[]) {
      this.colors = colors;
      this.grid = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.clearRect(0, 0, 30 * this.cols, 30 * this.rows);
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if (this.grid[row][col] !== 0) {
                    // (this.grid[row][col] - 1) => tendra un numero que represente un color
                    // con ese numero se obtendra el color correspondiente del array de colores
                    const colorIndex = this.grid[row][col] - 1;
                    ctx.fillStyle = this.getColorForCell(this.grid[row][col], this.colors[colorIndex]);
                    ctx.fillRect(col * 30, row * 30, 30, 30);
                    ctx.strokeStyle = 'black';
                    ctx.strokeRect(col * 30, row * 30, 30, 30);
                }
            }
        }
    }

    clear() {
        this.grid = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
    }

    placePiece(piece: Piece) {
        const coords = piece.getCoords();
        coords.forEach(coord => {
            if (coord.row >= 0 && coord.row < this.rows && coord.col >= 0 && coord.col < this.cols) {
                this.grid[coord.row][coord.col] = piece.getColorIndex() + 1; // Coloca la pieza en el tablero
            }
        });
    }

    checkCollision(piece: Piece): boolean {
        const coords = piece.getCoords();
        for (const coord of coords) {
            if (coord.row >= this.rows || coord.col < 0 || coord.col >= this.cols || this.grid[coord.row][coord.col] !== 0) {
                return true; // Colisión detectada
            }
        }
        return false;
    }

    clearFullRows() {
        this.grid = this.grid.filter(row => row.some(cell => cell === 0));
        const emptyRows = this.rows - this.grid.length;
        for (let i = 0; i < emptyRows; i++) {
            this.grid.unshift(Array(this.cols).fill(0));
        }
    }

    private getColorForCell(cell: number, color: string) {
        return cell === 0 ? 'black' : color;
    }
}
