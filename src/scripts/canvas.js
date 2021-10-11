/** @type {HTMLCanvasElement} */



class Canvas {
    constructor(){ 
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth - 20;
        canvas.height = window.innerHeight - 20;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.keys = [];
    } 

    update() {};
    

    removeDraw() {
        // this.ctx.beginPath();
        // this.ctx.moveTo(125, 300);
        // this.ctx.lineTo(125, 420);
        // this.ctx.lineTo(45, 420);
        // this.ctx.fillStyle = 'rgb(187, 193, 214)'
        // this.ctx.fill();
        // this.ctx.beginPath();
        // this.ctx.moveTo(500, 200);
        // this.ctx.quadraticCurveTo(425, 525, 65, 62.5);
        // this.ctx.quadraticCurveTo(45, 60, 75, 10);
        // this.ctx.fillStyle = 'rgb(187, 193, 214)';
        // this.ctx.fill();

        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    drawCircle(circle) {
        this.x = circle.x;
        this.y = circle.y;
        this.size = circle.size;
        debugger
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fillStyle = 'orange'
        this.ctx.fill();
    }
    
    animate(circle){
        this.x = circle.x;
        this.y = circle.y;
        this.size = circle.size;
        debugger

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawCircle(circle);
        
        this.x += circle.dx; 
        this.y += circle.dy;



        requestAnimationFrame(this.animate.bind(this));
        
    }

    draw(e) {

        if (e.key === 'f') {
            const circle = new Circle(50, 50, 20, 4, 5);
            debugger
            this.x = circle.x;
            this.y = circle.y;
            this.size = circle.size;
            
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            this.ctx.fillStyle = 'orange'
            this.ctx.fill();

            this.animate(circle);
            // debugger
            // this.drawCircle.bind(null, circle);
            // debugger
            // setTimeout(this.removeDraw.bind(this), 1500)
        } else if (e.key === 'g') {
            this.ctx.beginPath();
            this.ctx.arc(100, 450, 10, 0, 2 * Math.PI);
            this.ctx.fillStyle = 'violet'
            this.ctx.fill();

            this.ctx.beginPath();
            this.ctx.arc(100, 450, 10, 0, 2 * Math.PI);
            this.ctx.fillStyle = 'blue'
            this.ctx.stroke();
        }
        if (e.key === 'u') {
            this.ctx.beginPath();
            this.ctx.moveTo(125, 300);
            this.ctx.lineTo(125, 420);
            this.ctx.lineTo(45, 420);
            this.ctx.fillStyle = 'red'
            this.ctx.fill();
        } else if (e.key === 'h') {
            this.ctx.beginPath();
            this.ctx.moveTo(500, 200);
            this.ctx.quadraticCurveTo(425, 525, 65, 62.5);
            this.ctx.quadraticCurveTo(45, 60, 75, 10);
            this.ctx.fillStyle = 'pink'
            this.ctx.fill();
        }
    }
    //     this.ctx.beginPath();
    //     this.ctx.arc(x, y, radius, startAngle, endAngle);
    //     this.ctx.fillStyle = 'blue'
    //     this.ctx.stroke();
    // }

    growCircle(x, y, radius, startAngle, endAngle) {
        radius += 10;
        // this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawCircle(x, y, radius, startAngle, endAngle);

        // requestAnimationFrame(this.growCircle.bind(this));
    }
    
}


class Circle extends Canvas {
    constructor(x, y, size, dx, dy, ctx, width, height,) {
        super(ctx, width, height);
        this.x = x;
        this.y = y;
        this.size = size;
        this.dx = dx;
        this.dy = dy;
    }

    drawCircle() {
        
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fillStyle = 'purple';
        this.ctx.fill();

    }

    update() {
        // this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawCircle();
        // this.x += this.dx;
        // this.y += this.dy;

        // requestAnimationFrame(this.update.bind(this));
    }
}


export default Canvas;