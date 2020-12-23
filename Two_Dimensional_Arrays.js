const notes = [
    ["Hans", 80, 90, 10, 50], 
    ["Ulrich", 94, 36, 76, 74], 
    ["Olaf", 30, 60, 34, 78], 
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];

// Her dersin notlarini notes dizisindeki sirasiyla tutacagimiz ders notlari icin once bos array tanimliyoruz.
const MATHEMATIC_NOTES = [];
const GERMAN_NOTES = [];
const ENGLISH_NOTES = [];
const GEOGRAPHY_NOTES = [];

/* Her dersin notlarini ayri array'ler icine atiyoruz. sirayla notes array'inden 
ders notunun sirasini secip push() metodu ile dersimizin array'i icine atiyoruz. */
for (let index = 0; index < notes.length; index++) {
    MATHEMATIC_NOTES.push(notes[index][1]);
    GERMAN_NOTES.push(notes[index][2]);
    ENGLISH_NOTES.push(notes[index][3]);
    GEOGRAPHY_NOTES.push(notes[index][4]);
}

// 1-) Derslerin ortalamalarinin ayri ayri hesaplanmasi:
/* gradeAverage isimli fonksiyon ile alacagimiz lesson parametresindeki her dersin notlarini tutan array'deki degerlerin toplamini bulup, 
bunu array uzunluguna boluyoruz,fonksiyonumuzdan da bize bu ortalama degeri dondurmesini istiyoruz */
function gradeAverage(lesson){
    // ders notlarinin toplamini tutacagimiz lessonSum degiskeninine ilk olarak 0 atiyoruz.
    let lessonSum = 0;
    for (let index = 0; index < lesson.length; index++) {
        // hangi ders array'indeysek buradaki tum degerleri toplayarak lessonSum degiskeninde tutuyoruz.
        lessonSum += lesson[index];
    }
    // son olarak da arraydeki ders puanlarinin toplamini array icinde kac deger varsa ona bolerek ortalamayi buluyoruz.
    let lessonAverage = lessonSum / lesson.length;
    return lessonAverage;
}

// sirayla her ders puanlarinin tutuldugu dizileri gradeAverage() fonksiyonu ile ortalamarini bulup degiskenlere atiyoruz.
const MATHEMATIC_AVERAGE = gradeAverage(MATHEMATIC_NOTES);
const GERMAN_AVERAGE = gradeAverage(GERMAN_NOTES);
const ENGLISH_AVERAGE = gradeAverage(ENGLISH_NOTES);
const GEOGRAPHY_AVERAGE = gradeAverage(GEOGRAPHY_NOTES);

console.log(`Mathematic grades average is: ${MATHEMATIC_AVERAGE}`);
console.log(`German grades average is: ${GERMAN_AVERAGE}`);
console.log(`English grades average is: ${ENGLISH_AVERAGE}`);
console.log(`Geography grades average is: ${GEOGRAPHY_AVERAGE}`);

// 2-) Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi:
for (let index = 0; index < notes.length; index++) {
    /* notes dizisi icindeki notlari sirayla 70'den buyuk mu diye kontrol ediyoruz. 
    notes dizisinin icindeki dizilerin ilk degerleri string bir deger yani isimler oldugu icin yapacagimiz ikinci donguye 0. degil 1. indexten basliyoruz.*/
    for (let index2 = 1; index2 < notes[index].length; index2++) {
        if(notes[index][index2] >= 70){
            // eger ogrencilerin notlari oldugu dizideki herhangi bir ders 70'ten buyukse o dizideki ogrencinin ismini yazdiriyoruz ve donguyu orada kesiyoruz.
            console.log(`${notes[index][0]} has a grade of 70 or more.`);
            break;
        }
    }
}

// 3-) Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi:

