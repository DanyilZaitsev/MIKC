
    // Facade for handling service orders
    class ServiceFacade {
        constructor() {
            this.activeOrders = {};
        }
    
        // Method to open a service order
        openOrder(order) {
            // Check if the order already exists
            if (this.activeOrders[order]) {
                console.log(`Order #${order} already exists.`);
                return;
            }
    
            // Mark the order as active
            this.activeOrders[order] = true;
    
            // Perform actions related to opening an order
            this.openOrderInJournal(order);
            this.notifyAcceptance(order);
            this.assignBrigade(order);
        }
    
        // Method to close a service order
        closeOrder(order) {
            // Check if the order exists
            if (!this.activeOrders[order]) {
                console.log(`Order #${order} does not exist.`);
                return;
            }
    
            // Remove the order from active orders
            delete this.activeOrders[order];
    
            // Perform actions related to closing an order
            this.closeOrderInJournal(order);
            this.notifyCompletion(order);
            this.updateAccounting(order);
            this.remindCustomer(order);
            this.requestCustomerFeedback(order);
        }
    
        // Action: Open order in the journal
        openOrderInJournal(order) {
            console.log(`Order #${order} opened in the journal.`);
        }
    
        // Action: Close order in the journal
        closeOrderInJournal(order) {
            console.log(`Order #${order} closed in the journal.`);
        }
    
        // Action: Notify customer about order acceptance
        notifyAcceptance(order) {
            console.log(`Notification sent to the customer about the acceptance of order #${order}.`);
        }
    
        // Action: Notify customer about order completion
        notifyCompletion(order) {
            console.log(`Notification sent to the customer about the completion of order #${order}.`);
        }
    
        // Action: Assign brigade for the order
        assignBrigade(order) {
            console.log(`Brigade assigned for order #${order}.`);
        }
    
        // Action: Update accounting for the order
        updateAccounting(order) {
            console.log(`Accounting updated for order #${order}.`);
        }
    
        // Action: Remind customer about the order
        remindCustomer(order) {
            console.log(`Reminder sent to the customer for order #${order}.`);
        }
    
        // Action: Request customer feedback
        requestCustomerFeedback(order) {
            const feedback = prompt(`Please provide feedback for order #${order}:`);
            console.log(`Feedback received for order #${order}: ${feedback}`);
        }
    }
    
    // Interaction with the facade through the user interface
    const serviceFacade = new ServiceFacade();
    
        
    function openOrder() {
        const orderNumber = prompt("Enter the order number:");
        serviceFacade.openOrder(orderNumber);
    }
    
    function closeOrder() {
        const orderNumber = prompt("Enter the order number:");
        serviceFacade.closeOrder(orderNumber);
    }
