//Exercise 1 Section

function printOdds(count) {
    if (count < 0) {
        console.log("Negative Number!");
    }

    for (let i = 0; i <= count; i++) {
        
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

printOdds(22);

// printOdds(-7); 

// Exercise 2 Section

function checkAge(username = 'name', age = '0') {
    let aboveSixteen = `congrats ${username}, you can drive!`;
    let belowSixteen = `Sorry ${username}, but you need to wait until 
    you're 16.`; 

    if (age <= 15) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }

}
checkAge('Brandon', '17')

// Exercise 3 Section 


function checkCoordinates(x,y) {

 switch(true)  {
    case x === 0 && y === 0:
        console.log(`(${x},${y}) is on the Origin Axis`);
        break;
    case x >= 0 && y >= 0:
        console.log(`(${x},${y}) is on Quadrant 1!`);
        break;
    case x <= 0 && y >= 0:
        console.log(`(${x},${y}) is on Quadrant 2!`);
        break;
    case x <= 0 && y <= 0:
        console.log(`(${x},${y}) is on Quadrant 3!`);
        break;
    case x >= 0 && y <= 0:
        console.log(`(${x},${y}) is on Quadrant 4!`);
        break;
    default:
        console.log('check your Coordinates and try again.');

}
}
checkCoordinates(0,0);
checkCoordinates(3,7);
checkCoordinates(-4,6);
checkCoordinates(-2,-8);
checkCoordinates(9, -4);




// Exercise 4 Section 

function verifyTriangle(x, y, z) {
    return x + y > z && y + z > x && x + z > y;
}

function checkTriangle (x, y, z) {
    let isValid = verifyTriangle(x, y, z);
    if (isValid) {
        if (x == y && y == z){
            return `Equilateral`;
        } else if (x == y || y == z || z ==x) {
            return `Isosceles`;
        } else {
             return `Scalene`;
        } 
           
    }
    else {
        return `Not a Valid Triangle`;
    }
}

console.log(checkTriangle(1, 1, 2)); // invalad
console.log(checkTriangle(1, 2, 2)); // Isosceles
console.log(checkTriangle(2, 2, 2)); // Equilateral
console.log(checkTriangle(3, 4, 6)); // Scalene

// Exercise 5 Section


// function with 3 param
function myPlansUsage(planLimit, day, usage) {

// how many days remain
let remainingDays = (30 - day);

// average data (to use all data without going over)
let dailyDataAvg = (planLimit / 30).toFixed(2);

// an avg of how much data ive used 
let myDataUsage = (usage / day).toFixed(2);


// how much data i have left
let dataRemaining = (planLimit - usage);

// how much projected data i will use before the month.
let monthlyDataProjection = (myDataUsage * 30);

//projected overage 
let monthlyDataOverage = (monthlyDataProjection - planLimit); 

//remainng data to use wihtout going over your plan limits 
let remainingDataAvalible = (dataRemaining /remainingDays).toFixed(2);

let adjectiveOne = "";
    if (myDataUsage > dailyDataAvg){
    adjectiveOne = 'OVER';
} else { (myDataUsage < dailyDataAvg) 
    adjectiveOne = 'BELOW';
}


let adjectiveTwo = ""; 
    if (myDataUsage > dailyDataAvg){
        adjectiveTwo = 'HIGH';
    } else { (myDataUsage < dailyDataAvg) 
        adjectiveTwo = "LOW";
    }




console.log(`${day} days used, ${remainingDays} days remaining
    Average daily use: ${dailyDataAvg} GB/day
    You are ${adjectiveOne} your average daily use (${myDataUsage} GB/day),
    continuing this ${adjectiveTwo} usage, you'll be ${adjectiveOne} your data plan by
    ${monthlyDataOverage}.
    To stay below your data plan, use no more than ${remainingDataAvalible} GB/day.`); 

}

myPlansUsage(100, 17, 15);
myPlansUsage(50, 8, 44);