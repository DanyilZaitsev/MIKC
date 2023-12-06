import ExtendedSmartHomeSystem from './extsmarthomesys.js';

// Usage example
const smartHomeSystem = new ExtendedSmartHomeSystem();

const module1 = {
    processMessage: function(message) {
        console.log(`Module 1 processes messages: ${JSON.stringify(message)}`);
    }
};

const module2 = {
    processMessage: function(message) {
        console.log(`Module 2 processes messages: ${JSON.stringify(message)}`);
    }
};

smartHomeSystem.addModule(module1);
smartHomeSystem.addModule(module2);

// Define constants for message types
const INFO_TYPE = 'info';
const ALERT_TYPE = 'alert';

smartHomeSystem.processMessage({ type: INFO_TYPE, content: 'General message' });
smartHomeSystem.processMessage({ type: ALERT_TYPE, content: 'Accident report' });
