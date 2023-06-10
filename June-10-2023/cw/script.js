const myDiv = document.getElementById("myDiv");
const userAge = document.getElementById("userAge");
const simg = document.getElementById("simg");

myDiv.innerHTML = "<h1>Ho ho ho</h1>";


// alert("Aj Electricity jayni");
// document.write("ami ki je kori!")
// const age = prompt("What is you age?");
const age = 37;
if (age <= 12 && age > 0) {
    userAge.textContent = "You are a baby";
}else if(age <= 19 && age > 12){
    userAge.textContent = "You are a teenager";
}else if (age <= 29 && age > 19){
    userAge.textContent = "You are a young person";
}else if (age <= 49 && age > 29){
    userAge.textContent = "You are a middle aged person";
}else if (age > 49 && age < 150){
    userAge.textContent = "You are an old person";
}else{
    userAge.textContent = "You are not in this wrold";
}

const btnClck = () => {
    myDiv.innerHTML = "<h1>Dhaka ekhon faka!</h1>";
}

const myDivHover = () => {
    myDiv.innerHTML = "<h1>Ho ho ho</h1>";
}

const sover = () => {
    simg.src = "./images/ssmile.jpeg";
}

const sout = () => {
    simg.src = "./images/sobahan.jpg";
}