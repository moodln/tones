// import Canvas from './canvas.js'

// class Circle extends Canvas{
//     constructor(x, y, size, dx, dy, ctx, width, height, ) {
//         super(ctx, width, height);
//         this.x = x;
//         this.y = y;
//         this.size = size; 
//         this. dx = dx;
//         this.dy = dy;
//     }

//     drawCircle() {
//         this.ctx.beginPath();
//         this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = 'purple';
//         ctx.fill();
//     }

//     update() {
//         clearRect(0, 0, this.width, this.height);
//         this.drawCircle();
//         this.x += this.dx;
//         this.y += this.dy;

//         requestAnimationFrame(this.update.bind(this));
//     }
// }

// export default Circle;