/// <reference types="Cypress" />

describe('/conduitLogin' , () => {
    beforeEach(() => {
        cy.visit('#/login')
    })

    it('greets with Sign In' , () => {
        cy.contains('h1','Sign in')
    })
    
})