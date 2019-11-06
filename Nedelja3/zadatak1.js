/* Написати функцију која враћа максимум од 3 броја (уносе се 3 броја) */

function maxThreeNum(num1, num2, num3){
    if((num1 > num2) && (num1 > num3)) return num1;
    else if(num2 > num3) return num2;
    else return num3;
}

console.log(`Najveci broj je ${maxThreeNum(402, -2520, 401)}`);