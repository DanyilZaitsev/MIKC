// bank.js
const mediator = new Mediator();
const client = new Client(mediator);
const specialist = new Specialist(mediator);

mediator.addColleague(client);
mediator.addColleague(specialist);

const bankMediator = new BankMediator();
const creditSpecialist = new Specialist(bankMediator);
const depositSpecialist = new Specialist(bankMediator);

bankMediator.addColleague(client);
bankMediator.addColleague(creditSpecialist);
bankMediator.addColleague(depositSpecialist);
