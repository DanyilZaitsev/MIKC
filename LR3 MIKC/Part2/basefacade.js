class BaseFacade {
    // This is a base constructor
    constructor() {
        this.activeOrders = {};
    }

    // this function does a status check
    checkStatus(order) {
        // Check if the order already exists
        if (this.activeOrders[order]) {
            console.log(`Order #${order} Status is open.`);
            return;
        } else {
            console.log(`Order #${order} Status is close.`);
            return;
        }
    }

    openOrder(order) {
        // abstract method
    }

    closeOrder(order) {
        // abstract method
    }
}

export default BaseFacade;
