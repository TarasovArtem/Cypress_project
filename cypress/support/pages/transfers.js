export class Transfers {

    payerName(name, lastName) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
        .type(name)
        .get('[data-qa-node="lastNamedebitSource"]')
        .type(lastName);
    }

    receiverCardNumber(cardNumber) {
        cy.get('[data-qa-node="numberreceiver"]').type(cardNumber);
    }

    receiverName(firstNamereceiver, lastNamereceiver) {
        cy.get('[data-qa-node="firstNamereceiver"]')
        .type(firstNamereceiver)
        .get('[data-qa-node="lastNamereceiver"]')
        .type(lastNamereceiver);
    }

    transferComment(transferComm) {
        cy.get('[data-qa-node="toggle-comment"]')
        .click()
        .get('[data-qa-node="comment"]')
        .type(transferComm).toMatchImageSnapshot();
    }

    checkPayerCard(payerCard) {
        cy.get('[data-qa-node="payer-card"]').should('have.text', payerCard);
    }
    
    checkReceiverCard(receiverCard) {
        cy.get('[data-qa-node="receiver-card"]').should('have.text', receiverCard);
    }

    checkPayerAmount(payerAmount) {
        cy.get('[data-qa-node="payer-amount"]').should('have.text', payerAmount);
    }

    checkPayerCurrency(payerCurrency) {
        cy.get('[data-qa-node="payer-currency"]').should('have.text', payerCurrency);
    }
    
    checkTotalAmount(totalAmount, currency) {
        cy.get('[data-qa-node="total"]')
        .find('span')
        .should('contain.text', totalAmount)
        .get('[data-qa-node="total"]')
        .find('small')
        .should('contain.text', currency);
    }

    checkComment(checkComment) {
        cy.get('[data-qa-node="comment"]').should('have.text',checkComment);
    }


}
export const transfers = new Transfers();