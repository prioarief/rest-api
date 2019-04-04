// dari object ke json
// let mahasiswa = {
//     nama: "Prio Arief Gunawan"
// }

// console.log(JSON.stringify(mahasiswa));


// dari json ke object

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();

// pake jquery
$.getJSON('coba.json', function (data) {
    console.log(data);
});