### Commands for running tests

#### Installation
 
    git clone https://github.com/TarasovArtem/Cypress_project.git

    cd Cypress_project

    npm install


#### Opening Cypress GUI

    npx cypress open 

or 

    npm run cypress:open


#### Run all tests in specific browser (***Browsers should be installed on your local machine***)

    npm run cypress:run:chrome

    npm run cypress:run:firefox

    npm run cypress:run:edge


##### Tests

    ./cypress/integration/mobilePhoneReplenishment.spec.js

    ./cypress/integration/transfers.spec.js

