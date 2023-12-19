@startuml
class Tamagotchi {
    - name: String
    + Tamagotchi(name: String)
    + accept(visitor: Visitor): void
}

class Visitor {
    {abstract} + visit(tamagotchi: Tamagotchi): void
}

class NewYearActionVisitor {
    + visit(tamagotchi: Tamagotchi): void
}

class SeasonalActionPack {
    - visitor: Visitor
    + SeasonalActionPack(visitor: Visitor)
    + applySeasonalAction(tamagotchi: Tamagotchi): void
}

Tamagotchi --|> Visitor
SeasonalActionPack --|> Visitor
NewYearActionVisitor --|> Visitor
@enduml
