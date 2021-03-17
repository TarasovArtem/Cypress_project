/// <reference types="Cypress"/>



describe("API testing", ()=>{
    
    
    it("GET request", ()=>{
      cy.request('/')
        .then((response) => {
            console.log(response);
        })          
    })

    it("POST request to mobile phone replenishment with card", ()=>{
        const reqBody = {
            "action":"info",
            "phone":"+380686979712",
            "amount":50,
            "currency":"UAH",
            "cardCvv":"345",
            "card":"4552331448138217",
            "cardExp":"0524",
            "operator":
            "Kyivstar Ukraine",
            "operatorId":"602",
            "xref":"5119e1a5f442dd68f6d94a95e4a6a62a",
            "_":1615975855433
        };

        const headersData = {
            cookie:"pubkey=3b639df9d3bef6b5d4a3b34c49fb4a6e; fp=17; lfp=2/20/2021, 4:07:56 PM; pa=1615979285717.7660.13031543429519443next.privat24.ua0.42526525708430274+1"
        };

        cy.request({
            method: "POST",
            url:"/api/p24/pub/mobipay",
            body: reqBody,
            headers: headersData
        })
          .then((response) => {
              expect(response).to.have.property('status').to.equal(200);
              expect(response.body).to.have.property('status').to.equal('success');
              expect(response.body.data).to.have.property('amount').to.equal('50.0');
              expect(response.body.data).to.have.property('commission').to.equal('2.0');
              expect(response.body.data).to.have.property('realCurrency').to.equal('UAH');
              
              console.log(response);
          })          
    })

    it("POST request to mobile phone replenishment with card", ()=>{
        const reqBody = {
            "action":"info",
            "phone":"+380686979712",
            "amount":50,
            "currency":"UAH",
            "cardCvv":"345",
            "card":"4552331448138217",
            "cardExp":"0524",
            "operator":
            "Kyivstar Ukraine",
            "operatorId":"602",
            "xref":"5119e1a5f442dd68f6d94a95e4a6a62a",
            "_":1615975855433
        };

        const headersData = {
            cookie:"pubkey=3b639df9d3bef6b5d4a3b34c49fb4a6e; fp=17; lfp=2/20/2021, 4:07:56 PM; pa=1615979285717.7660.13031543429519443next.privat24.ua0.42526525708430274+1"
        };

        cy.request({
            method: "POST",
            url:"/api/p24/pub/mobipay",
            body: reqBody,
            headers: headersData
        }).its('body').should('contain', {
            status: 'success'
        }).its('data').should('contain', {
            totalAmountUAH: '52.0'
        }) 
    })          
      
})