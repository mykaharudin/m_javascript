var ulang = confirm("apakah anda mengulanga angka? ");
var cont = 0;

while(ulang) {
    var jawab = confirm("Apakah anda ulang angka? ")
    cont++;
    if(jawab == false) {
        ulang = false;
    }
}

document.write("angka diulang sebanyak= "+ cont +" itu");
