/* Исписати Марио пирамиду одређене висине:
За n = 5

    #
   ## 
  ###
 ####   
#####  
*/
var n = 5;

    for (var i = 1; i <= n; i++) {
        var row = '';  

        for (var j = 1; j <= (n - i); j++) {
            row += ' ';
        } 

        for (var k = 1; k <= i; k++) {
            row += '#';
        }

        console.log(row);
    }


    

