import {CarBuilder} from './carbuilder.js';

  // creating events and operations
  document.addEventListener("DOMContentLoaded", () => {
    const carConfigForm = document.getElementById("carConfigForm");
  
    carConfigForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const engine = document.getElementById("engine").value;
      const transmission = document.getElementById("transmission").value;
      const lights = document.getElementById("lights").value;
      const wheels = document.getElementById("wheels").value;
      const camera = document.getElementById("camera").checked;
      const securitySystem = document.getElementById("securitySystem").checked;
      const panoramicRoof = document.getElementById("panoramicRoof").checked;
  
      const carBuilder = new CarBuilder();
      const car = carBuilder
        .setEngine(engine)
        .setTransmission(transmission)
        .setLights(lights)
        .setWheels(wheels);
  
      if (camera) {
        car.addCamera();
      }
  
      if (securitySystem) {
        car.addSecuritySystem();
      }
  
      if (panoramicRoof) {
        car.addPanoramicRoof();
      }
  
      const configuredCar = car.build();
  
      // Output the car configuration object to the console or elsewhere
      console.log(configuredCar);
    });
  });

//-----------------------------------------------------------------------------------

// Get a link to the form elements and the Save buttonconst saveButton = document.getElementById("saveButton");
const filenameInput = document.getElementById("filename");

// Function to save the configuration to a file
function saveConfigurationToFile(configuration, filename) {
  const serializedConfig = JSON.stringify(configuration);

  const blob = new Blob([serializedConfig], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename}.json`;
  a.style.display = "none";
  document.body.appendChild(a);

  a.click();

  window.URL.revokeObjectURL(url);
}

// Add an event handler for the Save button
saveButton.addEventListener("click", () => {
  const engine = document.getElementById("engine").value;
  const transmission = document.getElementById("transmission").value;
  const lights = document.getElementById("lights").value;
  const wheels = document.getElementById("wheels").value;
  const camera = document.getElementById("camera").checked;
  const securitySystem = document.getElementById("securitySystem").checked;
  const panoramicRoof = document.getElementById("panoramicRoof").checked;

  const carBuilder = new CarBuilder();
  const car = carBuilder
    .setEngine(engine)
    .setTransmission(transmission)
    .setLights(lights)
    .setWheels(wheels);

  if (camera) {
    car.addCamera();
  }

  if (securitySystem) {
    car.addSecuritySystem();
  }

  if (panoramicRoof) {
    car.addPanoramicRoof();
  }

  const configuredCar = car.build();

  // Get the filename entered by the user
  const filename = filenameInput.value.trim();

  // Check that the entered filename is not empty
  if (filename !== "") {
    // Save the configuration to a file
    saveConfigurationToFile(configuredCar, filename);
    alert(`The configuration is saved in a file "${filename}.json"`);
  } else {
    alert("Please enter a file name.");
  }
});