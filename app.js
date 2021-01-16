// 3 BOLMELI PILIN HER BOLMESINI BIRER DEGISKENE ATAYIP EN SONDA DA HEPSINI ARRAY YAPARIZ
const birinciKat = document.querySelector("#enAlt");
const ikinciKat = document.querySelector("#ortasi");
const ucuncuKat = document.querySelector("#enUst");
const pilKademeler = [birinciKat, ikinciKat, ucuncuKat];

// HER SARJDA DESICEK RENKLERI TANIMLARIZ
const BOS_SARJ_RENGI = "white";
const DUSUK_SARJ_RENGI = "red";
const ORTA_SARJ_RENGI = "yellow";
const FULL_SARJ_RENGI = "green";

// ONCE HERHANGI BIR BOLMENIN RENGINI DEGISTIRECEK FONKSIYON TANIMLARIZ
const bgroundDegistir = (pId, pRenk) => pId.style.backgroundColor = `${pRenk}`;

/* SONRA DA BU FONKSIYONU HANGI BOLMELERE UYGULANACAGINI BELIRLEYECEK BIR FONK TANIMLARIZ
ONCE TUM BOLMELERIN RENGINI HER SEFERINDE BEYAZ YAPIP SONRA DA KACINCI BOLMEYE KADAR BOYANACAKSA O SIRAYA KADAR ARRAY'I 
SLICE() METODUYLA KESERIZ */
function boyama(arr, renk) {
    yuzde0();
    arr.slice(0, sayac).map(element => bgroundDegistir(element, renk));
}

// SIMDI NE ZAMAN HANGI BOLMENIN HANGI RENGI ALACAGINI BELIRLEMEK ICIN DUSUK, ORTA YUKSEK SEVIYELERDE NE RENKLER BOYANACAGINI BELIRLEYE FONK TANIMLARIZ
const yuzde0 = () => pilKademeler.map(element => bgroundDegistir(element, BOS_SARJ_RENGI));
const yuzde33 = () => boyama(pilKademeler, DUSUK_SARJ_RENGI);
const yuzde66 = () => boyama(pilKademeler, ORTA_SARJ_RENGI);
const yuzde100 = () => boyama(pilKademeler, FULL_SARJ_RENGI);

// DUGMELERE BASINCA DEGISEK SAYACA GORE HANGI BOLMELERIN NASIL BOYANACAGINI BELIRLEYEN FONK.LARI IF ELSE IF ILE ILISKILENDIRIRIZ
function sayacIrtibati() {
    if (sayac < 0) {
        sayac = 0;
    } else if (sayac == 0) {
        yuzde0();
    } else if (sayac == 1) {
        yuzde33();
    } else if (sayac == 2) {
        yuzde66();
    } else if (sayac == 3) {
        yuzde100();
    } else if (sayac > 3) {
        sayac = 3;
        yuzde100();
    }
}

let sayac = 0;

// DOLDUR DUGMESINE BASINCA CALISACAK FONK ONCE SAYACI BIR ARTTIRIR SONRADA BU SAYACA GORE CALISAN IRTIBAT FONK.U CAGIRIR
const doldur = () => {
    sayac++;
    sayacIrtibati();
    console.log(sayac);
}

// DOLDUR DUGMESININ YAPTIGININ TAM TERSINI YAPAR VE IRTIBAT FONKSIYONUNU CAGIRIR
const bosalt = () => {
    sayac--;
    sayacIrtibati();
    console.log(sayac);
}
