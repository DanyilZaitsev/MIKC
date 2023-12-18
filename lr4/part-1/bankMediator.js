// bankMediator.js
class BankMediator extends Mediator {
    mediate(sender, message) {
      this.colleagues.forEach(colleague => {
        if (colleague !== sender) {
          colleague.receive(message);
        }
      });
    }
  }
  