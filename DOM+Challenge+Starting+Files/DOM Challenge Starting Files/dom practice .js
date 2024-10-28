document
document.firstChild.firstElementChild;
undefined
document.firstElementChild.firstChild;
document.lastElementChild.lastElementChild;
document.firstElementChild.lastElementChild.firstElementChild;
var heading = document.firstElementChild.lastElementChild.firstElementChild;
undefined
var heading = document.firstElementChild.lastElementChild.firstElementChild;
undefined
hea
VM1201:1 Uncaught ReferenceError: hea is not defined
    at <anonymous>:1:1
heading;
heading.innerHTML="junaid";
'junaid'
heading.style.color="blue";
'blue'
document.querySelector.("input").click();
VM1478:1 Uncaught SyntaxError: Unexpected token '('
document.querySelector("input").clicl();
VM1579:1 Uncaught TypeError: document.querySelector(...).clicl is not a function
    at <anonymous>:1:33
document.querySelector("input")?.click()