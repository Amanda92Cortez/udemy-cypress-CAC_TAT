describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("/src/index.html"); // Acessando local
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  // Exercicio
  it("preenche os campos obrigatórios e envia o formulário", () => {
    const longText = "Teste";
    cy.get("#firstName").type("Amanda");
    cy.get("#lastName").type("Cortez");
    cy.get("#email").type("amadna@gmail.com");
    cy.get("#open-text-area").type(longText, { delay: 0 });
    cy.get('select').select(1) // Seleção pelo índice 1


    // cy.contains("button", "Enviar").click();
    // cy.get(".success").should("be.visible");
  });

  // Exercicio extra 1
  it("seleciona um produto (Mentoria) por seu valor (value)", function () {
    cy.fillMandatoryFieldsAndSubmit();
    cy.get('#product').select('mentoria').should('have.value', 'mentoria');
    // cy.contains("button", "Enviar").click();
  });

  // Exercicio extra 2
  it.only("seleciona um produto (Blog) por seu índice", function () {
    cy.fillMandatoryFieldsAndSubmit();
    cy.get('#product').select(1);
    // cy.contains("button", "Enviar").click();
  });

});
