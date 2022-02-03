for(let i = 0; i <5 ; i++){
    for(let j = 0; j < 5; j++){
        document.write("<p>Perulangan ke " + i + "," + j + "</p>");
    }
}

// var ulangi = confirm("apakah anda ingin mengulang?");
// var counter = 0;

// while (ulangi) {
//     counter++;
//     var bintang = "*".repeat(counter) + "<br>";
//     document.write(counter + ": " + bintang);
//     ulangi = confirm("apakah anda ingin mengulang?");
// }

var baris, i = 0;
		var nilai_prompt = prompt("Tinggi: ", ""); 
		var tinggi=parseInt(nilai_prompt);
 
		for (baris = 0; baris <= tinggi ; baris++) {
 
		// memBuat sejumlah spasi
		for (i = 1; i <= tinggi - baris; i++) {
		document.write(" "); // Karakter spasi
		 }
 
		// menampilkan bintang
		for (i = 1; i < 2 * baris; i++) {
		document.write("*"); }
 
		// Pindah baris
		document.write("\n"); }