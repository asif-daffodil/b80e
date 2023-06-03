var myArr = ["Asif Abir", "Male", "Dhaka", "Web Development"];
// console.log(myArr[0]);

var myStudents = [
    ["Sakib", "Male", 20, "Khulna"],
    ["Sobahan", "Male", 22, "Lakkhipur"],
    ["Poshidur", "Male", 38, "Dinajpur"],
    ["Asif", "Male", 30, "Jashore"],
    ["Kabir", "Male", 28, "Dhaka"],
];
// console.log(myStudents[1][3]);


for (var i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

var ages = [15,20,5,6,19];

var result = 0;
for (var i = 0; i < ages.length; i++) {
    result += ages[i];
}
// console.log(result);

var maxNum = ages[0];
for (var i = 0; i < ages.length; i++) {
    if(ages[i] < maxNum){
        maxNum = ages[i];
    }
}
console.log(maxNum);

for (var i = 0; i < myStudents.length; i++) {
    for (var j = 0; j < myStudents[i].length; j++) {
        console.log(myStudents[i][j]);
    }
}


