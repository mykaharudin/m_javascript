var lang = ["aku", "kamu", "mereka", "dia"];

for (x = 0; x< lang.length; x++) {
    document.write(x+". "+ lang[x]+"<br>")
    
}

//yang benar foreach
var hari = ["senin","selsa","kamis","jumaat","sabtu","minggu"];
hari.forEach(function (hari) {
    document.write("berapa banyak "+hari+"<br>");
});

// kita punya array seperti berikut
var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];

// Kemudian kita tampilkan semua hari
// dengan menggunakan method foreach
days.forEach((day) => {
    document.write("<p>" + day + "</p>");
});

document.write("mayuka ".repeat(30));