//2.Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. 
// Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. 
// Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. 
// Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. 
// Sukurti klasės objektą ir pademonstruoti veikimą. 
// Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

class Pinigine {
    constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;

    }
     

    ideti(kiekis) {
        kiekis <= 2 ? (this.popieriniaiPinigai += kiekis) : (this.metaliniaiPinigai += kiekis);
    }

    skaiciuoti() {
        this.popieriniaiPinigai < 0 || this.metaliniaiPinigai < 0 ? console.log("Neigiamo nominalo kupiūros neegzistuoja") :  console.log(`Popieriniai pinigai: ${this.popieriniaiPinigai}, metaliniai pinigai: ${this.metaliniaiPinigai}`)
    }
}

const pinigai1 = new Pinigine();
const pinigai2 = new Pinigine();

pinigai1.ideti(-1);
pinigai2.ideti(10);

pinigai1.skaiciuoti();
pinigai2.skaiciuoti();


