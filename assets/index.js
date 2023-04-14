const btnOn = document.querySelector("#btn-on")
const btnOff = document.querySelector("#btn-off")
const resultado = document.querySelector("#resultado-operacion")


btnOn.onclick = function(){
    resultado.value = ""
    resultado.style.backgroundColor = "white"
}

btnOff.onclick = function(){
    resultado.value = ""
    resultado.style.backgroundColor = "#272727"
    resultado.style.color = "#272727"
}
