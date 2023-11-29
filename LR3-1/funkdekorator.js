// Notification function
function sendAlertEmailDecorator(func) {
    return function(message) {
        if (message.type === 'alert') {
            console.log(`Sending a notification to the mail: ${JSON.stringify(message)}`);
        }
        func.call(this, message);
    };
}

export default sendAlertEmailDecorator;
