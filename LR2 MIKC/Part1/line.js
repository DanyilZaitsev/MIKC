import Shape from './shape.js';

//Type of Shape is Line
class Line extends Shape {
    constructor(width, height, color) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    //draw the Line
    draw() {
      const canvas = document.getElementById('canvas');
      const line = document.createElement('div');
      line.className = 'shape line';
      
      // Set random position within the canvas
      const maxX = canvas.offsetWidth - this.width;
      const maxY = canvas.offsetHeight - 2;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      
      line.style.left = randomX + 'px';
      line.style.top = randomY + 'px';
      line.style.width = this.width + 'px';
      line.style.height = this.height + 'px';
      line.style.backgroundColor = this.color;
      
      canvas.appendChild(line);
    }
}

export default Line;