var dogAge = prompt('What is the age of your dog?');
var humanAge = (dogAge-2)*4+21;
alert("This is your dog's age in human years " + humanAge);

var num = 12;
num /= 3;

var a = 16 % 4;

var x = 3;
var y = x++;
y += 1;

function bmiCalculator(weight, height) {
    var bmi = weight/(height * height);
    return bmi;
}
var results = bmiCalculator(90, 1.8);
if (results <18.5) {
    alert("Your bmi is " + results + ", so you are underweight.")
}
if (results >=18.5 && results <= 24.9) {
    alert("Your bmi is " + results + ", so you are perfectly healthy.")
}
if (results >=25) {
    alert("Your bmi is " + results + ", so you are overweight and need to go to the gym, so why are you still staring at the screen GO!.")
}

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
n;

prompt("What is your name");
prompt("What is your name");
var n = Math.random() * 100;
n = Math.floor(n) + 1;
if (n > 70){
    alert("Your change of being together is " + n + "% " + "You guys should probably meet right now")
}
if (n > 40 && n <= 70){
    alert("Your change of being together is " + n + "% " + "You might have a chance")
}
if (n <= 40) {
    alert("Your change of being together is " + n + "% " + "You guys should probably never meet")
}

var guestList = ["Olana", "Jim", "Bob", "Jeff", "Todd", "Tim"];
var guestName = prompt("What is your Name")
if (guestList.includes(guestName)) {
    alert("Welcome")
} else {
    alert("Sorry maybe next time")
}

var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100){
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
        else if (count % 3 === 0) {
            output.push("Fizz");
        }
        else if (count % 5 === 0) {
          output.push("Buzz")
        }
        else {
         output.push(count)
        }
        count++;
    }
console.log("done");
console.log(output);
}
