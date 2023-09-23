
const background = document.querySelectorAll(".background_2023")

const text = "Sal e luz 2023"
const time = 50

background.forEach((element) =>{

    const paiBackground = element.parentNode

    setInterval(() => {
        if(element.offsetHeight <= paiBackground.offsetHeight){
            const spanElement = document.createElement("span")
            spanElement.textContent = text
            element.appendChild(spanElement)
        } else {
            element.textContent = ''
        }
    }, time);
        
})

const check = document.querySelectorAll(".options_shop label input")

check.forEach((element) => {
    element.addEventListener("change", () => {
        setImage(element.id)
    })
})

function setImage(image){

    const flip = document.querySelector("body section#shop .shop .shop_imagem .flip")

    image == "front" ? flip.style.transform = "rotateY(0deg)" : false;
    image == "left" ? flip.style.transform = "rotateY(90deg)": false;
    image == "back" ? flip.style.transform = "rotateY(180deg)": false;
    image == "right" ? flip.style.transform = "rotateY(270deg)": false;

}

const dadosForm = document.querySelectorAll(".comprar form div")
const backButton = document.querySelector(".comprar .shop_next #left")
const nextButton = document.querySelector(".comprar .shop_next #right")

backButton.style.display = 'none'

let indexPag = 0

nextButton.addEventListener('click', () => {

    if (indexPag < dadosForm.length - 1){
        const input = dadosForm[indexPag].querySelector('input.required')

        if(input){
            const output_menssage = input.parentNode.querySelector(".output_menssage")
            const verifiDados = DadosCheck(indexPag, input, output_menssage)

            if(!verifiDados){
                
                dadosForm[indexPag].classList.remove("active-form")
                indexPag++
                dadosForm[indexPag].classList.add("active-form")
            }

        } else
            {
                dadosForm[indexPag].classList.remove("active-form")
                indexPag++
                dadosForm[indexPag].classList.add("active-form")
            }

    }

    showButton(indexPag)
})

function nexPage(){
    
}

backButton.addEventListener('click', () => {
    if(indexPag > 0){
        dadosForm[indexPag].classList.remove("active-form")
        indexPag--
        dadosForm[indexPag].classList.add("active-form")
    }

    showButton(indexPag)
})

function DadosCheck(indexPag, input, output_menssage){

    console.log(input)

    const valor = input.value

    if (indexPag == 0){
        //CPF
        if(valor.length != 11){
            output_menssage.textContent = "CPF deve ter 11 Dígitos"
            input.focus()
            erros.push(output_menssage.textContent)
            return true
        } else {
            indexPag++
            output_menssage.textContent = ''
            return false
        }
        
    }

    if (indexPag == 1){
        //CONTATO
        if(valor.length < 8 || valor.length > 12){
            output_menssage.textContent = "Número de contato inválido"
            input.focus()
            erros.push(output_menssage.textContent)
            return true
        } else {
            indexPag++
            output_menssage.textContent = ''
            return false
        }
    }

    if (indexPag == 2){
        //NOME
        if(valor.length < 3 || valor.length > 20){
            output_menssage.textContent = "Mínimo de 3 caractéres e máximo 15"
            input.focus()
            erros.push(output_menssage.textContent)
            return true
        } else {
            indexPag++
            output_menssage.textContent = ''
            return false
        }
    }

    if (indexPag == 3){
        //NOME
        if(valor < 1 || valor > 20){
            output_menssage.textContent = 'Mínimo 1 e máximo 20'
            input.focus()
            erros.push(output_menssage.textContent)
            return true
        } else {
            indexPag++
            output_menssage.textContent = ''
            return false
        }
    }


}

function showButton(indexPag){

    indexPag > 0 ? backButton.style.display = 'block' : backButton.style.display = 'none';
    indexPag == dadosForm.length - 1 ? nextButton.style.display = 'none' : nextButton.style.display = 'block'
}

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

const QRcode_copy = document.querySelector(".qrcode-img img")
const ChavePix = document.querySelector(".chave span")
const chaveCopiar = document.querySelector(".chave span span.copiar")

QRcode_copy.addEventListener("click", () => {
    navigator.clipboard.writeText('00020101021126450014br.gov.bcb.pix0123chamavivaadbj@gmail.com5204000053039865802BR5925Jaiane Caroline Nasciment6009SAO PAULO622905251H3HFG5ZN7F561J6HN2FHKB3E63046F47')
    alert("código qrcode copiado!")
})

ChavePix.addEventListener("click", () => {

    navigator.clipboard.writeText('saleluzadbj@gmail.com');
    
    const chaveCopiarStyle = getComputedStyle(chaveCopiar);

    if(chaveCopiarStyle.display== 'none'){
        return alert("chave pix copiada!");
    }

    chaveCopiar.textContent = "copiado ✔️";
    
    setTimeout(() => {
        chaveCopiar.textContent = 'copiar';
    }, 500);

})

const enviarPedido = document.querySelector("body section#shop .shop .comprar form > .submit input")
const form = document.querySelector("form")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    
    createPedido(enviarPedido, form)


      

})

enviarPedido.addEventListener("click", (event)=> {
    event.preventDefault()
    createPedido(enviarPedido, form)
})


async function createPedido (enviarPedido, form){

        enviarPedido.disabled = true
        enviarPedido.value = 'Aguarde...'

        const formData = new FormData(form)
        const dataValuesForm = Object.fromEntries(formData)

        fetch('/sendform', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataValuesForm)
            })
            .then(res=> res.json()).then(data => {
                console.log('sucesso')
                enviarPedido.value = 'Reservado com sucesso';
            })
            
        }









