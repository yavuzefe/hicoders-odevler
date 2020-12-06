const sayilar = [3, 34, 9 ,5 ,12, 15, 8, 27, 45, 81];
console.log("dizideki sayilarimiz =" + sayilar);
function complex(){

    for(let i=0; i<sayilar.length; i++){
        let karekok = Math.sqrt(sayilar[i]);
        console.log("dizindeki " + sayilar[i] + " sayisinin karekoku = " + karekok);
    }

    for(let i=0; i<sayilar.length; i++){
        let karesi = sayilar[i]**2;
        console.log("dizindeki " + sayilar[i] + " sayisinin karesi = " + karesi);
    }

    let toplam = 0;
    for (let i = 0; i < sayilar.length; i++) {
        toplam += sayilar[i];
    }

    console.log("dizindeki tum sayilarin toplami = " + toplam);
    console.log("dizindeki sayilarin ortalamasi = " + toplam/sayilar.length);
    const siraliSayilar = sayilar.sort((a,b) => a-b);
    console.log("Dizideki en kucuk sayi= " + siraliSayilar[0]);
    console.log("Dizideki en buyuk sayi= " + siraliSayilar[siraliSayilar.length-1]);
}

complex();