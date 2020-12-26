@task
Feature: Tareas
  Ver tareas publicas. 

  Scenario: Validar que se cargan las tareas en el inicio
    Given Yo estoy en la pagina tareas
    Then Validar que tenga "3" tareas