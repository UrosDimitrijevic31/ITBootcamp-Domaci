/*Исписати Марио пирамиду одређене висине:
За n = 5

#
##
###
####
#####
*/

// prvo resenje, meni je ovo najprostije :D
var n = 5;
var c = '';
    for (let i = 0; i < n; i++) {
        c+='#';
        console.log(c);       
    }

// drugo resenje, sa 2 petlje
    console.log(`-----------------2. nacin-------------------`)
    for (var i = 1; i <= n; i++) {
        var row = '';
        for (var j = 1; j <= i; j++) {
          row += '#';
        } 
        console.log(row);
    }