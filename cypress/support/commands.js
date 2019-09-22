/// <reference types="Cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })


// Cypress.Commands.add('login', () => {
//     cy.visit('#/login')
//     cy.get('[placeholder=Email]').type('mal@expleo.com')
//     cy.get('[placeholder=Password]').type('malexpleo#{enter}')
//     cy.hash().should('eq', '#/')
// })

Cypress.Commands.add('login' , () => {
    cy.request({
        method: 'POST',
        url: 'https://conduit.productionready.io/api/users/login',
        body: {
            user: {
                email: 'mal@expleo.com',
                password: 'malexpleo#'
            }
        }
    })
    .then((resp) => {
        window.localStorage.setItem('jwt' , resp.body.user.token)
    })
})

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
