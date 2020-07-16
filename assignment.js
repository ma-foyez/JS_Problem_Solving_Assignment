// Foot to mile conversion program
function feetToMile(feet) {
    if (feet == 0) {
        console.log("You enter an empty number")
    } else if (feet < 0) {
        console.log("Distance cannot be negative");
    } else {
        var mile = feet * 0.000189394; // here 1foot = 0.000189394 mile.
    }
    return mile;
}
var result = feetToMile(20);
console.log(result);



//wood calculator program
function woodCalculator(chair, table, bed) {
    //The user can omit one pieces of furniture if he wants, that means, he can make the other two pieces of furniture by omitting one if he wants. But the quality of any furniture cannot be negative.
    if (chair < 0 || table < 0 || bed < 0) {
        console.log("The number of furniture cannot be negative.")
    } else {
        var woodForChair = chair * 1;
        var woodForTable = table * 3;
        var woodForBed = bed * 5;
        var totalWood = woodForChair + woodForTable + woodForBed;
    }
    return totalWood;
}
var furniture = woodCalculator(9, 2, 2);
console.log(furniture);


// Constructor Calculator Program
function brickCalculator(BuildinSize) {
    var firstToTen = 15;
    var elevenToTwenty = 12;
    var TwentyOneToAll = 10;
    if (BuildinSize < 0 || BuildinSize == 0) {
        console.log("Building Size cannot be negative or zero");
    } else {
        if (BuildinSize <= 10) {
            var totalBricks = BuildinSize * 1000;
        } else if (BuildinSize <= 20) {
            firstToTen = firstToTen * 10;
            elevenToTwenty = BuildinSize - 10;
            BuildinSize = firstToTen + (elevenToTwenty * 12);
            var totalBricks = BuildinSize * 1000;//this is output
        } else {
            firstToTen = firstToTen * 10;
            elevenToTwenty = elevenToTwenty * 10;
            TwentyOneToAll = BuildinSize - 20;
            BuildinSize = firstToTen + elevenToTwenty + (TwentyOneToAll * 10);
            var totalBricks = BuildinSize * 1000;
        }
    }
    return totalBricks;
}
var building = brickCalculator(80);
console.log(building);


//find smallest friend name from friend circle
function tinyFriend(friend) {
    var min = friend[0];
    for (var i = 0; i < friend.length; i++) {
        var element = friend[i];
            if (element.length < min.length) {
                min = element;
            }
    }
    return min;
}
var Friends = ['Sakib', 'saki', 'Seikh', 'Fayez'];
var tinyFriend = tinyFriend(Friends);
console.log(tinyFriend);
