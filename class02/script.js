'use strict';

var name = prompt("what is your name ?");
//console.log(name);
alert("Hello! " + name );
alert("I like your name, so let us play a game, and regardless of who is gonna win, I am gonna show a small magic trick");

var age= prompt("am i 40 years old ? (y/n)");
if (age.toLowerCase()==="y") {
    //console.log(age);
    alert("That is correct, i mean if was that old i would not be here");
} else{
    //console.log(age);
    alert("Wrong answer :(");
}

var favFood= prompt("is Maqloba my favourite food ? (y/n)");
if (favFood.toLowerCase()==="y") {
    //console.log(favFood);
    alert("Actually it is not");
} else{
    //console.log(favFood);
    alert("Apparantly, this is your lucky day, i wish i had half the luck that you have");
}

var favOnlineGame= prompt("is CS:GO my favourite online game ? (y/n)")
if (favOnlineGame.toLowerCase()==="y") {
    //console.log(favOnlineGame);
    alert("That is correct");
} else{
    //console.log(favOnlineGame);
    alert("Wrong answer :(");
}

var favCarbrand=prompt("is Mercedes my favourite car brand ? (y/n)");
switch (favCarbrand.toLowerCase()) {
    case "y":
        var urFavCar=prompt("that is correct, is it your favourite too ? (y/n)");
        switch (urFavCar.toLocaleLowerCase()){
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
    }
   
var feelingAboutCourse=prompt("am i enjoying this course ? (y/n)");
if (feelingAboutCourse.toLocaleLowerCase()==="y"){
    //console.log(feelingAboutCours);
    alert("correct answer, it was a very easy question");
} else {
    alert("of course i am, your answer actually made me mad, get off my face!");
    window.close();
}
alert("that was the game, iam really happy to meet you "+ name);
alert("now, are you ready for the magic trick");
alert("close your eyes and press enter");
alert("ahhh, i see that your eyes are still opened ;) ,let us try again without cheating");

window.close();
