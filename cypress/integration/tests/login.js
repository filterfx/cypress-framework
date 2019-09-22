/// <reference types="Cypress" />

describe('/conduitLogin' , () => {
    beforeEach(() => {
        cy.visit('#/login')
    })

    it('greets with Sign In' , () => {
        cy.contains('h1','Sign in')
    })

    it('links to #/register' , () => {
        cy.contains('Need an account?')
        .should('have.attr' , 'href', '#/register')
    })

    it('requires email' , () => {
        cy.get('form').contains('Sign in').click()
        cy.get('.error-messages')
        .should('contain' , 'email or password is invalid')
    })

    it('requires password' , () => {
        cy.get('[placeholder=Email]').type('mal@expleo.com{enter}')
        cy.get('.error-messages')
        .should('contain' , 'email or password is invalid')
    })

    it('requires valid username & password' , () => {
        cy.get('[placeholder=Email]').type('mal@expleo.com')
        cy.get('[placeholder=Password]').type('invalid{enter}')
        cy.get('.error-messages')
        .should('contain' , 'email or password is invalid')
        
    })

    it('navigates to #/ on successful login' , () => {
        cy.get('[placeholder=Email]').type('mal@expleo.com')
        cy.get('[placeholder=Password]').type('malexpleo#{enter}')
        cy.hash().should('eq', '#/')
    })

})