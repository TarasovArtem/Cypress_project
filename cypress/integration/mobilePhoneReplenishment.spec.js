/// <reference types="Cypress"/>

import { mobilePhoneReplenishment } from "../support/pages/mobilePhoneReplenishment";
import { navigation } from "../support/pages/navigation";
import { basePage } from "../support/pages/basePage";

describe("Mobile phone replenishment with card", ()=>{
    beforeEach(()=> {
        navigation.mobile(); 
    })
    it("Mobile Phone Replenishment", ()=>{
        mobilePhoneReplenishment.typePhoneNumber('686979712');
        basePage.typeAmount('1');
        basePage.typeDebitCardData('4552331448138217', '0524', '346')
        basePage.submitPayment();
        mobilePhoneReplenishment.checkDebitCard('4552 **** **** 8217');
        mobilePhoneReplenishment.checkDebitAmount('1');
        mobilePhoneReplenishment.checkPaymentCurrency('UAH')
        mobilePhoneReplenishment.checkDebitCommission('2');
        
    })
})