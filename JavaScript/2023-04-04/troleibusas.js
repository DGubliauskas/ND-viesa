// 3.	Sukurti klasę Troleibusas. 
// Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. 
// Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). 
// O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. 
// Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.



class Troleibusas {
    constructor() {
    this.keleiviuSkaicius = 0;

    }
     

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius
    }

    islipa(keleiviuSkaicius) {
        this.keleiviuSkaicius -= keleiviuSkaicius
    }

    vaziuoja() {
        this.keleiviuSkaicius < 0 ? console.log("Neigiamas žmonių kiekis negali važiuoti") :  console.log(`Šiuo metu keliauja: ${this.keleiviuSkaicius} žmonių(-gus)`)
    }
}

const keleiviai1 = new Troleibusas();
const keleiviai2 = new Troleibusas();

keleiviai1.ilipa(100);
keleiviai1.islipa(20);

keleiviai2.ilipa(10);
keleiviai2.islipa(11);

keleiviai1.vaziuoja();
keleiviai2.vaziuoja();