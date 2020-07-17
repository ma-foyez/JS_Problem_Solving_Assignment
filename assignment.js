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
var totalMile = feetToMile(20);
console.log(totalMile);



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
var totalFurniture = woodCalculator(9, 8, 5);
console.log(totalFurniture);


// Constructor Calculator Program
function brickCalculator(BuildingSize) {
    var firstToTen = 15;
    var elevenToTwenty = 12;
    var TwentyOneToAll = 10;
    if (BuildingSize <= 0) {
        console.log("Building Size cannot be negative or zero"); //when building size less then or equal to zero
    } else {
        if (BuildingSize <= 10) {
            firstToTen = BuildingSize * firstToTen;
            var totalBricks = firstToTen * 1000;
        } else if (BuildingSize <= 20) {
            firstToTen = firstToTen * 10;
            elevenToTwenty = BuildingSize - 10;
            var totalBuildingSize = firstToTen + (elevenToTwenty * 12);
            var totalBricks = totalBuildingSize * 1000;
        } else {
            firstToTen = firstToTen * 10;
            elevenToTwenty = elevenToTwenty * 10;
            TwentyOneToAll = BuildingSize - 20;
            var totalBuildingSize = firstToTen + elevenToTwenty + (TwentyOneToAll * 10);
            var totalBricks = totalBuildingSize * 1000;
        }
    }
    return totalBricks;
}
var building = brickCalculator(27);
console.log(building);


//find smallest friend name from friend list
function tinyFriend(friend) {
    if (!friend.length) {
        console.log("Alas! Maybe it's your mistake. Empty value never smallest or biggest.");
    } else {
        var min = friend[0];
        for (var i = 0; i < friend.length; i++) {
            var element = friend[i];
            if (element.length < min.length) {
                min = element;
            }
        }
    }
    return min;
}
var Friends = ['Sakib', 'saki', 'Seikh', 'Fayez'];
var tinyFriend = tinyFriend(Friends);
console.log(tinyFriend);
