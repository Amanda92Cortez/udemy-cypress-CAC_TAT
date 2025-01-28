Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Walker',
    email: 'jo.wlaker@teste.com',
    text: 'Teste Teste'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get("#phone-checkbox").click();
    cy.get('#open-text-area').type(data.text);
    // cy.get('button[type="submit"]').click()
    // cy.contains('button','Enviar').click()
})


// Abaixo seria sem const data
// Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
//     cy.get('#firstName').type('Amanda')
//     cy.get('#lastName').type('Cortez')
//     cy.get('#email').type("amanda@gmail.com")
//     cy.get("#phone-checkbox").click();
//     cy.get('#open-text-area').type('Teste do campo');
//     cy.get('button[type="submit"]').click()
// })