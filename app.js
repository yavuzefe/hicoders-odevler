/* 
-Node.js icindeki http server kullanarak bir server olusturuyoruz.
- localhost'ta 9001 numarali portta bu serveri calistiriyoruz.
- /oku sayfasinda OrnekDosya.txt isimli dosyadaki metni ekrana yazdiriyouz.
*/

// server olusturmak icin greekli kutuphane
import http from 'http';
// dosya okumak icin gerekli kütüphane
import fs from 'fs';
const callback = function(req, res){
    // request tipi, hangi ip adresinden geldi ve route
    console.log(new Date().toString(), req.method, req.headers.host, req.url);
    // oku route si cagrildiysa if e gir
    if(req.url === '/oku'){
        // dosyayi oku
        fs.readFile('./OrnekDosya.txt', (err, data) => {
            res.end(`<h1>${data}</h1>`);
        });
    } 
    // eger baska bir route cagrilmissa else 
    // HttpStatusCode  100 --  500
    // 200 basarili
    // 201 created 
    // 301 redirection
    // 400 user ile alakali hatalar
    // 500 serverla alakali hatalar 
    else {
        res.writeHead(200, {'Content-Tpye': 'text/plain'});
        res.end(`<h1>kime baktiniz?</h1>`);
    }
}
const server = http.createServer(callback);
// server hangi portu dinlesin  0 - 65532 arasinda (2^16) -- 0 - 1000 reserved
server.listen(9001, () => console.log("running buzinesss...")); 