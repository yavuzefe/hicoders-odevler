const ay = prompt("Dogdunuz ayi rakam olarak yaziniz!");
const gun = prompt("Dogdunuz gunu rakam olarak yaziniz!");

if((ay == 1 && gun>20) || (ay == 2 && gun<19)){
    burc = 'KOVA';
}
else if((ay == 2 && gun>19) || (ay == 3 && gun<21)){
    burc = 'BALIK';
}
else if((ay == 3 && gun>20) || (ay == 4 && gun<21)){
    burc = 'KOC';
}
else if((ay == 4 && gun>20) || (ay == 5 && gun<21)){
    burc = 'BOGA';
}
else if((ay == 5 && gun>20) || (ay == 6 && gun<22)){
    burc = 'IKIZLER';
}
else if((ay == 6 && gun>21) || (ay == 7 && gun<23)){
    burc = 'YENGEC';
}
else if((ay == 7 && gun>22) || (ay == 8 && gun<23)){
    burc = 'ASLAN';
}
else if((ay == 8 && gun>22) || (ay == 9 && gun<23)){
    burc = 'BASAK';
}
else if((ay == 9 && gun>22) || (ay == 10 && gun<24)){
    burc = 'TERAZI';
}
else if((ay == 10 && gun>23) || (ay == 11 && gun<23)){
    burc = 'AKREP';
}
else if((ay == 11 && gun>22) || (ay == 12 && gun<22)){
    burc = 'YAY';
}
else if((ay == 12 && gun>21) || (ay == 1 && gun<21)){
    burc = 'OGLAK';
}
else{
    burc = 'Gecerli bir giris yapiniz!';
}
console.log("BURCUNUZ: " + burc);
