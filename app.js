
// functions.js'te tanimli fonksiyonlari kullanabilmek icin app.js'imize import ediyorz
const dortIslemFonksiyonlari = require("./functions");

// fonksiyonlar object olarak export edilmisti, burada kullnabilmemiz icin once object ismi sonra fonksiyonun ismi ile cagirip, parametreleri kendimiz girdiyoruz
console.log(`10 ve 2 sayilarinin;
Toplami: ${dortIslemFonksiyonlari.toplama(10, 2)},
Farki: ${dortIslemFonksiyonlari.cikarma(10, 2)},
Carpimi: ${dortIslemFonksiyonlari.carpma(10, 2)},
Bolumu: ${dortIslemFonksiyonlari.bolme(10, 2)}`
)