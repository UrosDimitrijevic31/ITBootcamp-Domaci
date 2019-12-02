1. Зашто користимо JSON?
    JSON koristimo kada zelimo da prosledimo neki podatak (objekat, niz, string..) na server, ili kada zelimo da podatke koje smo dobili sa servera "raspakujemo" u JavaScript podatak. 

2. Зашто су модули корисни? +Пример
    Moduli su korisni, da bi se kod podelio na logicke celine, i da bi veoma lako mogao da se ponovo koristi, bez potrebe za ponovno pisanje koda. Primer je skoro svaka slozenija aplikacija.
    

3. Шта је ECMAScript?
    ECMASript je JavaSript standard.

4. Опишите како функционишу HTTP захтеви и шта је то REST API.
    Klijent upucuje HTTP zahtev serveru, i taj server odgovara resursom. Mora imati URL adresu i metodu.
    REST sam po sebi predstavlja arhitektonski stil, dok API predstavlja deo servera koji se bavi
    primanjem zahteva i slanjem odgovora. REST API predstavlja arhitektonski stil API-ja.

5. Која је разлика између == и === ?
    Razliak je sto operator === poredi sem po vrednosti i tip podatka.

6. Шта враћа console.log(typeof typeof true);
Објаснити зашто
zato sto metoda typeof typeof uvek vraca string, sta god da je umesto boolean