/*У JavaScript-у направити променљиву која има вредност "Welcome to DOM"
Додати id на наслов (У самом html)
Користећи JavaScript изменити наслов у претходно креирану променљиву
Направити нови div на страници (У самом html)
Помоћу JavaScript-a убацити innerHTML за њега (Параграф са произвољним текстом)*/ 

var wtd = 'Welcome to DOM';
document.getElementById('title').innerHTML = wtd;

document.getElementById('dodatDiv').innerHTML = `<h2>TESLA S P90D model</h2><p>Tesla Motors potrudio se da poboljša več odličan i brz model SP85D,
pa je tako predstavio S P90D model. Taman kada smo pomislili da je Tesla ponudio najbolji model koji je izašao iz ove
fabrike, novi Teslin model potpuno nas je izbezumio. Dakle, novi S P90D model pojačana je verzija prethodnog modela.
On je jači 10 posto od svog prethodnika, što ga čini neverovatno brzim električnim automobilom. Brzinu od 0-100m km/h 
ovaj automobil postiže za 2.8 sekundi, što ga čini pravim protivnilom legendarnih super automobila kao što su Ferari, 
Bugati i Lamborgini.
Nova verzija sadrži i jaču bateriju snage 90kwh i jače motore koji  proizvode neverovatne 762 konjske snage. 
Pored svojih neverovatnih performanski, Teslin S P90D model pleni i svojim luksuznim dizajnom. Moramo priznati da nas 
podseća na liniju Maseratija i Astona Martina, ali u pozitivnom smislu. Automobil je limuzina, pa sadrži 5-oro vrata,
pa se pored brže vožnje možete prepustiti i luksuzu. Enterijer je takođe impresivan. Crna koža i sivi detalji
dominiraju automobilom, a najveći utisak ostavlja ogromni displej koji podseća na džinovski tablet.
Ovaj automobil košta oko 118.000 dolara što je takođe karakteristika koja ga svrstava u kategoriju super 
automobila.</p>`;