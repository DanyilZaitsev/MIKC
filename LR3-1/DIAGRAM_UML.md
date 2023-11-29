@startuml
class SmartHomeSystem {
  + Constructor : modules
  + addModule : modules
  + processMessage : modules
}

class ExtendedSmartHomeSystem {  
  + processMessage : sending
}

SmartHomeSystem --|> ExtendedSmartHomeSystem
@enduml