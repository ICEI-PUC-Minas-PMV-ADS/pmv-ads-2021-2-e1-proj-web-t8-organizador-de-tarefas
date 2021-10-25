 /*   var myModal = document.getElementById('exampleModal')
    
    myModal.addEventListener('shown.bs.modal', function () {
    })
    
    

    document.getElementById("editar").addEventListener("click", function () {
        myModal.add
    });

    */

function openMenu(){
    document.getElementById("menu-lateral").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function closeMenu(){
    document.getElementById("menu-lateral").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}