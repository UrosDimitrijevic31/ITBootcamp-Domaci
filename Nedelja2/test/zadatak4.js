let mesec = 6;
let pres = true;

let brojDana;
    switch (mesec) {
        case 1: brojDana = 31; //Januar je 1 mesec, nisam stavljao da krece od 0
        break;
        case 2: if(pres == true ) {
                    brojDana = 29;
                }
                else brojDana = 28;
        break;
        case 3: brojDana = 31;
        break;
        case 4: brojDana = 30;
        break;
        case 5: brojDana = 31;
        break;
        case 6: brojDana = 30;
        break;
        case 7: brojDana = 31;
        break;
        case 8: brojDana = 31;
        break;
        case 9: brojDana = 30;
        break;
        case 10: brojDana = 31;
        break;
        case 11: brojDana =30;
        break;
        case 12: brojDana =31;
        break      
        default: 
            console.error(`Unknown day ${mesec}`);
            monthString = "Error";
            break;       
    }
    console.log(`mesec ${mesec} ima ${brojDana}`)

    //20