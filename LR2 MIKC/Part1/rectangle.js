import Shape from './shape.js';

//Type of Shape is Rectangle
class Rectangle extends Shape {
    constructor(width, height, color) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    //draw the Rectangle
    draw() {
      const canvas = document.getElementById('canvas');
      const rectangle = document.createElement('div');
      rectangle.className = 'shape rectangle';
      
      // Set random position within the canvas
      const maxX = canvas.offsetWidth - this.width;
      const maxY = canvas.offsetHeight - this.height;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      
      rectangle.style.left = randomX + 'px';
      rectangle.style.top = randomY + 'px';
      rectangle.style.width = this.width + 'px';
      rectangle.style.height = this.height + 'px';
      rectangle.style.backgroundColor = this.color;
      
      canvas.appendChild(rectangle);
    }
  }

  export default Rectangle;
  