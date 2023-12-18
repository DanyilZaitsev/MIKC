// mediator.js
class Mediator {
    constructor() {
      this.colleagues = [];
    }
  
    addColleague(colleague) {
      this.colleagues.push(colleague);
    }
  
    mediate(sender, message) {
      this.colleagues.forEach(colleague => {
        if (colleague !== sender) {
          colleague.receive(message);
        }
      });
    }
  }
  
  class Colleague {
    constructor(mediator) {
      this.mediator = mediator;
    }
  
    send(message) {
      this.mediator.mediate(this, message);
    }
  
    receive(message) {
      // Handle received message
    }
  }
  