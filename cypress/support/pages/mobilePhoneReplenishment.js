export class MobilePhoneReplenishment {
    
    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]').type(phoneNumber);
    }

    checkDebitCard(debitCard) {
        cy.get('[data-qa-node="card"]').should('have.text', debitCard);
    }

    checkDebitAmount(debitAmount) {
        cy.get('[data-qa-node="amount"]').should('have.text', debitAmount);
    }

    checkDebitCommission(debitCommission) {
        cy.get('[data-qa-node="commission"]').eq(1).should('have.text', debitCommission)
    }

    checkPaymentCurrency(paymentCurrency) {
        cy.get('[data-qa-node="currency"]').eq(0).should('contain.text', paymentCurrency);
    }
}


export const mobilePhoneReplenishment = new MobilePhoneReplenishment();