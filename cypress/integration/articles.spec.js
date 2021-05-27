/// <reference types="cypress" />

describe('Artigos', () =>{

    before('', () =>{
        cy.login();
    })

    it('Criar um novo artigo', () =>{
        cy.get('a[href="/editor"]').should('be.visible').click();
        cy.get('input[placeholder="Article title"]').should('be.visible').type('Carros');
        cy.get('input[placeholder="What is this article about?"]').should('be.visible').type('Carros');
        cy.get('textarea').should('be.visible').type('Fusca');
        cy.get('input[placeholder="Enter tags"]').should('be.visible').type('#carros');
        cy.get('form button.btn-primary').should('be.visible').click();

        cy.get('h1').should('contains.text', 'Carros');
    });
});