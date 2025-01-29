describe("Central de Atendimento ao Cliente TAT - Inputos do Radio", () => {
  beforeEach(() => {
    cy.visit("/src/index.html"); // Acessando local
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  // Exercicio
  it("marca o tipo de atendimento Feedback", () => {
    cy.get('input[type="radio"][value="feedback"]').check()
  });

  // Exercicio extra 1
  it.only("marca cada tipo de atendimento", () => {
    cy.get('input[type="radio"').each(typeOfService =>{
      cy.wrap(typeOfService).check().should('be.checked')
    })  });

  // Padrão pra preencher os campos
  // it("seleciona um produto (Blog) por seu índice", function () {
    // cy.fillMandatoryFieldsAndSubmit();
    // cy.contains("button", "Enviar").click();
  // });

});
