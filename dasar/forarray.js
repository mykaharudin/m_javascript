var produk = ["Mouse", "keyboard", "Headphone", "monitor"];

document.write("daftar Produk");

produk.push("HP"); //menambaharray

produk.splice(2,1); //menghapus array

produk[1] = "Kabel C"; //mengubah array
produk.forEach(data => {
    document.write(`<li>${data}</li>`);
});
