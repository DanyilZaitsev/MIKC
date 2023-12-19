@startuml

class Mediator {
  +colleagues: List<Colleague>
  +addColleague(colleague: Colleague): void
  +mediate(sender: Colleague, message: String): void
}

class Colleague {
  -mediator: Mediator
  +send(message: String): void
  +receive(message: String): void
}

class Client {
  -creditBtn: Button
  -depositBtn: Button
  +Client(mediator: Mediator)
  +receive(message: String): void
}

class Specialist {
  +receive(message: String): void
}

class BankMediator {
  +mediate(sender: Colleague, message: String): void
}

Client --|> Colleague
Specialist --|> Colleague
BankMediator --|> Mediator

@enduml
