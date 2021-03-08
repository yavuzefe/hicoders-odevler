/*
- 4 islemin her biri icin bir fonksiyon tanimlanip bir degiskene atayacagiz.
- her fonksiyon export edilecek */

// toplama fonksiyonunda girilen degerler string olarak tanimlanabilecegi icin girilen degerler parseInt metoduyla nsayiya cevrilir
const toplamaFonksiyonu = (a, b) => parseInt(a) + parseInt(b);
const cikarmaFonksiyonu = (a, b) => a - b;
const carpmaFonksiyonu = (a, b) => a * b;
const bolmeFonksiyonu = (a, b) => a / b;

// tanimladigimiz fonksiyonlari app.js'te kullanabilmemeiz icin export ediyoruz. Birden fazla fonksiyonu export edecegimiz icin object olarak eport ediyoruz
module.exports = {
    toplama: toplamaFonksiyonu,
    cikarma: cikarmaFonksiyonu,
    carpma: carpmaFonksiyonu,
    bolme: bolmeFonksiyonu
}