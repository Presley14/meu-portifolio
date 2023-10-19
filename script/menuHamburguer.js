
function menuClick(){

    const menu = document.querySelector("#menu")
    const img_menu = document.querySelector("#img_menu")
    const img_x = document.querySelector("#img_x")

    if(menu.style.display === "none" || menu.style.display === ""){
        menu.style.display = "block"
        img_menu.style.display = "none"
        img_x.style.display = "block"
    } else{
        menu.style.display = "none"
        img_menu.style.display = "block"
        img_x.style.display = "none"
    }

    
}

function sairMenu(){
    const menu = document.querySelector("#menu")
    menu.style.display = "none"
    img_menu.style.display = "block"
    img_x.style.display = "none"
}






