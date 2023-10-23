```plantuml
@startuml
class Car {
  +  engine = null;
  +  transmission = null;
  +  lights = null;
  +  wheels = null;
  +  camera = null;
  +  securitySystem = null;
  +  panoramicRoof = null;
}

class CarBuilder {
  + constructor() : constructor
  + setEngine(engine) : set engin
  + setTransmission(transmission) : set transmission
  + setLights(lights) : lights
  + setWheels(wheels)  : wheels
  + addCamera() : method for adding camera
  + addSecuritySystem() : for adding SSystem
  + addPanoramicRoof() : for Panoramic Roof
  + build() : builder for car
}

class Main {
  + realisation
}

Car --|> CarBuilder
CarBuilder --|> Main
@enduml
