//Chapter 5 

// Question 1.

var num1 = parseInt(prompt("Enter your first number"));
var num2 = parseInt(prompt("Enter your second number"));
var add = num1 + num2;
// document.write("Sum of" + "\u00A0" + num1 + "\u00A0" + "and" + "\u00A0" + num2 + "\u00A0" + "is" + "\u00A0" + add);


// Question 2.

var sub = num1 - num2;
var multiply = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;
document.write("Addition of" + "\u00A0" + num1 + "\u00A0" + " and" + "\u00A0" + num2 + "\u00A0" + " is " + "\u00A0" + add);
document.write("<br>Subtraction of" + "\u00A0" + num1 + "\u00A0" + " and" + "\u00A0" + num2 + "\u00A0" + " is " + "\u00A0" + sub);
document.write("<br>Multiplication of" + "\u00A0" + num1 + "\u00A0" + " and" + "\u00A0" + num2 + "\u00A0" + " is " + "\u00A0" + multiply);
document.write("<br>Division of" + "\u00A0" + num1 + "\u00A0" + " and" + "\u00A0" + num2 + "\u00A0" + " is " + "\u00A0" + division);
document.write("<br>Modulus of" + "\u00A0" + num1 + "\u00A0" + " and" + "\u00A0" + num2 + "\u00A0" + " is " + "\u00A0" + modulus);

// Question 3.

var undefined = "";
var a = 5;
var b = a;
var c = ++b;
var d = c + 7;
var e = d;

document.write("<br><br>Value after variable declaration is " + undefined);
document.write("<br>Initial Value:" + a);
document.write("<br>Value after increment is: " + c);
document.write("<br>Value after addition is: " + d);
document.write("<br>Value after decrement is: " + --e);
document.write("<br>The remainder is: " + e % 3);


// Question 4.

var movieTicket = 600;
var cost = movieTicket * 5;
document.write("<br><br>Total Cost to buy 5 tickets to a movie is " + cost + "PKR");

// Question 5.

var table = 4;
document.write("Table of" + table);
document.write("<br><br><br>" + table + "\u00A0" + "x" + "\u00A0" + "1" + "\u00A0" + "=" + "\u00A0" + table);
document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "2" + "\u00A0" + "=" + "\u00A0" + table);
document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "3" + "\u00A0" + "=" + "\u00A0" + table * 3);
document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "4" + "\u00A0" + "=" + "\u00A0" + table * 4);
document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "2" + "\u00A0" + "=" + "\u00A0" + table * 2);
document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "5" + "\u00A0" + "=" + "\u00A0" + table * 5);
document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "6" + "\u00A0" + "=" + "\u00A0" + table * 6);
document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "7" + "\u00A0" + "=" + "\u00A0" + table * 7);
document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "8" + "\u00A0" + "=" + "\u00A0" + table * 8);
document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "9" + "\u00A0" + "=" + "\u00A0" + table * 9);
document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "10" + "\u00A0" + "=" + "\u00A0" + table * 10);

// Question 6.

var tempCelsius = 82;
var tempFehrenhiet = 65;
document.write("The Temperature Converter <br><br><br>")
document.write("<br>" + tempCelsius + "°C" + "\u00A0" + "is" + "\u00A0" + ((tempCelsius * 9 / 5) + 32) + "°F");
document.write("<br>" + tempFehrenhiet + "°F" + "\u00A0" + "is" + "\u00A0" + ((tempFehrenhiet - 32) * 5 / 9) + "°C");

// Question 7.

var head = "Shopping Cart"
var price1 = parseInt(prompt("Enter Your First Item Price"));
var quantity1 = parseInt(prompt("Enter Your First Item Quantity"));
var price2 = parseInt(prompt("Enter Your Second Item Price"));
var quantity2 = parseInt(prompt("Enter Your Second Item Quantity"));
var shipCharges = 100;
var totalPrice = ((price1 * quantity1) + (price2 * quantity2) + shipCharges);

document.write("<br>" + head + "<br>");
document.write("<br>" + "Price of item 1 is:" + "\u00A0" + price1);
document.write("<br>" + "Quantity of item 1 is:" + "\u00A0" + quantity1);
document.write("<br>" + "Price of item 2 is:" + "\u00A0" + price2);
document.write("<br>" + "Quantity of item 2 is:" + "\u00A0" + quantity2);
document.write("<br>" + "Shipping Charges:" + "\u00A0" + shipCharges);
document.write("<br><br>" + "Total Cost of your order is:" + "\u00A0" + totalPrice);

// Question 8.

var heading = "Marks Sheet"
var obtainedMarks = parseInt(prompt("Enter Your Obtained Marks"));
var totalMarks = parseInt(prompt("Enter Total Marks"));
var percentage = (obtainedMarks / totalMarks * 100);

document.write("<br>" + heading + "<br>");
document.write("<br> Total Marks:" + totalMarks);
document.write("<br> Obtained Marks:" + obtainedMarks);
document.write("<br> Percentage:" + percentage);

// Question 9.

var head = "Cucurrency In PKR";
var usd = prompt("Enter No of Dollars.");
var riyal = prompt("Enter No of Saudi Riyals.");
var usd_pkr = 170.10;
var riyal_pkr = 45.34;
var t_usd = usd * usd_pkr;
var t_riyal = riyal * riyal_pkr;
var totalCurrency = t_usd + t_riyal;

document.write("<br>" + head + "<br>");
document.write("<br>" + "Dollar in PKR: " + t_usd);
document.write("<br>" + "Riyal in PKR: " + t_riyal);
document.write("<br><br>" + "Total Currency in PKR:" + "\u00A0" + totalCurrency);

// Question 10.

var add_num = 5;
var multi_num = add_num * 10;
var devide_num = multi_num / 2;

document.write("<br>" + devide_num);

// Question 11.

var head = "The Age Calculator";
var birthYear = parseInt(prompt("Enter Your Birth Year"));
var currentYear = parseInt(prompt("Enter Current Year"));
var userAge = currentYear - birthYear;

document.write("<br>" + head + "<br>");
document.write("<br>" + "Your Birth Year is:" + birthYear);
document.write("<br>" + "Current Year is: " + currentYear);
document.write("<br>" + "Your Age is: " + userAge);

// Question 12.

var head = "The Geometrizer";
var radius = parseInt(prompt("Enter Radius of Circle"));
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius * radius);

document.write("<br>" + head + "<br>");
document.write("<br> Radius of a Circle: " + radius);
document.write("<br> Cicumferance is: " + circumference);
document.write("<br> The Area is: " + area);

// Question 13.

var head = "The Lifetime Supply Calculator";
var favSnack = prompt("Enter the name of your Favourite Snack.");
var currentAge = parseInt(prompt("Enter Your Current Age."));
var maxAge = parseInt(prompt("Enter Your Max Age."));
var snackAmm = parseInt(prompt("Enter amount of your per day snacks"));
// var total = (maxAge / snackAmm);

var total = ((maxAge - currentAge) / snackAmm);

document.write("<br>" + head + "<br>");
document.write("<br> Favourite Snack: " + favSnack);
document.write("<br> Current Age: " + currentAge);
document.write("<br> Estimated Max Age: " + maxAge);
document.write("<br> Amout of Snacks per day: " + snackAmm);
document.write("<br> You will need" + total + " " + favSnack + " to last you until the ripe old age of " + maxAge);