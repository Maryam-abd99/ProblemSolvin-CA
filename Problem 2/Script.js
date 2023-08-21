let givinNum = 9
arr = [1,7,6,5,4,3,2]
function getTheSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                console.log(array[i] +","+ array[j]);
            }
        }
    }
}

console.log(getTheSum(arr,givinNum));