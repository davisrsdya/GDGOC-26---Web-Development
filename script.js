document.addEventListener("DOMContentLoaded", function() {

    const idCard = document.querySelector(".id-card");

    idCard.addEventListener("click", function() {

        idCard.classList.toggle("flipped");

        console.log(idCard.className);

    });

});


const contactBtn = document.getElementById("contactBtn");
const contactList = document.getElementById("contactList");

contactBtn.addEventListener("click", function() {

    contactList.classList.toggle("active");

});



//ERROR HADLING
//Teknik nangkap error otomatis, conbtoh bisa muncul notifikasi/dialihin ke yang lain

//DOM ngubah html jadi obejct

//Event Handling = cara Javascript merespon respon dadri oengguna, contoh mencet tombol
//3 komponen 
//click, dbclick mouserover, keydown

