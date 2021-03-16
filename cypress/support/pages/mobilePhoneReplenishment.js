export class MobilePhoneReplenishment {
    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]').type(phoneNumber);
    }

    typeAmount(amount) {
        cy.get('[data-qa-node="amount"]').type(amount);
    }

    typeDebitCardData(cardNumber, expData, cvvData) {
        cy.get('[data-qa-node="numberdebitSource"]')
        .type(cardNumber)
        .get('[data-qa-node="expiredebitSource"]')
        .type(expData)
        .get('[data-qa-node="cvvdebitSource"]')
        .type(cvvData);
    }

    submitPayment() {
        cy.get('[data-qa-node="submit"]', {timeout: 2000}   ).click();
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