describe("Central de Atendimento ao Cliente TAT - Seleção suspensa", () => {
  beforeEach(() => {
    cy.visit("/src/index.html"); // Acessando local
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  // Exercicio
  it.only("seleciona um produto (YouTube) por seu texto", () => {
    cy.get('#product').select('youtube') // Seleção pelo value {nome da opçao}
    // cy.get('select').select(1) // Seleção pelo índice 1
  });

  // Exercicio extra 1
  it("seleciona um produto (Mentoria) por seu valor (value)", function () {
    cy.fillMandatoryFieldsAndSubmit();
    cy.get('#product').select('mentoria').should('have.value', 'mentoria');
    // cy.contains("button", "Enviar").click();
  });


  // Exercicio extra 2
  it("seleciona um produto (Blog) por seu índice", function () {
    cy.get('#product').select(1);
    // cy.contains("button", "Enviar").click();
  });

  // Padrão pra preencher os campos
  // it("seleciona um produto (Blog) por seu índice", function () {
    // cy.fillMandatoryFieldsAndSubmit();
    // cy.contains("button", "Enviar").click();
  // });

});
