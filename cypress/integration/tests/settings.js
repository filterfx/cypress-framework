/// <reference types="Cypress" />

describe('/conduitSettings' , () => {
    beforeEach(() => {
        cy.login()
        cy.visit('#/settings')
    })

    it('greets with Your Settings' , () => {
        cy.contains('h1','Your Settings')
    })

})