document.addEventListener("DOMContentLoaded", function() {

    let btn_menu = document.querySelector("#btn_menu");
    let menu = document.querySelector(".nav_menu");

    btn_menu.addEventListener("click", desplegar_menu);

    function desplegar_menu() {
        menu.classList.toggle("ver_menu");

    }
    //console.log(btn_menu);



})