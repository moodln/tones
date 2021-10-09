class Canvas {
    constructor(){
        let canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
    }

    draw() {

        this.ctx.beginPath();
        this.ctx.arc(50, 50, 10, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'orange'
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.arc(50, 50, 10, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'blue'
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(100, 450, 10, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'violet'
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.arc(100, 450, 10, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'blue'
        this.ctx.stroke();

    }

    touchDraw(e) {
        if (e.key === 'a') {
            this.ctx.beginPath();
            this.ctx.moveTo(125, 300);
            this.ctx.lineTo(125, 420);
            this.ctx.lineTo(45, 420);
            this.ctx.fillStyle = 'red'
            this.ctx.fill();
        } else if (e.key === 'b') {
            this.ctx.beginPath();
            this.ctx.moveTo(500, 200);
            this.ctx.quadraticCurveTo(425, 525, 65, 62.5);
            this.ctx.quadraticCurveTo(45, 60, 75, 10);
            this.ctx.fillStyle = 'pink'
            this.ctx.fill();
        }

    }

    removeDraw() {
        
        this.ctx.beginPath();
        this.ctx.moveTo(125, 300);
        this.ctx.lineTo(125, 420);
        this.ctx.lineTo(45, 420);
        this.ctx.fillStyle = 'rgb(187, 193, 214)'
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(500, 200);
        this.ctx.quadraticCurveTo(425, 525, 65, 62.5);
        this.ctx.quadraticCurveTo(45, 60, 75, 10);
        this.ctx.fillStyle = 'rgb(187, 193, 214)'
        this.ctx.fill();
    }
}

export default Canvas;