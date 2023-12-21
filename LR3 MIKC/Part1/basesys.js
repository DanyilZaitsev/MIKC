// Basic class of smart home system

class SmartHomeSystem {
    constructor() {
        this.modules = [];
    }

    addModule(module) {
        this.modules.push(module);
    }

    processMessage(message) {
        for (const module of this.modules) {
            module.processMessage(message);
        }
    }
}

export default SmartHomeSystem;
