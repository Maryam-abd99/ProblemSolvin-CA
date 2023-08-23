// chef and chefina are Playing with dice In one turn both of them roll their dice at once. 
// They consider a turn to be good if the Sum of the numbers on their dice is greater than 6 
// Given that in a particular turn chef and chefina get X and y on their respective dice, 
// find whether the turn was good?



for (let i = 0; i <= 6; i++) {
    for (let j = i; j <= 6; j++) {
        if(i + j == 6)
        {
            console.log(`${i} and ${j} = 6. So, the turn is good`)
        }        
    }    
}