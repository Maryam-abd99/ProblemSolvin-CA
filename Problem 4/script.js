const getTheGender = (userName) => {
    if((userName.length % 2) == 0)
    {
        console.log(`The User is a GIRL!`);
    }
    else
    {
        console.log(`The User is a BOY!`);
    }
}
getTheGender("ewgsj")