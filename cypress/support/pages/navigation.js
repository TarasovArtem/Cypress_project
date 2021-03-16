export class Navigation {

    mobile() {
        cy.visit("/mobile?lang=en");
    }

    moneyTransferCard() {
        cy.visit("/money-transfer/card");
    }

}
export const navigation = new Navigation();