// Notification function
function sendAlertEmailDecorator(func) {
    // Assuming there's a variable named `ALERT_TYPE` that represents the constant value
    const ALERT_TYPE = 'alert';

    return function(message) {
        if (message.type === ALERT_TYPE) {
            // Rest of the code for handling alert notifications
            func(message);
        }
    };
}

export default sendAlertEmailDecorator;
