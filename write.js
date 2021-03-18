/*
- Bu sayfada library'i kullanmak icin bir degisken icinde require metodu ile tutuyoruz
- Butun islemleri tek bir fonksiyon icine atacagiz
- bu fonksiyonun parametreleri soyle olacak:
    + sayfa eklenecek dosyanin uzantisi ile birlikte tam adi;
    + yeni olusturacagimiz sayfanin adi,
    + yeni sayfaya atmak istedigimiz verilerin dosyasinin yeri
- boylelikle bu fonksiyonu kullanarak istedigimiz xlsx sayfasina istedigimiz veriler atabilecegiz ve ismini de o anda belirleyebilecegiz
- Fonksiyonumuz soyle calisacak:
    + Okutacagimiz ornek dosyayi da bir degiskene atiyoruz
    + Ekleyecegimiz datalari once json'dan sheet formatina cevirecegiz
    + sheet formatindaki yeni verilerimiz ornek xlsx dosyasina yeni bir sayfa olarak ilave edecegiz
NOT: OrnekDosya.xlsx'e su an hicbir sayfa eklenmedi. Program calistiginda odevdeki veriler yeni sayfaya eklenecek,
daha saonra istenirse fonksiyonun parametreleri degistirilerek yeni sayfalar da eklenebilir
*/

// Bu sayfada library'i kullanmak icin "XLSX" degiskeninde require ile tutuyoruz
const XLSX = require('xlsx');


function sayfaEkleme(pWorkbook, pData, pIsim){
    // Ornek xlsx dosyasina ekleyecegimiz datalari da require metodu ile aliyoruz ve "data" degiskenine atiyoruz
    const data = require(pData);
    // OrnekDosya.xlsx dosyamizi da bu library'nin readFile metodu ile okuyarak workBook degiskeninde tutuyoruz
    const workBook = XLSX.readFile(pWorkbook);
    // json formatindaki datalarimizi library'deki "json_to_sheet()" metodu ile sheet formatina cevirip bir degiskende tutuyoruz
    const newSheet = XLSX.utils.json_to_sheet(data);
    // yine library'deki "book_append_sheet()" metodul ile hangi dosyaya, hangi sayfayi ve bu sayfanin adini parametre olarak girerek sayfayi ekliyoruz
    XLSX.utils.book_append_sheet(workBook, newSheet, pIsim);
    //  elimizdeki yeni dosyayi eski dosyamizin uzerine yazdiriyoruz.
    XLSX.writeFile(workBook, pWorkbook);
}

// Fonksiyonumuzu hangi dosyaya, hangi verileri, hangi isimdeki sayfa olarak eklemek istedigimizi girerek cagiriyoruz.
sayfaEkleme("OrnekDosya.xlsx", "./data", "Yenisayfa");

