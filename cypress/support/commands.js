Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Amanda')
    cy.get('#lastName').type('Cortez')
    cy.get('#email').type("amanda@gmail.com")
    // cy.get('#open-text-area').type(longText, {delay:0}) // delay pra eecutar rápido
    cy.get('#open-text-area').type('Teste do campo');
    cy.get('button[type="submit"]').click()
})