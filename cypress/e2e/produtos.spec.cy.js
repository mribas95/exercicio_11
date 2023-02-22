/// <reference types="cypress" />  

describe('Funcionalidade Pagina de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')

    });
    it('Deve selecionar um produto na lista', () => {
        cy.get('[class="product-block grid"]')
            .contains('Aero Daily Fitness Tee')
            .click()

    });
it.only('Deve adicionar um produto ao carrinho', () => {
    var quantidade = 5 
    cy.get('[class="product-block grid"]')
    .contains('Abominable Hoodie').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
});
});