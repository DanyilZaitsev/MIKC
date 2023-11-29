import {Car} from './car.js';

//A class for building a configurator
export class CarBuilder {
    constructor() {
      this.car = new Car();
    }
  
    setEngine(engine) {
      this.car.engine = engine;
      return this;
    }
  
    setTransmission(transmission) {
      this.car.transmission = transmission;
      return this;
    }
  
    setLights(lights) {
      this.car.lights = lights;
      return this;
    }
  
    setWheels(wheels) {
      this.car.wheels = wheels;
      return this;
    }
    
    // Not fundamental points
    addCamera() {
      this.car.camera = "Rear view camera";
      return this;
    }
  
    addSecuritySystem() {
      this.car.securitySystem = "Security system";
      return this;
    }
  
    addPanoramicRoof() {
      this.car.panoramicRoof = "Panoramic roof";
      return this;
    }
  
    build() {
      return this.car;
    }
  }
  