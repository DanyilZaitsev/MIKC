import SmartHomeSystem from './basesys.js';
import logToDatabaseDecorator from './funkdekor.js';
import sendAlertEmailDecorator from './funkdekorator.js';

// Advanced smart home system class with decorators
class ExtendedSmartHomeSystem extends SmartHomeSystem {
    processMessage = logToDatabaseDecorator(sendAlertEmailDecorator(super.processMessage));
}

export default ExtendedSmartHomeSystem;
