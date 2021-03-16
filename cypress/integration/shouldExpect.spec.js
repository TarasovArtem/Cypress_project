/// <reference types="Cypress"/>
describe("Banking test", ()=>{

    it("should", ()=>{
        cy.visit("/mobile?lang=en");
        cy.get('[data-qa-node="amount"]')
            .type(100)
            .should('have.value', 100)
            .and('be.visible');
    })

    it("expect", ()=>{
        cy.visit("/mobile?lang=en");
        cy.get('[data-qa-node="amount"]')
            .type(100).then(amount => {
                expect(amount).to.have.value(100);
            })
    })

    it("check is visible Archive", ()=>{
        cy.visit("/deposit/open?lang=en");
        cy.contains('Мої депозити')
        .trigger('mouseover')
        .get('#archiveDeposits')
            .should('be.visible');        
    })

    it.only("correct attr button", ()=>{
        cy.visit("/?lang=en");
        cy.contains('Show cards')
            .should('have.attr', 'type')
            .and('match', /button/);
    })
   
})