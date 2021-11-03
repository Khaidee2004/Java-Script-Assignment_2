// Question 1. 

var city = prompt("Enter Your City");

if (city === "Karachi") {
    alert("Welcome To the City OF Lights");
}
else{
    alert("Error!");
}

// Question 2. 

var gender = prompt("Enter Your Gender.");

if (gender === "Male") {
    alert("Good Morning Sir");
}
else if(gender === "Female"){
    alert("Good Morning Maam");
}
else {
    alert("Error! please enter correct gender")
}


// Question 3. 

var color = prompt("Enter any one color of traffic signal");

if (color === "Red") {
    alert("Must Stop");
}
else if(color === "Yellow"){
    alert("Ready To Move");
}
else if(color === "Green"){
    alert("Move Now");
}
else{
    alert("Error! Please Enter Only Traffic Signal Colours ");
}

// Question 4. 

var fuel= parseInt(prompt("Tell Your remaining fuel in car"));
if (fuel<0.25 ) {
    alert("Please refill the fuel in your car")
} else {
    alert("Your fuel is enough for now");
}

// Question 5. 

//a.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

//b.
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
else{
    alert("given condition for variable b is false")
}

//c.
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//e.
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

//f.
if("car" < "cat"){
    alert("car is smaller than cat");
    }

// Question 6. 

var headMark = "Marks Sheet";
var english = prompt("Enter Your English Marks");
var maths = prompt("Enter Your Maths Marks");
var science = prompt("Enter Your Science Marks");
var totalNo = 300;
var obtainedMarks = parseInt(english) + parseInt(maths) + parseInt(science);
var percentage = (obtainedMarks / totalNo) * 100;

document.write(headMark + "<br>"+ "<br>"+ "<br>");
document.write("Total Marks:&nbsp" + totalNo + "<br>");
document.write("Marks Obtained:&nbsp" + obtainedMarks + "<br>");
document.write("Percentage:&nbsp" + percentage + "%");

if (percentage >= 80) {
    document.write("<br> Grade:&nbsp A-one" + "<br>" + "Remarks: Exellent");
}
else if (percentage >= 70) {
    document.write("<br> Grade:&nbsp A" + "<br>" + "Remarks: Good");
}
else if (percentage >= 60) {
    document.write("<br> Grade:&nbsp B" + "<br>" + "Remarks: You need to improve");
}
else if (percentage < 60) {
    document.write("<br> Grade:&nbsp Fail" + "<br>" + "Remarks: Sorry");
}

// Question 7. 

var secretNumber = 7;
var userGuess = parseInt(prompt("Guess the secret number(ranging from 1 to 10)"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
}
else{
    alert("Close enough to the correct answer");
}

// Question 8. 

var numdiv3 = parseInt(prompt("Enter the value"));
  if(numdiv3 % 3 == 0)
    alert(numdiv3 + " is divisible by 3");
  else
    alert(numdiv3 + " is not divisible by 3")

// Question 9. 

var num3o = parseInt(prompt("Enter the value"));
  if(num3o % 2 == 0)
    alert(num3o + " is an Even Number");
  else
    alert(num3o + " is an Odd Number");

// Question 10.

var t = prompt("Enter the Tempereture")

if(t > 40){
    alert("It is too hot outside.");
}
else if(t > 30){
    alert("The Weather today is Normal.");
}
else if(t > 20){
    alert("Today’s Weather is cool.");
}
else if(t > 10){
    alert("OMG! Today’s weather is so Cool.");
}
else{
    alert("Unexpected Error");
}

// Question 11.

// need correction

// var firstNum = parseInt(promp("Enter First Value"));
// var secondNum = parseInt(promp("Enter Second Value"));

// if(firstNum + secondNum){
//     alert("Your Answer is: ");
// }
// else if(firstNum - secondNum){
//     alert("Your Answer is: ");
// }
// else if(firstNum * secondNum){
//     alert("Your Answer is: ");
// }
// else if(firstNum / secondNum){
//     alert("Your Answer is: ");
// }
// else if(firstNum % secondNum){
//     alert("Your Answer is: ");
// }