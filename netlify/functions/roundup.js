exports.handler = async (req, res) => {
    try {

        // Parse the incoming data from the API payload
        const data = JSON.parse(req.body);
        console.log('This is data: ', data);

        /* Start of roundup function */

        // Assign the incoming transactions array to a variable, don't forget to take away
        const transArray = data.recentTransactions;
        
        // map over transactions, roundup each value
        const roundupArray = transArray.map(num => Math.ceil(num / 100) * 100);

        // Find the difference between the sum of roundupArray and transactions
        const transSum = transArray.reduce((acc, curr) => acc + curr);
        const roundupSum = roundupArray.reduce((acc, curr) => acc + curr);
        const differenceOfSums = roundupSum - transSum;

        console.log('transArray = ', transArray);
        console.log('roundupArray = ', roundupArray);
        console.log('differenceOfSums = ', differenceOfSums);
        
        // return an obj with transactions
        return {
            transHistory: transArray,
            roundup: roundupArray,
            sum: differenceOfSums
        };

    } catch (error) {
        console.log(error);
        return
    };
};