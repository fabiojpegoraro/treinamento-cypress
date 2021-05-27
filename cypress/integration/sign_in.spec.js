/// <reference types="cypress" />

describe('Autenticação', () =>{

    it('Efetuar login com usuário e senah válidos', () =>{
        cy.visit('/');
        cy.get('[href="/login"]').click();
        cy.get('input[type="email"]').should('be.visible').type(Cypress.env('user').email);
        cy.get('input[type="password"]').should('be.visible').type(Cypress.env('user').password);
        cy.get('button.btn-primary').click();
        cy.get('.nav-pills a.nav-link').should('have.length', 2)
        cy.get('.nav-pills a.nav-link').eq(0).should('contain.text', 'Your Feed');
    });
});