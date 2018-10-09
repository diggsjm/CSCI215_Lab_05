console.clear();

// ---------------------------------------------
// Task 1
// ---------------------------------------------
var divNode;
divNode = document.getElementById("fiddle");

// ---------------------------------------------
// Task 2
// ---------------------------------------------
var pNode;
pNode = document.createElement("p");

var pTextNode;
pTextNode = document.createTextNode("CSCI 215: Lab 5");

pNode.appendChild(pTextNode);
divNode.appendChild(pNode);


// ---------------------------------------------
// Task 3
// ---------------------------------------------
var hrNode;
hrNode= document.createElement("hr");

divNode.appendChild(pNode);

// ---------------------------------------------
// Task 4
// ---------------------------------------------
var olNode;
olNode = document.createElement("ol");

var liNode1;
liNode1 = document.createElement("li");

var liNode2;
liNode2 = document.createElement("li");

var liTextNode1;
liTextNode1 = document.createTextNode("Read Assignments");

var liTextNode2;
liTextNode2 = document.createTextNode("Code Assignments");

liNode1.appendChild(liTextNode1);
liNode2.appendChild(liTextNode2);
olNode.appendChild(liNode1);
olNode.appendChild(liNode2);
divNode.appendChild(olNode);
// ---------------------------------------------
// Task 5
// ---------------------------------------------
var imgNode;
imgNode = document.createElement("img");

var srcAttr;
srcAttr = document.createAttribute("src");
srcAttr.value = "http://munsellb.people.cofc.edu/img/prettypicture.jpg";

imgNode.setAttributeNode(srcAttr);
divNode.appendChild(imgNode);

