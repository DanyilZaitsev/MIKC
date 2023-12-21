// Logging function
function logToDatabaseDecorator(func) {
    return function(message) {
        console.log(`Logging to the database: ${JSON.stringify(message)}`);
        func.call(this, message);
    };
}

export default logToDatabaseDecorator;
