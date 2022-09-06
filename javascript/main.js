myName = "Naglis";
console.log(myName);
myName = "Jonas";
console.log(myName);

someVar = 50;
someVar = 49.9;
someVar = "tekstas";
someVar = true;

var senasKintamasis = "varas";
const  PI = 3.14;
// PI = 6.28;

let yourName= "Jonas";
console.log(yourName);
console.log("tekstas kazkoks");
console.log(17816);
console.log(true);
console.log("teksas ir" + " kitas teksas");
console.log(7 + 3 + " yra desimt");
console.log("yra desimt " + 7 + 3);
console.log("yra desimt " + (7 + 3) );


/*
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

*/

let name = "Naglis";
let surname = "Mockevičius";
let birthYear = 1786;
let currentYear = 2022;

console.log("Aš esu " + name + " " + surname + ". Man yra " + (currentYear - birthYear) + " metai(ų)."  );

console.log("======== 1 uzd =========");
//=================================== 1 uzd ===========================
console.log(   Math.random()   );
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log( Math.random() * 100);
console.log( Math.random() * 100);
console.log( Math.random() * 100);
console.log( Math.random() * 100);
console.log( Math.random() * 100);
console.log( Math.random() * 100);
console.log( Math.random() * 100);
console.log( Math.random() * 100);
console.log( Math.random() * 100);
console.log( Math.random() * 100);
console.log( Math.random() * 100);

Math.round(0.5);
Math.ceil(0.00001);
Math.floor(0.999993);


let rndNum = Math.round( Math.random() * 4 );  // nuo 0 iki 4;
let rndNum2 = 35 + Math.round( Math.random() * (40 - 35) );  // nuo 35 iki 40
console.log("========= nuo 35 iki 40 ========");
console.log(35 + Math.round( Math.random() * (40 - 35) ));
console.log(35 + Math.round( Math.random() * (40 - 35) ));
console.log(35 + Math.round( Math.random() * (40 - 35) ));
console.log(35 + Math.round( Math.random() * (40 - 35) ));
console.log(35 + Math.round( Math.random() * (40 - 35) ));
console.log(35 + Math.round( Math.random() * (40 - 35) ));
console.log(35 + Math.round( Math.random() * (40 - 35) ));
console.log(35 + Math.round( Math.random() * (40 - 35) ));
console.log(35 + Math.round( Math.random() * (40 - 35) ));
console.log(35 + Math.round( Math.random() * (40 - 35) ));
console.log(35 + Math.round( Math.random() * (40 - 35) ));

console.log("========= salyginiai sakiniai ========");

if(5 > 4){
    console.log("teiginys yra teisingas");
    console.log("cia parasiau 100 kodo eiluciu ir nustaciau kad laikas pirkti bitcoinsus");
}else{
    console.log("teiginys neteisingas");
}

let isTrue = false;


if(isTrue){
    console.log("m... nu cia kai tiesa");
}else{
    console.log("o cia kai ifo salyga grazina false, netiesa.");
}

console.log("========= pseudo uzd ===============");


let rndNum10 = Math.round( Math.random() * 4 ); 
let rndNum11 = Math.round( Math.random() * 4 ); 

if (rndNum10 > rndNum11) {
    console.log(rndNum10+ " yra daugiau uz " + rndNum11);
}else{
    console.log(rndNum10+ " NERA daugiau uz " + rndNum11);
}

if( 7 == 7 ){
    console.log("lygus");
}

if( 7 <= 7 ){
    console.log("maziau lygu");
}

if( 7 >= 7 ){
    console.log("daugiau lygu");
}


if( 30 <= 30 ){
    console.log("maziau lygu");
}

if( 7 >= 7 ){
    console.log("daugiau lygu");
}