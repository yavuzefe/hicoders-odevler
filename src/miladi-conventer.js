// Once hicri tarihi parametre olarak alip bunu miladi tarihe cevirecek fonksiyonu yazariz
// Fonksiyonumuz miladi tarihi tamsayiya yuvarlayarak bize tamsayi olarak tarihi dondurur

const convertToMiladi = (pHicriTarih) => {
    let miladiTarih = pHicriTarih - Math.round(pHicriTarih/33) + 622; 
    return miladiTarih;
}

// hicri tarihi miladiye ceviren fonnksiyonu diger js dosyalari tarafindan kullanilmasi icin export ederiz
module.exports = convertToMiladi;