/*  -app.js ile programi calistiracagiz.
    -bunun icin de hicriden miladiye ceviren ve miladiden hicriye ceviren fonksiyonlari ayri ayri js sayfalarinda yazariz
    -app.js icine diger js sayfalarinda hazirlanan fonksiyomlari import ederiz.
 */

const fromHicriToMiladi = require("./src/miladi-conventer");
const fromMiladiToHicri = require("./src/hicri-conventer");

console.log(fromHicriToMiladi(0));
console.log(fromMiladiToHicri(2020));
