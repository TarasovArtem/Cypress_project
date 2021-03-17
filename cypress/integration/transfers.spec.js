import { transfers } from "../support/pages/transfers";
import { navigation } from "../support/pages/navigation";
import { basePage } from "../support/pages/basePage";

describe("Transfer between cards", ()=>{
    beforeEach(()=> {
        navigation.moneyTransferCard(); 
    })
    
    it("Money transfer", () => {

        basePage.typeDebitCardData('4552331448138217', '0524', '346');
        transfers.payerName('Shayne', 'McConnell');
        transfers.receiverCardNumber('5309233034765085');
        transfers.receiverName('Juliana', 'Janssen');
        basePage.typeAmount('300');
        transfers.transferComment('Cypress test');
        basePage.submitPayment();
        transfers.checkPayerCard('* 8217');
        transfers.checkReceiverCard('* 5085');
        transfers.checkPayerAmount('300 UAH');
        transfers.checkPayerCurrency('88.17 UAH');
        transfers.checkTotalAmount('388.17', 'UAH');
        transfers.checkComment('Cypress test');

    })
})