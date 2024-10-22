describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/produtos/cadastro-produto.html');
    cy.get('.btn').click();
    cy.get('#registerError').should('contain', 'Campos obrigatórios não preenchidos!');
  })
})