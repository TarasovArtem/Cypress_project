/// <reference types="Cypress"/>

import { mobilePhoneReplenishment } from "../support/pages/mobilePhoneReplenishment"

describe("Techniques for using page objects patterns", ()=>{

    it.only("Mobile Phone Replenishment", ()=>{
        cy.visit("/mobile?lang=en");
        mobilePhoneReplenishment.typePhoneNumber('686979712');
        mobilePhoneReplenishment.typeAmount('1');
        mobilePhoneReplenishment.typeDebitCardData('4552331448138217', '0524', '346')
        mobilePhoneReplenishment.submitPayment();
        mobilePhoneReplenishment.checkDebitCard('4552 **** **** 8217');
        mobilePhoneReplenishment.checkDebitAmount('1');
        mobilePhoneReplenishment.checkPaymentCurrency('UAH')
        mobilePhoneReplenishment.checkDebitCommission('2');
        
    })
   
    
    it("Money transfer", () => {
        cy.visit("/money-transfer/card");

        cy.get('[data-qa-node="numberdebitSource"]').type('4552331448138217');

        cy.get('[data-qa-node="expiredebitSource"]').type('0524');

        cy.get('[data-qa-node="cvvdebitSource"]').type('346');

        cy.get('[data-qa-node="firstNamedebitSource"]').type('Shayne');

        cy.get('[data-qa-node="lastNamedebitSource"]').type('McConnell');

        cy.get('[data-qa-node="numberreceiver"]').type('5309233034765085');

        cy.get('[data-qa-node="firstNamereceiver"]').type('Juliana');

        cy.get('[data-qa-node="lastNamereceiver"]').type('Janssen');
        
        cy.get('[data-qa-node="amount"]').type('300');

        cy.get('[data-qa-node="toggle-comment"]').click();

        cy.get('[data-qa-node="comment"]').type('Cypress test');

        cy.get('button[type="submit"]', {timeout: 2000} ).click();

        cy.get('[data-qa-node="payer-card"]').should('have.text', '* 8217');

        cy.get('[data-qa-node="receiver-card"]').should('have.text', '* 5085');

        cy.get('[data-qa-node="payer-amount"]').should('have.text', '300 UAH');
        cy.get('[data-qa-node="payer-currency"]').should('have.text', '88.17 UAH');
        cy.get('[data-qa-node="total"]').find('span').should('contain.text', '388.17');
        cy.get('[data-qa-node="total"]').find('small').should('contain.text', 'UAH');
        cy.get('[data-qa-node="comment"]').should('have.text','Cypress test');



    })
})