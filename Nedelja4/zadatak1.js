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
        sastojci: ['3 veća jajeta', '250 ml mleka', '125 gr brašna', 'prstohvat soli']  
    },
    {
        ime: 'Sladoled',
        tezina: 'pocetni',
        sastojci: ['500 ml slatke pavlake', '400 gr kondenzovanog mleka','250 gr tečnog eurokrema','100 gr neslanog kikirikija']
    },
    {
        ime: 'Krempita',
        tezina: 'tezak',
        sastojci: ['2 jajeta', '2 kašike vrele vode', '100 gr šećera', '100 gr brašna', '25 gr gustina',
        '1 kašičica praška za pecivo', '50 gr margarina', '7 jaja', '7 dl mleka', '1 litar vode', '1 puding od vanile',
        '50 gr gustina', '3 pune kašike brašna', '15 kašike šećera', '3-4 vanilin šećera'] 
    },
    {
        ime: 'Merlin snite',
        tezina: 'srednji',
        sastojci: ['6 jaja','150 g šećera','30 g brašna','30 g kakaoa','1 kesica praška za pecivo','kašike gustina',
        '1 kašika ulja'] 
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
    console.log('ispis samo onih recepata koji su po tezini u kategoriji: "lak" ili "pocetni"')
    objekat.forEach(element => {
        if(element.tezina === 'lak' || element.tezina === 'pocetni') {
            //ako bih ovde pozvao funkciju ispisRecepta() kad god bi prosao if ispislai bi se svi elementi
            //predpostavljam da bi to moglo da se resi tako sto bi se modifikovala sama metoda ispisRecepta(),
            //da primi jos jedan parametar <Tezina> pa na osnovu njega da ispisuje
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
sastojak1 = {
    ...
}

sastojak2 = {
    ...
}*/

let sastojak1 = {
    ime: 'jaja',
    kolicina: 25,
    cena: 14
}
let sastojak2 = {
    ime: 'secer',
    kolicina: 3, //misli se na kg
    cena: 86     //cena po kg
}
let sastojak3 = {
    ime: 'brasno',
    kolicina: 2, //misli se na kg
    cena: 76     //cena po kg
}
let sastojak4 = {
    ime: 'mleko',
    kolicina: 4, // misli se na litre
    cena: 126    //cena po litru
}
let sastojak5 = {
    ime: 'ulje',
    kolicina: 1, //misli se na litre
    cena: 115    //cena po litru
}


