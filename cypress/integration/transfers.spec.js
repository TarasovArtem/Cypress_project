import { transfers } from "../support/pages/transfers";
import { navigation } from "../support/pages/navigation";

describe("Techniques for using page objects patterns", ()=>{
    beforeEach(()=> {
        navigation.moneyTransferCard(); 
    })
    
    it("Money transfer", () => {

        transfers.payerDebitCardData('4552331448138217', '0524', '346');
        transfers.payerFirstName('Shayne', 'McConnell');
        transfers.receiverCardNumber('5309233034765085');
        transfers.receiverName('Juliana', 'Janssen');
        transfers.transferAmount('300');
        transfers.transferComment('Cypress test');
        transfers.transferSubmit();
        transfers.checkPayerCard('* 8217');
        transfers.checkReceiverCard('* 5085');
        transfers.payerAmount('300 UAH');
        transfers.payerCurrency('88.17 UAH');
        transfers.checkTotalAmount('388.17', 'UAH');
        transfers.checkComment('Cypress test');

    })
})