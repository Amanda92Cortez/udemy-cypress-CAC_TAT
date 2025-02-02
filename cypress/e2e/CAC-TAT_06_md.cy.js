describe("Central de Atendimento ao Cliente TAT - Upload de Arquivos", () => {
  beforeEach(() => {
    cy.visit("/src/index.html"); // Acessando local
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  // Exercicio
  it("seleciona um arquivo da pasta fixturesseleciona um arquivo da pasta fixtures", () => {
    cy.get('input[type="file"]').selectFile('cypress/fixtures/teste.txt')
    .should(input => {
      expect(input[0].files[0].name).to.equal('teste.txt')
    })
  });

  // Exercicio Extra 1
  it("seleciona um arquivo simulando um drag-and-drop", () => {
    cy.get('input[type="file"]').selectFile('cypress/fixtures/teste.txt', {action: 'drag-drop'})
    .should(input => {
      expect(input[0].files[0].name).to.equal('teste.txt')
    })
  });

  // Extra 2
  it.only("seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", () => {
    cy.fixture('teste.txt').as('sampleFile')
    cy.get('input[type="file"]').selectFile('@sampleFile')
    .should(input => {
      expect(input[0].files[0].name).to.equal('teste.txt')
    })
  });

  


  // Padrão pra preencher os campos
  // it("seleciona um produto (Blog) por seu índice", function () {
    // cy.fillMandatoryFieldsAndSubmit();
    // cy.contains("button", "Enviar").click();
  // });

});
