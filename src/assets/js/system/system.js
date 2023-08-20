const pass = document.querySelector("#pass")
const showPass = document.querySelector("#showpass")

showPass.addEventListener("click", () => {
    pass.type == "password" ? pass.type = "text" : pass.type = "password"
})


