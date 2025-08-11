alert("Hallo ini JavaScript")

document.addEventListener("DOMContentLoaded", function (){
    const form = document.getElementById("form-submit");

    form.addEventListener("submit", function (event)  {
        const email = document.querySelector(".email").value;

        if(email.trim() == ""){
            event.preventDefault;
            alert("Email tidak boleh kosong");
        }

        const nama = document.querySelector("#nama").value;

        if(nama.trim() == ""){
            event.preventDefault;
            alert("Nama tidak boleh kosong");
        }
    });
});

