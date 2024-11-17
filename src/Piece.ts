// src/Piece.ts
export class Piece {
  private shape: number[][];
  private color: string;
  private row: number;
  private col: number;
  private static colors: string[] = ["#4B0082", "#2E8B57", "#8B4513","#A52A2A", "#556B2F", "#6A5ACD", "#B22222"];

  constructor(shape: number[][], color?: string) {
      this.shape = shape;
      this.color =  color || Piece.getRandomColor();
      this.row = 0;
      this.col = 4;
  }

  private static getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * Piece.colors.length);
    return Piece.colors[randomIndex];
  }

  rotate() {
      this.shape = this.shape[0].map((_, i) => this.shape.map(row => row[i])).reverse();
  }

  getShape() {
      return this.shape;
  }

  getCoords() {
      const coords: { row: number, col: number }[] = [];
      for (let r = 0; r < this.shape.length; r++) {
          for (let c = 0; c < this.shape[r].length; c++) {
              if (this.shape[r][c]) {
                  coords.push({ row: this.row + r, col: this.col + c });
              }
          }
      }
      return coords;
  }

  getColor() {
    return this.color;
  }

  getColorIndex() {
    return Piece.colors.indexOf(this.color)
  }

  getRow() {
    return this.row;
  }

  getCol() {
    return this.col;
  }

  setRow(row: number) {
    this.row = row;
  }

  setCol(col: number) {
    this.col = col;
  }

  moveDown() {
      this.row++;
  }

  moveLeft() {
      this.col--;
  }

  moveRight() {
      this.col++;
  }
}
