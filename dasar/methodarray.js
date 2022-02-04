const angka = [1,2,3,4,5,6,7,8,9];

const filteredArray = angka.filter((item) => {return item %2 === 0});//modulus 2
document.write(filteredArray);
document.write("<br>");
var tanaman = ["padi","toge","jagung", "semangka"];

var adakacang = tanaman.includes("cankang");

document.write(adakacang);
document.write("<br>");
var adasemangka = tanaman.includes("semangka");

document.write(adasemangka);
document.write("<br>");
document.write("<br>");
var huruf = ['a','w','d','v','m'];
var angka2 = [2,1,4,5,78,5,8];
document.write("<br>");
document.write(huruf.sort());
document.write("<br>");
document.write(angka2.sort());