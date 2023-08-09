const openmenu = document.querySelector(".ph-list")

const body = document.querySelector("body")
const menu = document.querySelector(".menu")

body.addEventListener("click", (e) => {

    const open_menu = e.target.classList.contains('menu-open')

    if(open_menu){
        open_menu ? menu.classList.add("open_menu") : menu.classList.remove("open_menu") 
    } else {
        menu.classList.contains("open_menu") ? menu.classList.remove("open_menu") : null
    }

})



