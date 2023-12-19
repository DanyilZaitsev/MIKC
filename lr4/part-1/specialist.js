// specialist.js
class Specialist extends Colleague {
    constructor(mediator) {
      super(mediator);
    }
  
    receive(message) {
      $('#log').append(`<p>Specialist received: ${message}</p>`);
    }
  }
  