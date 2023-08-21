


function countFractionPairs(numerator, denominator) {
    let count = 0;
    for (let i = 0; i < numerator.length; i++) {
        for (let j = i + 1; j < numerator.length; j++) {
            if (numerator[i] * denominator[j] + numerator[j] * denominator[i] === denominator[i] * denominator[j]) 
            {
                count++;
            }
        }
    }

    return count;
}

const numerator = [1, 2, 2 , 8 , 8 , 10];
const denominator = [3, 10, 6 , 12 , 10, 15];
console.log(countFractionPairs(numerator, denominator));

