@startuml
class ServiceFacade {
  + Constructor : parameter
  + checkOrders : function
  + openOrders : base function
  + closeOrders : base function
}

class BaseFacade {  
  + openOrders : function
  + closeOrders : function
}

BaseFacade --|> ServiceFacade
@enduml
