// ciftlikteki hayvanlari array icerisinde tutariz
const hayvanlar = ["inek", "tavuk", "domuz", "inek", "koyun", "domuz", "tavuk", "koyun", "inek", "tavuk", "koyun"];
// hayvanlarin bacakari icin degisken tanimlayip ilk degeri 0 atariz.
bacakSayisi = 0;
for (let i = 0; i < hayvanlar.length; i++) { // arraydeki hayvanlari dongu ile sirayla tek tek cagiririz
// dizindeki siradaki hayva kelle paca icin uygun hayvanlardan mi? yani inek veya koyun mu?
    if (hayvanlar[i] == "inek" || hayvanlar[i] == "koyun") {
        bacakSayisi += 4; // eger siradaki hayvan kelle paca icin uygunsa kelle paca sayisini bacaksayisi kadar yani 4 arttiririz.
    }
    else if (hayvanlar[i] == "tavuk") {
        bacakSayisi += 2; // eger siradaki hayvan kelle paca icin uygunsa kelle paca sayisini bacaksayisi kadar yani 4 arttiririz.
    }
}

console.log(bacakSayisi);