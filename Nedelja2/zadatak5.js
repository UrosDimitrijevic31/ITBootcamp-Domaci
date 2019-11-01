/*Сачувати у променљиве цену и пречник пице
Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
Исписати тај резултат у конзолу */

var price = 750;
var R = 36; //u cm
var r = R/2;
var surface = Math.pow(r, 2)* Math.PI;
var priceCm2 = price / surface;

console.log(`pizza price per cm²: ${priceCm2} [rsd]`);