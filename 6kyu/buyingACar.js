// (6 kyu) Buying a Car
/* Instructions
Let us begin with an example:

A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

Can you help him?

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

Parameters and return of function:

parameter (positive int or float, guaranteed) start_price_old (Old car price)
parameter (positive int or float, guaranteed) start_price_new (New car price)
parameter (positive int or float, guaranteed) saving_per_month 
parameter (positive float or int, guaranteed) percent_loss_by_month

nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)

Detail of the above example:

end month 1: percent_loss 1.5 available -4910.0
end month 2: percent_loss 2.0 available -3791.7999...
end month 3: percent_loss 2.0 available -2675.964
end month 4: percent_loss 2.5 available -1534.06489...
end month 5: percent_loss 2.5 available -395.71327...
end month 6: percent_loss 3.0 available 766.158120825...
return [6, 766] or (6, 766)

where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to 766.158... (rounding 766.158 gives 766).

Note:

Selling, buying and saving are normally done at end of month. Calculations are processed at the end of each considered month but if, by chance from the start, the value of the old car is bigger than the value of the new one or equal there is no saving to be made, no need to wait so he can at the beginning of the month buy the new car:

nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]

We don't take care of a deposit of savings in a bank:-)

*/

// Solution
function nbMonths(startPriceOld, startPriceNew, savingsPerMonth, percentLossByMonth) {
    // intiialize variables

    let months = 0;
    let savings = 0;

    let priceOld = startPriceOld;
    let priceNew = startPriceNew;

    // loop while the price of the car and savings is less than the price of the new card
    while (priceOld + savings < priceNew) {
        months++; // increment month counter FIRST

        // for every two months, loss is 0.5% increased
        if (months % 2 === 0 && months !== 0) {
            percentLossByMonth += 0.5;
            priceOld -= priceOld * (percentLossByMonth / 100);
            priceNew -= priceNew * (percentLossByMonth / 100);
            // otherwise, price loss is stagnant
        } else {
            priceOld -= priceOld * (percentLossByMonth / 100);
            priceNew -= priceNew * (percentLossByMonth / 100);
        }

        savings += savingsPerMonth; // increment savings amount
    }

    let total = priceOld + savings; // total amount of % is price of old car + savings

    let leftover = Math.round(total - priceNew); // leftover value is the total money we have subtracted by the price of the new car, rounded to the nearest intger

    let result = [months, leftover]; // result is an array where the first element is # of months, and second element is leftover $ amount

    return result; // return the result
}
