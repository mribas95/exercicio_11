/// <reference types="cypress" />  
/// <reference types="cypress" />  

context('Login', () =>{

    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
      cy.screenshot()
    });
    
    
      it('Login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    
    cy.get('.page-title').should('contain' , 'Minha conta')
      })
    
      it('Erro ao Inserir usuario invalido', () => {
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
    
        cy.get('.woocommerce-error').should('contain', 'senha fornecida')
      })
    
      it('Erro ao inserir senha invalida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
          
        cy.get('.woocommerce-error').should('contain', 'a senha fornecida')
      })
    })