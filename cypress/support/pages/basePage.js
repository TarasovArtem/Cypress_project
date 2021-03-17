export class BasePage {
    
    typeDebitCardData(cardNumber, expData, cvvData) {
        cy.get('[data-qa-node="numberdebitSource"]')
        .type(cardNumber)
        .get('[data-qa-node="expiredebitSource"]')
        .type(expData)
        .get('[data-qa-node="cvvdebitSource"]')
        .type(cvvData);
    }

    typeAmount(typeAmount) {
        cy.get('[data-qa-node="amount"]').type(typeAmount);
    }

    submitPayment() {
        cy.get('button[type="submit"]', {timeout: 3000} ).click();
    }

    typeDebitCardData(cardNumber, expData, cvvData) {
        cy.get('[data-qa-node="numberdebitSource"]')
        .type(cardNumber)
        .get('[data-qa-node="expiredebitSource"]')
        .type(expData)
        .get('[data-qa-node="cvvdebitSource"]')
        .type(cvvData);
    }

    typeAmount(amount) {
        cy.get('[data-qa-node="amount"]').type(amount);
    }
}
export const basePage = new BasePage();