// 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?

const over500KgFishes = element => element.stockVolumeInKg > 500;
const stockVolumeOver500 = fishFarm.filter(over500KgFishes);
const over500FishNames = stockVolumeOver500.map(element => element.fishType).toString();
console.log(`1) Stock volumes over 500 kg fishes are: ${over500FishNames}`);

// 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?

const mediumPriceFishes = element => element.price >= 9 && element.price <= 12;
const normalPriceFishes = fishFarm.filter(mediumPriceFishes);
const normalPriceFishesNames = normalPriceFishes.map(element => element.fishType).toString();
console.log(`2) Prices between CHF 9-12 fishes are: ${normalPriceFishesNames}`);

// 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?

const findWinterBernfishes = element => element.saleLocations.includes("BE") && element.season === "Winter";
const bernFishes = fishFarm.filter(findWinterBernfishes);
const bernFishesNames = bernFishes.map(element => element.fishType).toString();
console.log(`3) Origin Bern and Winter season fishes are: ${bernFishesNames}`);

// 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)



// 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz

const EU_COUNTRIES = ["Spain", "GREECE", "Italy", "Poland", "France"];
const isEuCountry  = element => EU_COUNTRIES.includes(element.originCountry);
const countryNames = fishFarm.filter(isEuCountry);
const cheapEUFishes = countryNames.filter(element => element.price < 10);
const cheapEUFisheNames = cheapEUFishes.map(element => element.fishType).toString();
console.log(`5) Under CHF 10 EU fishes are: ${cheapEUFisheNames}`);

// 6) Toplam balik stoku ne kadardir?

const REDUCER = (pAccumulator, pCurrentValue) => pAccumulator + pCurrentValue;
const fishStockList = fishFarm.map(element => element.stockVolumeInKg);
const totalFishStock = fishStockList.reduce(REDUCER);
console.log(`6) Total fish stock is : ${totalFishStock} kg`);

// 7) En pahali olan balik hangisidir? 

const priceSorting = (firstFish, secondFish) => firstFish.price - secondFish.price;
const priceSortedFishes = fishFarm.sort(priceSorting);
const mostExpensiveFish = priceSortedFishes[priceSortedFishes.length-1].fishType;
const mostExpensiveFishPrice = priceSortedFishes[priceSortedFishes.length-1].price;
console.log(`7)The most expensive fish is: ${mostExpensiveFish}, and its price is: ${mostExpensiveFishPrice}`);

// 8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?

const durationSorting = (firstFish, secondFish) => firstFish.durationInDays - secondFish.durationInDays;
const durationSortedFishes = fishFarm.sort(durationSorting);
const mostDurationFishDay = durationSortedFishes[durationSortedFishes.length-1].durationInDays;
const mostDurationFishes = fishFarm.filter(element => element.durationInDays === mostDurationFishDay);
const mostDurationFishCountries = mostDurationFishes.map(element => element.originCountry).toString();
console.log(`8) The longest duration fish/fishes come/s from: ${mostDurationFishCountries} and its/their duration time is: ${mostDurationFishDay} days`);

// 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?

const findWinterAutumnFishes = element => element.season === "Autumn" || element.season === "Winter";
const winterAutumnFishes = fishFarm.filter(findWinterAutumnFishes);
const winterAutumnFishesPrices = winterAutumnFishes.map(element => element.price);
const avargeWAFishPrices = (winterAutumnFishesPrices.reduce(REDUCER)) / winterAutumnFishesPrices.length;
console.log(`9) Avarege price of Winter and Autumn season fishes is: ${avargeWAFishPrices}`);

// 10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?

const TicinoFishes = fishFarm.filter(element => element.saleLocations.includes("TI"));
const amountsOfTicino = TicinoFishes.map(element => element.stockVolumeInKg);
const totalAmountOfTicino = amountsOfTicino.reduce(REDUCER);
console.log(`10) Total fish amount of Ticino is: ${totalAmountOfTicino} kg`);

// 11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?

const summerFishes = fishFarm.filter(element => element.season === "Summer");
const outerEUCountryFishes = summerFishes.filter(element => !EU_COUNTRIES.includes(element.originCountry));
const outerEUSaledZurichFishes = outerEUCountryFishes.filter(element => element.saleLocations.includes("ZH"));
const fishGramsOfZurichFishes = outerEUSaledZurichFishes.map(element => element.itemWeightInGrams);
const averageGramsZurichFishes = fishGramsOfZurichFishes.reduce(REDUCER) / fishGramsOfZurichFishes.length;
console.log(`11) Summer fishes' average weight of which are saled in Zurich that come from outside EU, is: ${averageGramsZurichFishes}`);