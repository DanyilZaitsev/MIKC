import Shape from './shape.js';

//Type of Shape is Circle
class Circle extends Shape {
    constructor(radius, color) {
      super(color);
      this.radius = radius;
    }
  
    //draw the circle
    draw() {
      const canvas = document.getElementById('canvas');
      const circle = document.createElement('div');
      circle.className = 'shape circle';
      
      // Set random position within the canvas
      const maxX = canvas.offsetWidth - 2 * this.radius;
      const maxY = canvas.offsetHeight - 2 * this.radius;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      
      circle.style.left = randomX + 'px';
      circle.style.top = randomY + 'px';
      circle.style.width = 2 * this.radius + 'px';
      circle.style.height = 2 * this.radius + 'px';
      circle.style.backgroundColor = this.color;
      
      canvas.appendChild(circle);
    }
  }

  export default Circle;
  