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

smartHomeSystem.processMessage({ type: 'info', content: 'General message' });
smartHomeSystem.processMessage({ type: 'alert', content: 'Accident report' });
