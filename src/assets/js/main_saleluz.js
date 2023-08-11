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
const tempload = 0

window.addEventListener("load", () => {

    //Atualizando data antes de mostrar tela
    countDate()

    setTimeout(() => {
        header.style.display = "flex"
        main.style.display = "block"
        load.style.display = "none"
    }, tempload);
    
})

const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#mins")
const seconds = document.querySelector("#sec")

const DateTime = "09 Nov 2023"

function countDate(){

    const eventDate = new Date(DateTime)
    const currentDate = new Date()

    if(currentDate < eventDate){
        const totalseconds = (eventDate - currentDate) / 1000

        const daysTime = Math.floor( totalseconds / 3600 / 24 )
        const hoursTime = Math.floor( (totalseconds / 3600 ) % 24 )
        const minsTime = Math.floor( (totalseconds / 60) % 60 )
        const minsSeconds = Math.floor( (totalseconds) % 60 )
    
        days.innerHTML = formateTime(daysTime) 
        hours.innerHTML = formateTime(hoursTime) 
        minutes.innerHTML = formateTime(minsTime) 
        seconds.innerHTML = formateTime(minsSeconds) 
    }
   
}

function formateTime(x){
    return x < 10 ? `0${x}` : x
}

setInterval(countDate, 1000)

    

