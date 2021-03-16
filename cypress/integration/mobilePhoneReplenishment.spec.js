/// <reference types="Cypress"/>

import { mobilePhoneReplenishment } from "../support/pages/mobilePhoneReplenishment";
import { navigation } from "../support/pages/navigation";

describe("Mobile phone replenishment with card", ()=>{
    beforeEach(()=> {
        navigation.mobile(); 
    })
    it.only("Mobile Phone Replenishment", ()=>{
        mobilePhoneReplenishment.typePhoneNumber('686979712');
        mobilePhoneReplenishment.typeAmount('1');
        mobilePhoneReplenishment.typeDebitCardData('4552331448138217', '0524', '346')
        mobilePhoneReplenishment.submitPayment();
        mobilePhoneReplenishment.checkDebitCard('4552 **** **** 8217');
        mobilePhoneReplenishment.checkDebitAmount('1');
        mobilePhoneReplenishment.checkPaymentCurrency('UAH')
        mobilePhoneReplenishment.checkDebitCommission('2');
        
    })
})