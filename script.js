const musteriYili = prompt('Kac yillik musterisiniz?');
const pozitifMessage = "Hallederiz, sikinti yok";
const negatifMessage = "Bu arabaya ben bakamam, sen ileri kosedeki dukkana gotur";

if (musteriYili<5){
    const renk = prompt('Arabaniz ne renk? (kucuk harflerle giriniz)');           
    if(renk == 'kirmizi' || renk == 'siyah'){
        const marka = prompt('Arabanizin markasi ne? (BUYUK HARFLERLE GIRINIZ)');
        if(marka == 'BMW' || marka == "VW" || marka == "AUDI"){
            const model = parseInt(prompt('Arabaniz kac model'));
            if(marka == 'BMW' && ((renk == 'kirmizi' && (2010<=model && model<=2019) ) || (renk== 'siyah' && model >= 2020) )){
                alert(pozitifMessage);    // 3. ve 6. maddeler (2010-2019 arasi kirmizi BMW'lere 2020 siyah BMW'lere olumlu cevap)
            }
            else if(marka == "AUDI" && ((2005<=model && model<=2010) || (2014<=model && model<=2020))){
                alert(pozitifMessage);    //  4. madde (2005-2010  veya 2014-2020 arasi Audi'lere olumlu cevap)
            }
            else if(marka == "VW" && renk == 'siyah' && (2001<=model && model<=2018 )) {
                alert(pozitifMessage);    // 5. madde (2001-2018 arasi siyah VW'lere olumlu cevap)
            }
            else{
                alert(negatifMessage);    //3. 4. 5. ve 6. madde disinda kalan arabalara olumsuz cevap
            }
        }
        else{  //3 marka haricindeki arabalara direk olumsuz cevap
            alert(negatifMessage);
        }
    } else{ // kirmizi ve siyah renk disindaki arabalara direk olumsuz cevap
        alert(negatifMessage);
    }
} 
else{   // 5 yillik ve uzeri sadik musterilerine olumlu cevap
    alert(pozitifMessage);
}