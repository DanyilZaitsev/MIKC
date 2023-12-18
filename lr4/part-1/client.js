// client.js
class Client extends Colleague {
    constructor(mediator) {
      super(mediator);
      this.creditBtn = $('#creditBtn');
      this.depositBtn = $('#depositBtn');
  
      const self = this;
  
      this.creditBtn.on('click', function () {
        self.send('Requesting credit service');
      });
  
      this.depositBtn.on('click', function () {
        self.send('Requesting deposit service');
      });
    }
  
    receive(message) {
      $('#log').append(`<p>Client received: ${message}</p>`);
    }
  }
  