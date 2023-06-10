
function leapYear (year){

if(year % 400 == 0){
    console.log(year + " is a Leap Year");
}else if (year % 100 == 0){
    console.log(year + " is not a Leap Year");
}else if(year % 4 == 0){
    console.log(year + " is a Leap Year");
}else{
    console.log(year + " is not a Leap Year");
}

}
leapYear(2000);
leapYear(1900);
leapYear(1961);
leapYear(2023);
leapYear(2024);