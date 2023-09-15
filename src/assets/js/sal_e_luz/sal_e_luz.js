const background = document.querySelectorAll(".background_2023")

let index = 0
const qtd = 300
const text = "Sal e luz 2023"
const time = 50

background.forEach((element) =>{
    
        setInterval( ()=>{
            if(index < qtd){

            const spanElement = document.createElement("span")
            spanElement.textContent = text
            element.appendChild(spanElement)
            index++
        } else 
        {
            element.textContent = ''
            index=0
        }

        } , time)
})

const check = document.querySelectorAll(".options_shop label input")

check.forEach((element) => {
    element.addEventListener("change", () => {
        setImage(element.id)
    })
})

function setImage(image){

    const flip = document.querySelector("body section#shop .shop .shop_imagem .flip")

    image == "front" ? flip.style.transform = "rotateY(0deg)" : console.log("Front X");
    image == "left" ? flip.style.transform = "rotateY(90deg)": console.log("Left X");
    image == "back" ? flip.style.transform = "rotateY(180deg)": console.log("Left X");
    image == "right" ? flip.style.transform = "rotateY(270deg)": console.log("Left X");

}

const dadosForm = document.querySelectorAll(".comprar form div")
const backButton = document.querySelector(".comprar .shop_next #left")
const nextButton = document.querySelector(".comprar .shop_next #right")

backButton.style.display = 'none'

console.log(dadosForm.length)
let indexPag = 0

nextButton.addEventListener('click', () => {
    if (indexPag < dadosForm.length - 1){
        dadosForm[indexPag].classList.remove("active-form")
        indexPag++
        dadosForm[indexPag].classList.add("active-form")
    }

    showButton(indexPag)
})

backButton.addEventListener('click', () => {
    if(indexPag > 0){
        dadosForm[indexPag].classList.remove("active-form")
        indexPag--
        dadosForm[indexPag].classList.add("active-form")
    }

    showButton(indexPag)
})

function showButton(indexPag){

    indexPag > 0 ? backButton.style.display = 'block' : backButton.style.display = 'none';
    indexPag == dadosForm.length -1 ? nextButton.style.display = 'none' : nextButton.style.display = 'block'
}