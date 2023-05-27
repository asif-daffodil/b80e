/**
 * starting point
 * ending point
 * gap
 */

// while loop

var sp = 2;
var ep = 20;
while (sp <= ep) {
    console.log(sp);
    sp += 2
    // sp = sp + 1;
    // sp += 1
    // sp++
}


// 1 - 20 even clg
// n % 3 == 0 && n % 5 == 0
var n  = 0;
while (n <= 100) {
    if(n % 3 == 0 && n % 5 == 0){
        console.log(n);
    }
    n++;
}

// for loop

var g = 2;
for (var i = 1; i <= 10; i++) {
    console.log(g + " x " + i + " = " + g*i);
}

var fname = "Asif";
var lname = "Abir";
console.log(fname + " " + lname);

var names = ["The Rock", "Mr Been", "Salman Khan"];
console.log(names[2]);

function bd () {
    return "This is a text";
}

console.log(bd());