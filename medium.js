//1 
let celsia = 16;
let kelvin = celsia + 273.15;
let fahrenheit = (celsia + 9/5) + 32;
console.log("Цельcия:" + celsia);
console.log("Температура в градусах Фаренгейта:" + fahrenheit);
console.log("Температура в градусах Кельвина:" + kelvin);

//2
let deposite = 777;
let rate = 0.05;
let depositeAfterOneYear = deposite * (1 + rate);
let depositeAfterTwoYear = depositeAfterOneYear * (1 + rate);
let depositeAfterThreeYear = depositeAfterTwoYear * (1 + rate);
console.log("Сумма вклада через год:" + depositeAfterOneYear);
console.log("Сумма вклада через 2 год:" + depositeAfterTwoYear);
console.log("Сумма вклада через 3 год:" + depositeAfterThreeYear);