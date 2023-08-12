var height = prompt("Enter the height of the cone")
var radius = prompt("Enter the radius of the cone")

function getTheVolume(){
    const py = 22/7;
    let radius2 = radius ** 2;
    let volume = (1/3) * py * radius2 * height;
    console.log(`The volume of the cone = ${volume}`);
}

getTheVolume(height, radius)