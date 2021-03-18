/*
- Projemizde "xlsx" library'sini kullaniyoruz. Once bu library'yi npm ile indiriyoruz
- Bu sayfada library'i kullanmak icin bir degisken icinde require metodu ile tutuyoruz
- Okutacagimiz ornek dosyayi da bir degiskene atiyoruz
- Sirayla ornek dosyada her sayfadaki bilgileri JSON formatina cevirip okutacagiz
*/

// Bu sayfada library'i kullanmak icin "XLSX" degiskeninde require ile tutuyoruz
const XLSX = require('xlsx');
// OrnekDosya.xlsx dosyamizi da bu library'nin readFile metodu ile okuyarak workBook degiskeninde tutuyoruz
const workBook = XLSX.readFile('OrnekDosya.xlsx');

// ornekDosya.xlsx icinde birden cok sayfa olabilecegi icin bu sayfalari tutacagimiz workSheets objesini once bos olarak yanimliyoruz
let workSheets = {};

// sonra dosyanin icindeki her sayfayi for dongusu ile sirayla once json formatina cevirip sonra console.log() ile yazdiracagiz
for(const sheetName of workBook.SheetNames){
    workSheets[sheetName] = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
    console.log(sheetName, workSheets[sheetName]);
}