// Ders isimlerini notes dizisindeki sirasiyla LESSONS_NAMES degiskenine atiyoruz.
const LESSONS_NAMES = ['Mathematic', 'German', 'English', 'Geography']
// Butun derslerin ortalamalarini NOTE_AVERAGES isimli bir array'e atariz.
const NOTE_AVERAGES = [MATHEMATIC_AVERAGE, GERMAN_AVERAGE, ENGLISH_AVERAGE, GEOGRAPHY_AVERAGE];
// Sadece ders notlarinin oldugu ALL_NOTES isimli bir array olustururuz. notes dezisinden farkli, not averajlariyla ders notlari ayni index sirasinda olmus olacak.
const ALL_NOTES = [MATHEMATIC_NOTES, GERMAN_NOTES, ENGLISH_NOTES, GEOGRAPHY_NOTES];

// Simdi sirayla ALL_NOTES icindeki ders notlarini oralamadan yuksek mi diye karsilastirmak icin dongu olustururuz.
for (let index = 0; index < ALL_NOTES.length; index++) {
    //ortalamanin uzerinde notu olan ogrencilerin isimlerini tutacagimiz successStudents isimli degisken tanimliyoruz.
    let successStudents = [];
    // Simdi de ALL_NOTES icindeki notlarin icindeki not dizileri icin dongu olusturup, sirayla her derse ait dizideki  notlari
    for (let index2 = 0; index2 < ALL_NOTES[index].length; index2++) {
        // Butun notlari tuttugumuz array icinde, siradaki ders notlari arrayi icindeki notlari sirayla o dersin ortalamasi ile kiyasliyoruz.
        if (ALL_NOTES[index][index2] > NOTE_AVERAGES[index]){
            // eger Ders notlari array'i icindeki siradki not ortalamadan yuksekse successStudents arrayi icine atiyoruz.
            successStudents.push(notes[index2][0]);
        }   
    }
    console.log(`In ${LESSONS_NAMES[index]}, successful students are: ${successStudents.join(', ')}`);   
}

// 4-) Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi

// Math.max(...array) metoduyla ortalama notlari tuttugumuz NOTE_AVERAGES array'i icerisindeki en yuksek puani BEST_LESSON_GRADE degiskenine atariz.
const BEST_LESSON_GRADE = Math.max(...NOTE_AVERAGES);
// buldugumuz en buyuk not ortalamasinin index sayisini bulup bu indexten hangi derse ait oldugunu bulup BEST_LESSON degiskeninine atiyoruz.
const BEST_LESSON = LESSONS_NAMES[NOTE_AVERAGES.indexOf(BEST_LESSON_GRADE)];
console.log(`The best lesson of the class is: ${BEST_LESSON} with the ${BEST_LESSON_GRADE} grade average.`);

//5-) Sinifin en kötü oldugu dersi gostermesi

// 4. sorudaki sistemin aynisini Math.min() metodu ile yapiyoruz.
const WORST_LESSON_GRADE = Math.min(...NOTE_AVERAGES);
const WORST_LESSON = LESSONS_NAMES[NOTE_AVERAGES.indexOf(WORST_LESSON_GRADE)];
console.log(`The worst lesson of the class is: ${WORST_LESSON} with the ${WORST_LESSON_GRADE} grade average.`);

// 6-) Tüm derslerin en iyi ögrencilerini bulmasi

// Butun derslerin notlarini diziler olarak tuttugumuz ALL_NOTES dizisi icinde sirayla her dersin en yuksek notunu arayacagiz.
for (let index = 0; index < ALL_NOTES.length; index++) {
    // ALL_NOTES icinde siraaki dersin puanlari dizisi icindeki en yuksek notu MATH.max(...array) metodu ile buluruz, bunu bestNoteOfLesson degiskenine atariz.
    let bestNoteOfLesson = Math.max(...ALL_NOTES[index]);
    // En yuksek not siradaki ders dizisi icinde kacinci indexte onu indexOF() metoduyla bulup bestNoteIndex degiskenine atiyoruz.
    let bestNoteIndex = ALL_NOTES[index].indexOf(bestNoteOfLesson);
    // en iyi not kacinci indexteyse, notes dizisinden o indexteki ogrencinin ismini [0] bestStudent degiskenine atiyoruz.
    let bestStudent = notes[bestNoteIndex][0];
    console.log(`In ${LESSONS_NAMES[index]}, the best student is ${bestStudent} with the ${bestNoteOfLesson} grade.`);
}
