/// <reference types="Cypress"/>
describe("Events", ()=>{

    it("type", ()=>{
        cy.visit("/mobile?lang=en");
        cy.get('[data-qa-node="phone-number"]')
            .type(123454567);
            
    })

    it("focus & blur", ()=>{
        cy.visit("/mobile?lang=en");
        cy.get('[data-qa-node="amount"]')
            .focus()
            .blur();            
    })

    it("submit", ()=>{
        cy.visit("/mobile?lang=en");
        cy.get('form[method="post"]')
            .submit();                        
    })
   
    it.only("rightClick", ()=>{
        cy.visit("https://example.cypress.io/commands/actions");
        
        cy.contains('Right click to edit').rightclick();                  
    })

    it.only("dbClick", ()=>{
        cy.visit("https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_samples_/Examples");
        
        cy.contains('My Card').dblclick();                  
    })
   
})