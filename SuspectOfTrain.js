    // once suphelinin oldugu vagonu belirleyip degiskene atiyoruz.
    const suspectVagon = Math.floor(Math.random()*10) + 1; // bu fomulde 0-9 arasi sayi uretecegi icin +1 diyerek 1-10 arasi sayi uretmis oluyoruz.

    // kullanicidan pronmpt() metoduyla aldigimiz sayiyi string degerden number degere cevirip degiskene atiyoruz.
    let tahmin = parseInt(prompt("Suphelinin trendeki 10 vagondan hangisinde oldugunu bulmaya calisin. Sadece 4 hakkiniz var, her denemede puaniniz azalmaktadir."));
    let tahminSayisi = 4; // 4 tahminde bulmasi istendiginden tahmin sayisini 4 oalrak atiyoruz.

    while(tahminSayisi>0) {  // Buradatahmin sayisi 0 oluncaya kadar, yani en fazla 4 kere While dongusu devam etsin diyoruz.
        puan = (tahminSayisi*25); // tahmin hakki azaldikca puan da 25'er azaliyor
        tahminSayisi--; // her seferinde tahmin hakkini 1 azaltiyoruz

    // eger kullanici vagon sayisini bulduysa puanini gosterip donguyu sonlandiriyoruz. 
        if (suspectVagon == tahmin) {
            console.log("Bravo! " + puan + " Puan");
            break;       
        }
    // bu satirda tahmin hakki bittiyse programdan cikmasini soyluyoruz ki tekrar asagi veya yukari diye yonlendirme yapmasin
        else if (tahminSayisi == 0){
            alert("Tahmin hakkiniz kalmadi! Supheliyi bulamadiniz");
            break;
        }
    // kullanici tahmin suphelinin bulundugu vagonun sayisindan buyukkse daha ondeki vagonlarda aramsini belirtip yeni tahmin istiyoruz.        
        else if (tahmin > suspectVagon) {
            tahmin = parseInt(prompt("daha ondeki vagonlardan birinde"));
        }
    // kullanici tahmin suphelinin bulundugu vagonun sayisindan kucukse daha arkadaki vagonlarda aramsini belirtip yeni tahmin istiyoruz.
        else if (tahmin < suspectVagon ) {
            tahmin = parseInt(prompt("daha arkadaki vagonlardan birinde"));        
        }      
    } 
    // suphelinin bulundugu vagonun her halukarda gorulmasi, kontrol edilmesi icin console'da yazdiriyoruz.
    console.log("Suphelinin bulundugu vagon numarasi: " + suspectVagon);