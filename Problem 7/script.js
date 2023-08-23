let array = [16,17,4,3,5,2]
const getTheLeader = (array) => {
    let leaders = []
    leaders.push(array[array.length - 1])
    let mostRight = array[array.length - 1]
    for(let i = array.length - 2 ; i >= 0 ; i--) // backward for loop
    {
        if(array[i] > mostRight)
        {
            leaders.push(array[i])
            mostRight = array[i]
        }
    }
    console.log(`Leaders : ` );
    for(let j = 0 ; j < leaders.length; j++)
    {
        console.log(leaders[j]);
    }
    }
getTheLeader(array)