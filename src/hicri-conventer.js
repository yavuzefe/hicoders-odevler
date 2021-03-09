// Once miladi tarihi parametre olarak alip bunu hicri tarihe cevirecek fonksiyonu yazariz
// Fonksiyonumuz hicri tarihi tamsayiya yuvarlayarak bize tamsayi olarak tarihi dondurur
const convertToHicri = (pMiladiTarih) => {
    let hicriTarih = Math.round((pMiladiTarih-621)/33) + pMiladiTarih - 621;
    return hicriTarih;
}

// miladi tarihi hicriye ceviren fonnksiyonu diger js dosyalari tarafindan kullanilmasi icin export ederiz
module.exports = convertToHicri;