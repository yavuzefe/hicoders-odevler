// 1)
let isim = "asik veysel";

// stringimizi kelimlere bolerek kucukKelimeler isimli bir array'de tutariz.
let kucukKelimeler = isim.split(" ");
// ilk harleri buyuttukten sonra bu kelimeleri tutacagimiz buyukKelimler isimli arrayi tanimlariz
let buyukKelimeler = []
for (let i = 0; i < kucukKelimeler.length; i++){
    // kelimleri tek tek ayirdigimiz kucukKelimeler'in icindeki her kelimeyi sirayla dongu icine alip ilk harlerini buyuturuz. 
    let ilkHarleriBuyuk = kucukKelimeler[i][0].toUpperCase() + kucukKelimeler[i].slice(1);
    // buyuk kelimleri de yeni arrayimize, yani buyukKelimler'e push() metoduyla ekleriz.
    buyukKelimeler.push(ilkHarleriBuyuk);
}
// Ilk harfi buyuk kelimlerden olusan arrayimiz join() metodu ile arada bir bosluk birakarak tekrar isim degiskenimize string olarak atariz
isim = buyukKelimeler.join(" ");
console.log(isim);



// 2)
// once tum sayilari tutacagimiz sayilar dizinini ve her satirdaki sayilari tutacagimiz satirdakiSayilar niniz bos olarak tanimlariz
let sayilar = [];
let satirdakiSayilar = []

for (let i = 0; i < 100; i++) {
    sayilar.push(i); // sayilar dizinini 1-100 arasi sayilarla doldururuz.
}

// her satirdaki sayilari tutacagimiz satirdakiSayilar dizinine sayilar dizinindeki sayilari 10'arli sekilde yazdirmak icin slice() metodunu
//kullaniriz. Hangi sayilari slice() edecegimizi de bir dongu icinde otomatik yazdiririz.
// dongu her seferinde 1 artarken bizim kesecegimiz ilk indez degerimiz onun 10 kati olacak, 
//nereye kadar kesilecegini gosterecegimiz 2. indez degeri de bundan 10 fazla olacak. (10,20), (20,30), (30,40)...

for (let j = 0; j < 10; j++) {
    satirdakiSayilar = sayilar.slice((j * 10),((j*10) + 10 )); 
    console.log(satirdakiSayilar.join(",")); // sayilari arada , olacak sekilde yazdirmak icin de join() metodunu , isareti ile kullaniriz.
}




// 3) Asal sayilari yazdirma
// Asal sayilar 2'den baslayacagi icin 2'den 100'e kadar sayilarin herbirini kontrol edecegimiz icin 100'e kadar bir dongu kurariz
for (let sayimiz = 2; sayimiz <= 100; sayimiz++) {
    let bolenSayilar = 0; // asal sayilarin 1 ve kendinden baska boleni olmadigi icin bolenSayilar diye degisken tanimlariz.
// Eger dongude kontrol ettigimiz sayiyi herhangi bir sayi bolerse bu degiskenimiz artacak ve dongu sonlanacak, programin performansi ve hizi da artmis olacak.
// simdi 100'e kadar her sayiyi kendinden kucuk sayilara bolmeye calisacagiz. Bunun icin de sayinin kendisine kadar olan her sayiyi tek tek bolmek icin 
// yeni bir dongu kurariz. Eger her hangi bir sayiya tam olarak bolunurse bolenSayilar degiskeni 1 artacak 
// ve sayimizin asal sayi olmadigi anlasildigi icin break; ile donguyu sonlandiracagiz
    for (let bolen = 2; bolen < sayimiz; bolen++) {
        if (sayimiz % bolen == 0){
            bolenSayilar++;
            break;
        }
    } 
// eger denedigimiz sayilar, kendisine kadar olan hic bir sayiya bolunmediyse, bolenSayilar degiskeninin degeri degismemis olacaktir.
// biz de bu bolenSayilar degiskenini kontrol ederiz, eger halen degeri ilk tanimladigimiz gibi 0 ise bu sayi asal sayidir, console'a yazdiririz. 
    if (bolenSayilar == 0){
        console.log(sayimiz);
    }
}


// 4) 50 adet sifre olusturma
// 50 adet sifre olusturacagimiz icin 50'ye kadar bir dongu kurariz
for (let i = 0; i < 50; i++) {
    let sifre = []; // rastgele olusturacagimiz her karakteri icine atacagimiz sifre array'imizi tanimlariz.
// olusturacagimiz sifre 8-16 karakter arasinda istendigi icin once Math.random() ile rastgele sayi uretip 
// bu sayiyi 8 ile carpip 1-8 arasi bir sayiya donustururuz. Sonra da 8 ile toplayip degerimizi 8-16 arasi sabitlemis oluruz
    let sifreUzunlugu = Math.floor(Math.random() * 8) + 8; // her uretecegimiz karakter icin dongu kurariz, bu dongu 8-16 arasinda sifreUzunlugu ne kadarsa o adet deger uretir
    for (let i = 0; i <= sifreUzunlugu; i++) {
// sifremizdeki tum karakterleri ASCII koduna gore uretecegiz. Bunun icin de ASCII degerleri arasinda bizden istenen
// harfler, rakamlar ve karakterlerin bulundugu 33-126 sayilarinin arasindaki ASCII karakterlerine ulasmamiz gerekiyor.
// en dusuk degerimiz 33'ten baslamasi gerektigi icin +33 ilave ediyoruz. 
// En fazla 126. degere gitmek istedigimiz icin de random uretilen sayimizi 93 ile capriyoruz ki sayimizin degeri en fazla 126 olsun.
        let karakterKodu = Math.floor(Math.random() * 93) + 33; // ASCII sayisi olarak kullancagimiz sayiyi urettikten sonra String.fromCharCode() metodu ile sayimizi karaktere ceviriyoruz.
        let karakter = String.fromCharCode(karakterKodu);
        sifre.push(karakter); // urettigimiz karakteri push() metodu sifre dizimize ekliyoruz.
    }
    console.log(sifre.join("")); // sifre dizimizi string seklinde yazdirmak icin de join() metodunu kullaniyoruz.
}


// 5) yildizlardan ucgen yapma

for (let i = 0; i <= 6; i++) {
// 1'den 6'ya kadar her satirda o satirin sayisi adedince yildiz olacagindan, string metodlarindan repeat() metodu ile * karakterini satirin sayisi adedince yazdirabiliriz
    console.log("*".repeat(i));
    
}
