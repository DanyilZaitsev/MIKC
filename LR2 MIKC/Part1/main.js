import RandomShapeFactory from './randomshapefactory.js';

//creating event
document.getElementById('drawButton').addEventListener('click', () => {
  const randomFactory = new RandomShapeFactory();
  const shape = randomFactory.createShape();
  shape.draw();
});
