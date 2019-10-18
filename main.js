let waarden = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let kleuren = [1, 2, 3, 4];

function Kaart() {
  this.kaartKleur = 0;
  this.kaartWaarde = 0;
  this.setKaart = function(kleur, waarde) {
    this.kaartKleur = kleur;
    this.kaartWaarde = waarde;
  };
  this.getKleur = function(getKaartKleur) {
    switch (parseInt(this.kaartKleur)) {
      case 1:
        return "Harten";
        break;
      case 2:
        return "Schoppen";
        break;
      case 3:
        return "Klaveren";
        break;
      case 4:
        return "Ruiten";
        break;
    }
  };
  this.getWaarde = function(getKaartWaarde) {
    switch (parseInt(this.kaartWaarde)) {
      case 1:
        return "Aas";
        break;
      case 11:
        return "Boer";
        break;
      case 12:
        return "Dame";
        break;
      case 13:
        return "Heer";
        break;
      default:
        return this.kaartWaarde;
        break;
    }
  };
  this.toString = function() {
    return (
      this.getKleur(this.kaartKleur) + " " + this.getWaarde(this.kaartWaarde)
    );
  };
  this.setRandom = function() {
    this.kaartKleur = kleuren[Math.floor(Math.random() * kleuren.length)];
    this.kaartWaarde = waarden[Math.floor(Math.random() * waarden.length)];
  };
}

var deKaart = new Kaart();

function maakKaart() {
  deKaart.setKaart(
    document.getElementById("kleur").value,
    document.getElementById("waarde").value
  );
  document.getElementById("result").innerHTML = deKaart.toString();
}

function randomKaart() {
  deKaart.setRandom();
  document.getElementById("result").innerHTML = deKaart.toString();
}
