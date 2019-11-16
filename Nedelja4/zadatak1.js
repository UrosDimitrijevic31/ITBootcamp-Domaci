/*1. Zadatak
Направити објекат рецепт који садржи следеће информације: (Направите макар 4 различита рецепта)

Име рецепта
Тежина рецепта (Почетни,Лак,Средњи,Тежак,Мајстор)
Састојци (низ састојака потребних за рецепт)
Даље, направити програм који исписује све ове вредности у следећем облику: (најбоље направити функцију која ради ово,због следећег задатка)

Шпагете у белом сосу:
Тежина: Средњи
Састојци: Шпагете,Павлака за кување,Бели лук,Ћуреће месо,Маслац,Јаја,Бибер,Со */

let recept = [
    {
        ime: 'Palacinke',
        tezina: 'lak',
        sastojci: ['3 jajeta', '250 ml mleka', '125 gr brašna']  
    },
    {
        ime: 'Coko mus',
        tezina: 'pocetni',
        sastojci: ['2 zrela avokada','100 gr meda','40 gr kakao praha','60 ml kokosovog mleka']
    },
    {
        ime: 'Slatki zalogaji',
        tezina: 'tezak',
        sastojci: ['120 gr putera od kikirikija','30 krekera','200 gr čokolade'] 
    },
    {
        ime: 'Merlin snite',
        tezina: 'srednji',
        sastojci: ['6 jaja','150 g šećera','30 g brašna','30 g kakaoa','1 kesica praška za pecivo'] 
    }
]

function ispisRecepta(objekat){
    objekat.forEach(element => {
        console.log(` ${element.ime}:\n tezina: ${element.tezina}\n sastojci: ${element.sastojci}\n`);
    })
}
ispisRecepta(recept);

/*2. zadatak
Направити функцију која прима низ горе направљених објеката и исписује оне рецепте који су 
Почетни или Лаки (не исписује остале)*/

function tezina(objekat){
    console.log('ispis samo onih recepata koji su po tezini u kategoriji: "lak" ili "pocetni"\n')
    objekat.forEach(element => {
        if(element.tezina === 'lak' || element.tezina === 'pocetni') {
            console.log(` <${element.ime}>\n tezina: <${element.tezina}>\n sastojci: [${element.sastojci}]\n`);
        }
    })
} 

tezina(recept);

/* 3. zadatak
Направити објекат састојак који садржи следеће информације: (Направити макар 5)

Име састојка
Количина
Цена
*/

class sastojak {
    constructor(ime,kolicina,cena) {
        this.ime = ime;
        this.kolicina = kolicina;
        this.cena = cena;
    }
}
//palacinke
let jaja1 = new sastojak('jaja',3, 14);
let mleko1 = new sastojak('mleka', 250, 0.1);
let brasno1 = new sastojak('brasna', 125, 0.085);

//coko mus
let avokado2 = new sastojak('avokada', 2, 130);
let med2 = new sastojak('meda', 100, 0.8);
let kakao2 = new sastojak('kakao-a', 40, 0.139);
let mleko2 = new sastojak('mleka', 60, 0.1);

//slatki zlaogaji
let puter3 = new sastojak('putera od kikirikija', 120, 1.36);
let kreker3 = new sastojak('krekera', 30, 3);
let cokolada3 = new sastojak('cokolade', 200, 1);

//merlin snite
let jaja4 = new sastojak('jaja',6, 14);
let secer4 = new sastojak('secera', 150, 0.7)
let brasno4 = new sastojak('brasna', 30, 0.085);
let kakao4 = new sastojak('kakao-a', 30, 0.139);
let prasakZaPecivo4 = new sastojak('praska za pecivo', 1, 10);

//4. Направити објекат из првог задатка, али уместо низа String-ова, направити низ објеката из трећег задатка

let recept2 = [
    {
        ime: 'Palacinke',
        tezina: 'lak',
        sastojci: [jaja1, mleko1,brasno1]  
    },
    {
        ime: 'Coko mus',
        tezina: 'pocetni',
        sastojci: [avokado2,med2,kakao2,mleko2]
    },
    {
        ime: 'Slatki zalogaji',
        tezina: 'tezak',
        sastojci: [puter3,kreker3,cokolada3] 
    },
    {
        ime: 'Merlin snite',
        tezina: 'srednji',
        sastojci: [jaja4,secer4,brasno4,kakao4,prasakZaPecivo4] 
    }
]

/*5.zadatak
Направити функцију која рачуна укупну цену рецепта (функција је везана за објекат (this))
(За сваки састојак из рецепта одредити цену,па сабрати то (цена у самом објекту је написана за Количину 1,
па укупну цену за један састојак рачунамо са количина*цена))*/
//**********************************************************************/

//Moglo je i da se napravi svaki pojedinacno recept - da bude objekat, pa da se prosledi samo ime recepta
//i onda se izracuna njegova cena,(lakse je), al ja sam hteo da napravim kao katalog svih recepata, nadam se
//da je to ok i vise sam hteo da proverim kako radi forEach u forEachu :D :D

function cenaRecepta(objekat){
    objekat.forEach(element => {
        console.log(`---------------------${element.ime}----------------------\n`);
        let sum2 = 0;
        element.sastojci.forEach(element1 =>{
            let sum = 0;
            sum += element1.kolicina * element1.cena;
            console.log(`-cena ${element1.ime} je ${sum.toFixed(2)} din`);
            sum2 +=sum;
        })
        console.log(`\nUKUPNO: ${sum2.toFixed(2)} DIN\n`);
    })
}
cenaRecepta(recept2);
