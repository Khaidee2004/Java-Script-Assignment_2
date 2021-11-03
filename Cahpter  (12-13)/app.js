//Chapter 12-13

// Question 1.


//need correction
// var chr = prompt("Enter any Character")

// if (chr >= 65 && chr <= 90){
//     alert("Character is a capital letter");
// }
// else if (chr >= 97 && chr <= 122){
//     alert("Character is a small letter");
// }
// else if (chr >= 48 && chr <= 57){
//     alert("Character is a digit");
// }

// Question 2.

var num1 = prompt("Input the First number");
var num2 = prompt("Input the second number");

if (parseInt(num1) > parseInt(num2)) {
    alert("The larger of " + num1 + " and " + num2 + " is " + num1);
}
else if (parseInt(num2) > parseInt(num1)) {
    alert("The larger of " + num1 + " and " + num2 + " is " + num2);
}
else if (num1 == ""){
    alert("Plz enter the value to proceed.")
}
else if (num2 == ""){
    alert("Plz enter the value to proceed.")
}
else {
    alert("The values " + num1 + " and " + num2 + " are equal.");
}

// Question 3.

var num = parseInt(prompt("Enter Number"));
if (num == 0) {
    alert("Your Entered Zero Number");
}
else if (num > 0) {
    alert("Your Entered Positive Number");
}
else if (num < 0) {
    alert("Your Entered Negative Number");
}
else ("Error! Please Enter Number");

// Question 4.

if (character == vow1) {
    alert("It's a vowel")
}
else if (character == vow2) {
    alert("It's a vowel")
}
else if (character == vow3) {
    alert("It's a vowel");
}
else if (character == vow4) {
    alert("It's a vowel");
}
else if (character == vow5) {
    alert("It's a vowel");
}
else {
    alert("false");
}

// Question 5.

var password = "Password123";
var user = prompt("Enter Your Password");
if (user == "") {
    alert("Please Enter Your Password");
} else if (user == password) {
    alert("Correct! The password you entered matches the original password");

}
else {
    alert("Incorrect password");
}

// Question 6.

var hour = prompt("Enter The Hour");
var greeting = "Good Day";

if (hour < 18) {
    alert(greeting);
}
else {
    alert("Good evening");
}

// Question 7.

var time = prompt("Enter time  in 24 hours clock format like: 19:00")

var am12 = "00:00";
var am1 = "01:00";
var am2 = "02:00";
var am3 = "03:00";
var am4 = "04:00";
var am5 = "05:00";
var am6 = "06:00";
var am7 = "07:00";
var am8 = "08:00";
var am9 = "09:00";
var am10 = "10:00";
var am11 = "11:00";
var pm12 = "12:00";
var pm1 = "13:00";
var pm2 = "14:00";
var pm3 = "15:00";
var pm4 = "16:00";
var pm5 = "17:00";
var pm6 = "18:00";
var pm7 = "19:00";
var pm8 = "20:00";
var pm9 = "21:00";
var pm10 = "22:00";
var pm11 = "2:00";

if (time == am12) {
    alert("12am (midnight)")
}
else if (time == am1) {
    alert("1am")
}
else if (time == am2) {
    alert("2am")
}
else if (time == am3) {
    alert("3am")
}
else if (time == am4) {
    alert("4am")
}
else if (time == am5) {
    alert("5am")
}
else if (time == am6) {
    alert("6am")
}
else if (time == am7) {
    alert("7am")
}
else if (time == am8) {
    alert("8am")
}
else if (time == am9) {
    alert("9am")
}
else if (time == am10) {
    alert("10am")
}
else if (time == am11) {
    alert("11am")
}
else if (time == pm12) {
    alert("12am (noon)")
}
else if (time == pm1) {
    alert("1pm")
}
else if (time == pm2) {
    alert("2pm")
}
else if (time == pm3) {
    alert("3pm")
}
else if (time == pm4) {
    alert("4pm")
}
else if (time == pm5) {
    alert("5pm")
}
else if (time == pm6) {
    alert("6pm")
}
else if (time == pm7) {
    alert("7pm")
}
else if (time == pm8) {
    alert("8pm")
}
else if (time == pm9) {
    alert("9pm")
}
else if (time == pm10) {
    alert("10pm")
}
else if (time == pm11) {
    alert("11pm")
}
else {
    alert("Wrtite in a correct format like: (00:00)")
}