'use strict';

var name = prompt("what is your name ?");
//console.log(name);
alert("Hello! " + name);
alert("I like your name, so let us play a game, and regardless of who is gonna win, I am gonna show a small magic trick");

var age = prompt("am i 40 years old ? (y/n)");
while (age.toLowerCase() !== "y" && age.toLowerCase() !== "n") {
    age = prompt("Please, enter y or n only");
}
if (age.toLowerCase() !== "y") {
    //console.log(age);
    alert("That is correct, i mean if was that old i would not be here");
} else {
    //console.log(age);
    alert("Wrong answer :(");
}

var favFood = prompt("is Maqloba my favourite food ? (y/n)");
while (favFood.toLowerCase() !== "y" && favFood.toLowerCase() !== "n") {
    favFood = prompt("Please, enter y or n only");
}
if (favFood.toLowerCase() === "y") {
    //console.log(favFood);
    alert("Actually it is not");
} else {
    //console.log(favFood);
    alert("Apparantly, this is your lucky day, i wish i had half the luck that you have");
}

var favOnlineGame = prompt("is CS:GO my favourite online game ? (y/n)")
while (favOnlineGame.toLowerCase() !== "y" && favOnlineGame.toLowerCase() !== "n") {
    favOnlineGame = prompt("Please, enter y or n only");
}
if (favOnlineGame.toLowerCase() === "y") {
    //console.log(favOnlineGame);
    alert("That is correct");
} else {
    //console.log(favOnlineGame);
    alert("Wrong answer :(");
}

var favCarbrand = prompt("is Mercedes my favourite car brand ? (y/n)");
while (favCarbrand.toLowerCase() !== "y" && favCarbrand.toLowerCase() !== "n") {
    favCarbrand = prompt("Please, enter y or n only");
}
switch (favCarbrand.toLowerCase()) {
    case "y":
        var urFavCar = prompt("that is correct, is it your favourite too ? (y/n)");
        while (urFavCar.toLowerCase() !== "y" && urFavCar.toLowerCase() !== "n") {
            urFavCar = prompt("Please, enter y or n only");
        }
        switch (urFavCar.toLocaleLowerCase()) {
            case "y":
                //console.log(urFavCar);
                alert("im liking you more and more");
                break;
            case "n":
                //console.log(urFavCar);
                alert("im starting to change my mind about you");
                break;
        }
    case "n":
        //console.log(favCarbrand);
        alert("worng answer, you are bad at this :p");
        break;
}

var feelingAboutCourse = prompt("am i enjoying this course ? (y/n)");
while (age.toLowerCase() !== "y" && age.toLowerCase() !== "n") {
    age = prompt("Please, enter y or n only");
}
if (feelingAboutCourse.toLocaleLowerCase() === "y") {
    //console.log(feelingAboutCours);
    alert("correct answer, it was a very easy question");
} else {
    alert("of course i am, your answer actually made me mad, get off my face!");
    window.close();
}

var guessNum = 8;
var numCount = 1;
alert("I want you now to guess a number between 0 and 10, you have only four attempts to guess it");
do {
    var urGuess = prompt("Attempt " + numCount);
    numCount++;
    // console.log("user's guess "+ urGuess);
    // console.log("the counter "+numCount);
    if (urGuess == guessNum) {
        break;
    } else if (urGuess > guessNum) {
        alert("Too high");
    } else {
        alert("Too low");
    }

} while (numCount < 5);

// console.log("usr guess "+urGuess);
// console.log("the num "+ guessNum);

if (urGuess == guessNum) {
    alert("Nice guess !");
} else {
    alert("Hard luck :(, the number was 8");
}

var jorGov = ["amman", "irbid", "aqaba", "karak", "zarqa", "mafraq", "ajloun", "jarash", "madaba", "balqa", "tafileh", "maan"];
var govName = prompt("Write down one name of the twelve governorates of Jordan, you have six attempts to write one correct answer.");
var attempt2 = 0;
var i = 0;
do {
    govName = prompt("wrong answer, try again");
    for (var govNum = 0; govNum < 12; govNum++) {
        switch (govName.toLowerCase()) {
            case jorGov[govNum]:
                alert("correct answer !");
                console.log(govName);
                i++;
                break;
        }
    }
    attempt2++;
    console.log(attempt2);
} while ((attempt2 < 6) && (i !== 1));






















