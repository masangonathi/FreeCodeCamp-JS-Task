let minIncomeForDuplex = 60000;
let minCreditScoreForDuplex = 700;
let minIncomeForCondo = 45000;
let minCreditScoreForCondo = 680;
let minIncomeForCar = 30000;
let minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore){
    if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
        return "You qualify for a duplex, condo, and car loan.";}
    else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
        return "You qualify for a condo and car loan.";}
    else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
        return "You qualify for a car loan.";}
    else {
        return "You do not qualify for any loans.";}
};

let duplexLoanMsg = getLoanMessage(85000, 850);
console.log(duplexLoanMsg);
let condoLoanMsg = getLoanMessage(65000, 690);
console.log(condoLoanMsg);
let carLoanMsg = getLoanMessage(45000, 660);
console.log(carLoanMsg);
let noLoanMsg = getLoanMessage(25000, 550);
console.log(noLoanMsg);