import ShapeFactory from  './shapefactory.js';
import Line from  './line.js';
import Rectangle from  './rectangle.js';
import Circle from  './circle.js';

//for random generation
const val1 = 0.33 
const val2 = 0.66

class RandomShapeFactory extends ShapeFactory {
    createShape() {
      const random = Math.random();
      const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6', '#34495e'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      if (random < val1) {
        // Create a line with random width and height
        const width = Math.floor(Math.random() * 100) + 50; // Width between 50 and 150
        const height = Math.floor(Math.random() * 3) + 2;
        return new Line(width, height, randomColor);
      } else if (random < val2) {
        // Create a rectangle with random width and height
        const width = Math.floor(Math.random() * 100) + 30; // Width between 30 and 130
        const height = Math.floor(Math.random() * 100) + 30; // Height between 30 and 130
        return new Rectangle(width, height, randomColor);
      } else {
        // Create a circle with random radius
        const radius = Math.floor(Math.random() * 50) + 20; // Radius between 20 and 70
        return new Circle(radius, randomColor);
      }
    }
}

export default RandomShapeFactory;
