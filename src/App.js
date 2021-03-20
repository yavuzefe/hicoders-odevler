/*
- Ornek resimde verilen siteyi 3 ana modul seklinde boluyoruz
- her modul icin ayri bir js sayfasinda fonksiyon tanimliyoruz
- App.js ile bu modulleri import ediyoruz
*/

import './App.css';
// Burada, diger sayfalarda hazirladigimiz fonksiyonlari isimleriyle import ediyoruz
import InputFormat from './inputFormat';
import Constrains from './constrains';
import OutputFormat from './outputFormat';

// Sayfamizin kisimlarini olusturan modullerin fonksiyonlarini bu kisimda kullaniyoruz
function App() {
  return (
    <div className = "App">

        <InputFormat></InputFormat>
        <Constrains></Constrains>
        <OutputFormat></OutputFormat>
    </div>
  );
}

export default App;
