export default class Canvas {
    constructor(canvas, screenW) {
        this.element = canvas;
        this.ctx = null;
        this.totalWidth = screenW;
        this.element.width = screenW;
    }

    setCtx(context) {
        if (this.element.getContext) {
            let ctx = this.element.getContext(context);
            this.ctx = ctx;
        }
    }

    drawSquares2d() {
        for (let x = 10; x < this.totalWidth; x += 25) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, 135);
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#555555';
            this.ctx.stroke();
        }
        for (let y = 10; y < 135; y += 25) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.totalWidth, y);
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
    }
}
