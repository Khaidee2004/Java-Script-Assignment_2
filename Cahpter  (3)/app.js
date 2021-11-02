//Chapter 3 

// Question 1.

var age = 17;
alert("I am" + "\u00A0" + age + "\u00A0" + "years old");

// Question 2.

var visit = 11;
alert("You have visited this site" + "\u00A0" + visit + "\u00A0" + "times");

// Question 3.

var birthYear = 2004;
var dataType = "Data type of my decleared variable is number.";
document.write("My Birth Year Is " + birthYear);
document.write("<br>" + dataType);


// Question 4.

var visitorName = prompt("Enter Your Name");
var productTitle = prompt("Enter Product Name");
var quantity = +prompt("Enter the quantity of products you want to purchase");
var title = "On XYZ Clothing store";
document.write(visitorName + "\u00A0" + "ordered" + "\u00A0" + quantity
    + "\u00A0" + productTitle + "\u00A0" + "ordered" + "\u00A0" + title);