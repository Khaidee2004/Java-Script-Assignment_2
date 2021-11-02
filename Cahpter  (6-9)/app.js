//Chapter 6-9

// Question 1.

var a = parseInt(prompt("Enter Any Value"));
var num = a;
var head = "Result";
var dotLine = ".........................";

document.write("<br>" + head + "<br><br>");
document.write("The value of a is: " + a);
document.write("<br><br>" + dotLine + "<br><br>");
document.write("Now the value of ++a is: " + (++num) + "<br>");
document.write("Now the value of a is: " + num + "<br>");
document.write("Now the value of a++ is: " + (num++) + "<br>");
document.write("Now the value of a is: " + num + "<br>");
document.write("Now the value of --a is: " + (--num) + "<br>");
document.write("Now the value of a is: " + num + "<br>");
document.write("Now the value of a-- is: " + (num--) + "<br>");
document.write("Now the value of a is: " + num + "<br>");

// Question 2.

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

// Explaination
// --a = 1;
// --a - --b = 0;
// --a - --b + ++b = 3;
// --a - --b + ++b + b-- = 5;

document.write("<br> a is: " + a);
document.write("<br> b is: " + b);
document.write("<br> result is: " + result);

// Question 3.

var name = prompt("Enter Your Name");
document.write("<br> Hello!" + name + ".");

// Question 5.
var table = parseInt(prompt("Enter any number"));
if (table) {
    document.write("<br>Table of " + table + "<br>");
    document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "1" + "\u00A0" + "=" + "\u00A0" + table);
    document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "2" + "\u00A0" + "=" + "\u00A0" + table * 2);
    document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "3" + "\u00A0" + "=" + "\u00A0" + table * 3);
    document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "4" + "\u00A0" + "=" + "\u00A0" + table * 4);
    document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "5" + "\u00A0" + "=" + "\u00A0" + table * 5);
    document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "6" + "\u00A0" + "=" + "\u00A0" + table * 6);
    document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "7" + "\u00A0" + "=" + "\u00A0" + table * 7);
    document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "8" + "\u00A0" + "=" + "\u00A0" + table * 8);
    document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "9" + "\u00A0" + "=" + "\u00A0" + table * 9);
    document.write("<br>" + table + "\u00A0" + "x" + "\u00A0" + "10" + "\u00A0" + "=" + "\u00A0" + table * 10);
}
else {
    var tabNum = 5;
    document.write("<br> Table of " + tabNum + "<br>");
    document.write("<br>" + 5 + "\u00A0" + "x" + "\u00A0" + "1" + "\u00A0" + "=" + "\u00A0" + tabNum * 1);
    document.write("<br>" + 5 + "\u00A0" + "x" + "\u00A0" + "2" + "\u00A0" + "=" + "\u00A0" + tabNum * 2);
    document.write("<br>" + 5 + "\u00A0" + "x" + "\u00A0" + "3" + "\u00A0" + "=" + "\u00A0" + tabNum * 3);
    document.write("<br>" + 5 + "\u00A0" + "x" + "\u00A0" + "4" + "\u00A0" + "=" + "\u00A0" + tabNum * 4);
    document.write("<br>" + 5 + "\u00A0" + "x" + "\u00A0" + "5" + "\u00A0" + "=" + "\u00A0" + tabNum * 5);
    document.write("<br>" + 5 + "\u00A0" + "x" + "\u00A0" + "6" + "\u00A0" + "=" + "\u00A0" + tabNum * 6);
    document.write("<br>" + 5 + "\u00A0" + "x" + "\u00A0" + "7" + "\u00A0" + "=" + "\u00A0" + tabNum * 7);
    document.write("<br>" + 5 + "\u00A0" + "x" + "\u00A0" + "8" + "\u00A0" + "=" + "\u00A0" + tabNum * 8);
    document.write("<br>" + 5 + "\u00A0" + "x" + "\u00A0" + "9" + "\u00A0" + "=" + "\u00A0" + tabNum * 9);
    document.write("<br>" + 5 + "\u00A0" + "x" + "\u00A0" + "10" + "\u00A0" + "=" + "\u00A0" + 5 * tabNum);
};

// Question 6.

var sub1 = prompt("Enter Your First Subject Name");
var sub2 = prompt("Enter Your Second Subject Name");
var sub3 = prompt("Enter Your Third Subject Name");
var sub_totalMarks = 100;
var obtainMarks1 = parseInt(prompt("Enter your first Subject Marks"));
var obtainMarks2 = parseInt(prompt("Enter your second Subject Marks"));
var obtainMarks3 = parseInt(prompt("Enter your third Subject Marks"));
var percent_1 = (obtainMarks1 / sub_totalMarks) * 100;
var percent_2 = (obtainMarks2 / sub_totalMarks) * 100;
var percent_3 = (obtainMarks3 / sub_totalMarks) * 100;
var total_numbs = sub_totalMarks * 3;
var total_obtain = obtainMarks1 + obtainMarks1 + obtainMarks1;
var totalPercent = (total_obtain / total_numbs) * 100;

document.write("<br>");
document.write("Subject" + " &nbsp;" + " &nbsp;" + "Total Marks" + " &nbsp;" + " &nbsp;" + "Obtained Marks" + " &nbsp;" + " &nbsp;" + "Percentage" + "<br>" + "<br>");
document.write(sub1 + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + sub_totalMarks + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + obtainMarks1 + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + percent_1 + "<br>");
document.write(sub2 + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + sub_totalMarks + " &nbsp;" + " &nbsp;" + obtainMarks2 + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + percent_2 + "<br>");
document.write(sub3 + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + sub_totalMarks + " &nbsp;" + " &nbsp;" + obtainMarks3 + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + percent_3 + "<br>");
document.write("&nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + total_numbs + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;" + total_obtain + " &nbsp;" +  " &nbsp;" + " &nbsp;" + " &nbsp;" + " &nbsp;"+ " &nbsp;" + " &nbsp;" + " &nbsp;" + totalPercent + "<br>" + "<br>");

// Question 7.