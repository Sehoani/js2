console.log("conectado")
let a;
let bordeRojo = document.querySelector('.imagen')
function borde() {
    if (a == 1) {
        bordeRojo.style.border = 'solid 2px red'
        return a = 0;
    }
    else {
        bordeRojo.style.border = 'none'
        return a = 1;
    }
}
////////////////////////////////////////////////////////////////////////////
function botonP2() {
    let input1 = document.querySelector('.input1').value
    let input2 = document.querySelector('.input2').value
    let input3 = document.querySelector('.input3').value
    let resultadoPublico = document.querySelector('.resultado-dp2')
    let resultado = Number(input1) + Number(input2) + Number(input3)

    console.log(resultado)//ok

    if (resultado < 10) {
        console.log('aqui vamos bien ' + resultado);
        resultadoPublico.innerHTML = 'Llevas ' + resultado + ' Stickers';
    } else {
        console.log('Aqui tambien vamos bien ' + resultado)
        resultadoPublico.innerHTML = 'Lo siento excedes el máximo' + ' llevas ' + resultado + ' en total, recuerda que solo son 10 en total'
    }
}
////////////////////////////////////////////////////////////////////////////////
function boton3() {
    let pd1 = document.querySelector('.primer-digito').value
    let pd2 = document.querySelector('.segundo-digito').value
    let pd3 = document.querySelector('.tercer-digito').value
    let contraseñaEntregada = pd1 + pd2 + pd3
    let contraseñaOk = '911' && '714'
    let resultado = document.querySelector('.texto-usurio')
    console.log(contraseñaEntregada)
    if (contraseñaOk == contraseñaEntregada) {
        console.log('esto esta bien')
        resultado.innerHTML = 'Contraseña correcta'
    } else {
        resultado.innerHTML = 'Contraseña Incorrecta'
        console.log('contraseña incorrecta')
    }
}