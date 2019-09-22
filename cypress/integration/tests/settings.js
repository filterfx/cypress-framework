/// <reference types="Cypress" />

describe('/conduitSettings' , () => {
    beforeEach(() => {
        cy.login()
        cy.visit('#/settings')
    })

    it('greets with Your Settings' , () => {
        cy.contains('h1','Your Settings')
    })

    it('navigates to #/settings' , () => {
        cy.contains('Your Settings')
        cy.hash().should('eq', '#/settings')
    })

})