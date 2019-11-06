/* Написати функцију која израчунава цену пице по квадратном центиметру (уносе се цена и полупречник) */

function price(price, r){
    let surface = Math.pow(r, 2)* Math.PI;
    let priceCm2 = price / surface;
    console.log(`pizza price per cm²: ${priceCm2} [rsd]`);
}

price(750,18);
