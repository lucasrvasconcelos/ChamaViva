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

const copy_chave = document.querySelector("#copy_chave")

copy_chave.addEventListener("click", async(e) => {
    const chave = copy_chave.textContent
    await navigator.clipboard.writeText(chave);
    alert("Chave copiada")
})

const load = document.querySelector(".load")
const header = document.querySelector("header")
const main = document.querySelector("main")

window.addEventListener("load", () => {

    setTimeout(() => {
        header.style.display = "flex"
        main.style.display = "block"
        load.style.display = "none"
    }, 2000);
    
})