// src/Controls.ts
export class Controls {
  onMoveLeft: (() => void) | null = null;
  onMoveRight: (() => void) | null = null;
  onMoveDown: (() => void) | null = null;
  onRotate: (() => void) | null = null;

  constructor() {
    this.setupEventListeners();
  }

  private setupEventListeners() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' && this.onMoveLeft) this.onMoveLeft();
      if (e.key === 'ArrowRight' && this.onMoveRight) this.onMoveRight();
      if (e.key === 'ArrowDown' && this.onMoveDown) this.onMoveDown();
      if (e.key === 'ArrowUp' && this.onRotate) this.onRotate();
    });
  }
}
