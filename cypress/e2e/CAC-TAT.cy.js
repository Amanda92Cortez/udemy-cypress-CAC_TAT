describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("/src/index.html"); // Acessando local
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  // Exercicio + Exercicio extra 1
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
  });

  // Exercicio extra 2
  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    cy.get("#firstName").type("Amanda");
    cy.get("#lastName").type("Cortez");
    cy.get("#email").type("amadna@gmail,com");
    cy.get("#open-text-area").type("Teste"); // delay pra executar rápido
    // cy.get('button[type="submit"]').click()
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  // Exercicio extra 3
  it("campo telefone continua vazio quando preenchido com valor não-numerico", function () {
    cy.get("#phone").type("abcdefghij").should("have.value", "");
  });

  // Exercicio Extra 4
  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function () {
    cy.get("#firstName").type("Amanda");
    cy.get("#lastName").type("Cortez");
    cy.get("#email").type("amadna@gmail.com");
    cy.get("#phone-checkbox").click();
    cy.get("#open-text-area").type("Teste"); // delay pra eecutar rápido
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  // Exercicio extra 5
  it("preenche e limpa os campos nome, sobrenome, email e telefone", function () {
    cy.get("#firstName")
      .type("Amanda")
      .should("have.value", "Amanda")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("Cortez")
      .should("have.value", "Cortez")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("amadna@gmail.com")
      .should("have.value", "amadna@gmail.com")
      .clear()
      .should("have.value", "");
    cy.get("#phone")
      .type("12345678")
      .should("have.value", "12345678")
      .clear()
      .should("have.value", "");
    cy.get("#open-text-area")
      .type("Teste")
      .should("have.value", "Teste")
      .clear()
      .should("have.value", "");
  });

  // Exercicio extra 6
  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", function () {
    // cy.get('button[type="submit"]').click()
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  // Exercicio extra 7
  it("envia o formuário com sucesso usando um comando customizado", function () {
    cy.fillMandatoryFieldsAndSubmit();
    cy.contains("button", "Enviar").click();
  });

  // Exercicio extra 8


  // Exercicio extra
});
