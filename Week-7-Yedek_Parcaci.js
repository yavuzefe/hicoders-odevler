let yedekParcalar = ['Suspansiyon', 'FrenXC123', '4Tekerlek'];

// 1-) Parca isimleri büyük harflere cevrilecektir.
/* map() fonksiyonu ile yedekParcalar array'indeki her elemanin karakterlerini toUpperCase() metoduyla buyuk harf yapip 
ortaya cikan yeni array'imizi de buyukHarfliler degiskenine atariz*/
const buyukHarfeCevir = (arr) => arr.map(element => element.toUpperCase());
const buyukHarfliler = buyukHarfeCevir(yedekParcalar);
console.log(buyukHarfliler);

// 2-) Parca isimlerinden sayilar cikartilacaktir.
/* map() fonksiyonu ile buyukHarfliler array'indeki her elemanin rakamlarini replace(/[0-9]/g, '') metoduyla atip 
ortaya cikan yeni array'imizi de sadeceHarfler degiskenine atariz*/
const rakamlariCikar = (arr) => arr.map(element => element.replace(/[0-9]/g, ''));
const sadeceHarfler = rakamlariCikar(buyukHarfliler);
console.log(sadeceHarfler);

// 3-) Parca isimleri tersine cevrilecektir.
/* map() fonksiyonu ile sadeceHarfler array'indeki her elemani once split() metoduyla harflere ayirip reverse() metoduyla dizilisini 
tersine cevirip yine join('') metoduyla birlestirip ortaya cikan yeni array'imizi de tersYazilislar degiskenine atariz*/
const isimleriTerseCevir = (arr) => arr.map(element => element.split('').reverse().join(''));
const tersYazilislar = isimleriTerseCevir(sadeceHarfler);
console.log(tersYazilislar);

// 4-) Her parcanin basina KEREMAG_ eklenecektir.
/* map() fonksiyonu ile tersYazilislar array'indeki her elemanin basina KEREMAG_ string degerini ekleriz, 
ortaya cikan yeni array'imizi de kelimeEklenmis degiskenine atariz*/
const basinaKelimeEkleme = (arr) => arr.map(element => `KEREMAG_${element}`);
const kelimeEklenmis = basinaKelimeEkleme(tersYazilislar);
console.log(kelimeEklenmis);

// 5-) Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. 
/* Date() objesinin toUTCString() metoduyla aldigimiz guncel tarih ve saat bilgisini guncelTarih deiskenine atariz,
map() fonksiyonu ile kelimeEklenmis array'indeki her elemanin sonuna guncelTarih degiskenini ekleriz, 
ortaya cikan yeni array'imizi de tarihEklenmis degiskenine atariz*/
const guncelTarih = new Date().toUTCString();
const sonunaTarihEkleme = (arr) => arr.map(element => `${element}: ${guncelTarih}`);
const tarihEklenmis = sonunaTarihEkleme(kelimeEklenmis);
console.log(tarihEklenmis);