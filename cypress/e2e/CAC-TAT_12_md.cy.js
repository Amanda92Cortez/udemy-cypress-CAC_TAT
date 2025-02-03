describe("Central de Atendimento ao Cliente TAT - Avançando no uso do Cypress", () => {
  beforeEach(() => {
    cy.visit("/src/index.html"); // Acessando local
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });


  it("preenche os campos obrigatórios e envia o formulário", () => {
    const longText =
      "Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste";
    cy.get("#firstName").type("Amanda");
    cy.get("#lastName").type("Cortez");
    cy.get("#email").type("amadna@gmail.com");
    // cy.get('#open-text-area').type('Teste do campo');
    cy.get("#open-text-area").type(longText, { delay: 0 });
    cy.contains("button", "Enviar").click();
    cy.get(".success").should("be.visible");

    cy.tick(300);
    cy.get(".success").should("not.be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    cy.get("#firstName").type("Amanda");
    cy.get("#lastName").type("Cortez");
    cy.get("#email").type("amadna@gmail,com");
    cy.get("#open-text-area").type("Teste"); // delay pra executar rápido
    // cy.get('button[type="submit"]').click()
    cy.contains("button", "Enviar").click();

    it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
      cy.clock()
      cy.get("#firstName").type("Amanda");
      cy.get("#lastName").type("Cortez");
      cy.get("#email").type("amadna@gmail,com");
      cy.get("#open-text-area").type("Teste"); // delay pra executar rápido
      // cy.get('button[type="submit"]').click()
      cy.contains("button", "Enviar").click();
  
      cy.get(".error").should("be.visible");

      cy.tick(300);
      cy.get(".error").should("not.be.visible");

    });





  // Padrão pra preencher os campos
  // it("seleciona um produto (Blog) por seu índice", function () {
    // cy.fillMandatoryFieldsAndSubmit();
    // cy.contains("button", "Enviar").click();
  // });

});
