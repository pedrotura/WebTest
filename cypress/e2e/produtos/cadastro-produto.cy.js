function getProductName() {
  const products = ['Mochila', 'Camiseta', 'Lápis', 'Caneca'];

  const index = Math.floor(Math.random()*products.length);
  return products[index];

}

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/produtos/cadastro-produto.html');
    const name = getProductName();
    const price = Math.floor(Math.random()*100);
    const amountInStock = Math.floor(Math.random()*100);
    const submissionDate = '2024-10-21';

    cy.get('#registerName').type(name);
    cy.get('#registerPrice').type(price);
    cy.get('#registerAmountInStock').type(amountInStock);
    cy.get('#registerSubmissionDate').type(submissionDate);

    cy.get('.btn').click();
    cy.get('h2').should('contain', 'Lista de Produtos');

  })
})