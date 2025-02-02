describe("Central de Atendimento ao Cliente TAT - Links em outra aba", () => {
  beforeEach(() => {
    cy.visit("/src/index.html"); // Acessando local
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  // Exercicio
  it("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", () => {
    cy.contains('a', 'Política de Privacidade')
    .should('have.attr', 'href', 'privacy.html')
    .and('have.attr', 'target')
  });

  // Extra 01
  it.only("acessa a página da política de privacidade removendo o target e então clicando no link", () => {
    cy.contains('a', 'Política de Privacidade')
    .invoke('removeAttr', 'target')
    .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
  });


  


  // Padrão pra preencher os campos
  // it("seleciona um produto (Blog) por seu índice", function () {
    // cy.fillMandatoryFieldsAndSubmit();
    // cy.contains("button", "Enviar").click();
  // });

});
