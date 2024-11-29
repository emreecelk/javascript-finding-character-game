
let metin = prompt("Lütfen bir metin girin:");
let karakter = prompt("Hangi karakteri saymak istersiniz?");

let sayac = 0;

for (let i = 0; i < metin.length; i++) {
  if (metin[i] === karakter) {
    sayac++;
  }
}

alert("Metinde '" + karakter + "' karakteri " + sayac + " kez geçiyor.");
