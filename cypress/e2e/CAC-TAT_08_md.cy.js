describe("Central de Atendimento ao Cliente TAT - dispositivo móvel", () => {
  beforeEach(() => {
    cy.visit("/src/index.html"); // Acessando local
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });
// Exercicio
//Criando um test no arquivo package.json
// cy:open:mobile


// Exercicio Extra
// Ativando pra executar vídeo no arquivo cypress.config.js
// No caso usa teste:mobile pra executar e gerar arquivo



  // Padrão pra preencher os campos
  // it("seleciona um produto (Blog) por seu índice", function () {
    // cy.fillMandatoryFieldsAndSubmit();
    // cy.contains("button", "Enviar").click();
  // });

});
