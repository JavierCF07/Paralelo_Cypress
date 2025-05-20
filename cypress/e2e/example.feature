Feature: Ejemplo de característica con Cypress y Cucumber

  #Scenario: DEMO UNO
  #  Given Abrir el navegador Chrome y dirigirme a Demoqa.com
  #  When Validar el nombre de la pagina
  #  Then Cargando el nombre Javier
  #  And Cargando el email "javier.cifuentes@distelsa.com"
  #  And Cargando la direccion uno "direccion uno"
  #  And Cargando la direccion dos "direccion dos"
  #  And Presionando el boton submit

  Scenario Outline: Scenario Outline name: DEMO DE CUCUMBER
    Given Abrir el navegador Chrome y dirigirme a Demoqa.com
    When Validar el nombre de la pagina
    Then Cargando el nombre <username>
    And Cargando el email "<email>"
    And Cargando la direccion uno "<dir1>"
    And Cargando la direccion dos "<dir2>"
    And Presionando el boton submit

    Examples:
        | username | email | dir1 | dir2 |
        | Javier  | Cifuentes@gmail.com  | dir_uno  | dir_dos |
        | Juan  | Jose@gmail.com  | dir_uno  | dir_dos |
        | Pedro  | Alvarado@gmail.com  | dir_uno  | dir_dos |