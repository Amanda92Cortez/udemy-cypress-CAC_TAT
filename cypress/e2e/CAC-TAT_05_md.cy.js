describe("Central de Atendimento ao Cliente TAT - Desmarcando Checkbox", () => {
  beforeEach(() => {
    cy.visit("/src/index.html"); // Acessando local
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  // Exercicio
  it("marca ambos checkboxes, depois desmarca o último", () => {
    cy.get('input[type="checkbox"]').check().should('be.checked').last().uncheck().should('be.checked')
    // cy.get('#email-checkbox').check()
    // cy.get('#phone-checkbox').check()
  });

  // Exercicio extra 1
  it.only("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
    cy.get("#firstName").type("Amanda");
    cy.get("#lastName").type("Cortez");
    cy.get("#email").type("amadna@gmail,com");
    cy.get("#open-text-area").type("Teste"); // delay pra executar rápido
    cy.get('#phone-checkbox').check()
  });

  // Padrão pra preencher os campos
  // it("seleciona um produto (Blog) por seu índice", function () {
    // cy.fillMandatoryFieldsAndSubmit();
    // cy.contains("button", "Enviar").click();
  // });

});
