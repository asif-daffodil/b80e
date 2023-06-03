function fullName (fname = "Hero", lname = "Alom") {
    return fname+" "+lname;
} 

console.log(fullName("Posidur", "Rahman"));
console.log(fullName("Sakib", "Kazi"));
console.log(fullName());
console.log(fullName("Sakib"));

function c2f (c) {
    return (c * 9/5) + 32
}

console.log(c2f(40));