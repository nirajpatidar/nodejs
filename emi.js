// function calculateEMI(principal, rate, tenureInYears) {
//     // Calculate monthly interest rate
//     const monthlyRate = (rate / 12) / 100;
    
//     // Calculate total number of payments
//     const totalPayments = tenureInYears * 12;
  
//     // Calculate EMI
//     const emi = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));
    
//     return emi;
//   }
  
//   function calculateLoanAmortization(principal, rate, tenureInYears, annualIncreasePercent) {
//     let emi = calculateEMI(principal, rate, tenureInYears);
//     const amortizationSchedule = [];
  
//     let remainingPrincipal = principal;
  
//     for (let year = 1; year <= tenureInYears; year++) {
//       const annualInterestPaid = remainingPrincipal * (rate / 100);
//       const annualPrincipalPaid = emi - annualInterestPaid;
//       remainingPrincipal -= annualPrincipalPaid;
  
//       amortizationSchedule.push({
//         year,
//         emi,
//         annualInterestPaid,
//         annualPrincipalPaid,
//         remainingPrincipal,
//       });
  
//       // Increase EMI by 5% every year
//       emi *= 1 + (annualIncreasePercent / 100);
//     }
  
//     return amortizationSchedule;
//   }
  
//   // Example usage
//   const loanPrincipal = 3500000; // Loan amount in INR
//   const annualInterestRate = 8.5; // Annual interest rate in percentage
//   const loanTenure = 20; // Loan tenure in years
//   const annualIncreasePercent = 5; // Annual increase in EMI
  
//   const amortizationSchedule = calculateLoanAmortization(loanPrincipal, annualInterestRate, loanTenure, annualIncreasePercent);
  
//   // Log the amortization schedule
//   amortizationSchedule.forEach((payment) => {
//     console.log(`Year ${payment.year}: EMI ${payment.emi.toFixed(2)}, Principal ${payment.annualPrincipalPaid.toFixed(2)}, Interest ${payment.annualInterestPaid.toFixed(2)}, Remaining Principal ${payment.remainingPrincipal.toFixed(2)}`);
//   });
  
const annualInterestRate = 0.85; // 5%
const monthlyInterestRate = annualInterestRate / 12;

const loanTenureYears = 30; // 20 years
const totalPayments = loanTenureYears * 12;

let loanAmount = 3000000; // Replace with your loan amount
let emi = calculateEMI(loanAmount, monthlyInterestRate, totalPayments);

for (let year = 1; year <= loanTenureYears; year++) {
  console.log(`Year ${year}: EMI = ${emi.toFixed(2)}`);
  emi = calculateEMIWithIncrease(emi, 0.05); // 5% increase
}

function calculateEMI(principal, monthlyInterestRate, totalPayments) {
  const emi =
    (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
  return emi;
}

function calculateEMIWithIncrease(previousEMI, annualIncreaseRate) {
  return previousEMI * (1 + annualIncreaseRate);
}
