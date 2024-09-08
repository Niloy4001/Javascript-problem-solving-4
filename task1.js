////////////////////////////////////////////////////
// ### Task 1 from above pdf


function calculateMoney(quantityOfTicket) {

    const ticketPrice = 120;
    const nightGuardFeePerDay = 500;
    const stuffLunchFee = 8 * 50;
    const totalExtraCost = nightGuardFeePerDay + stuffLunchFee;


    if (typeof quantityOfTicket !== 'number') {

        return 'Please input a number ';
    }

    else if (quantityOfTicket < 0) {

        return 'Negative numbers are not allowed. Please try again with a positive value.';
    }

    let remainingTk = (quantityOfTicket * ticketPrice) - totalExtraCost;

    return remainingTk;



}

const remainingTk = calculateMoney(-130);

console.log(remainingTk);
