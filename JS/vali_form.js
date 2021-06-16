///////////////
// Varaibles //
///////////////

const divError = document.querySelector('#msj-error');
const formulario = document.querySelector('#formulario');

// Campos del formulario
const nombre = document.querySelector('#nombre');
const rut = document.querySelector('#rut');
const correo = document.querySelector('#correo');
const numbero = document.querySelector('#numbero');
const ciudad = document.querySelector('#ciudad');
const mensaje = document.querySelector('#mensaje');

// Expresion regular para validar rut
let regEx2 = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
            return false;
        let tmp     = rutCompleto.split('-');
        let digv    = tmp[1]; 
        let rut     = tmp[0];
        if ( digv == 'K' ) digv = 'k' ;
        return (regEx2.dv(rut) == digv );
    },
    dv : function(T){
        let M=0,S=1;
        for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    }
}
// Expresion regular para validar el correo
const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;






/////////////
// Eventos //
/////////////
eventListeners();

function eventListeners() {

    document.addEventListener('DOMContentLoaded', limpiarForm);

    nombre.addEventListener('blur', validarFormulario);
    rut.addEventListener('blur', validarFormulario);
    correo.addEventListener('blur', validarFormulario);
    numero.addEventListener('blur', validarFormulario);
    ciudad.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    


}





///////////////
// Funciones //
///////////////




// Validar formulario
function validarFormulario(e) {
    
    // Validar campos llenos
    if (e.target.value.length > 0 || e.target.type === 'number') {


    } else {
       mostrarError("Deve rellenar los campos");
    }


    // Validar correo valido
    if (e.target.type === 'email') {
        

        if ( regEx.test(e.target.value) ) {


        } else {
            mostrarError("Email no valido");
        }
    }

    // Validar rut valido
    if (e.target.type === 'tel') {
        
        
        if ( regEx2.validaRut(e.target.value) ) {

        } else {
            mostrarError("Rut no valido");

        }
    }


}


function mostrarError(mensaje) {

    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('alert', 'alert-danger', 'error');

    const errores = document.querySelectorAll('.error');

    if (errores.length === 0) {
        divError.appendChild(mensajeError);
        setTimeout(()=> { divError.removeChild(mensajeError); }, 2000);
    }


}


function limpiarForm() {
    formulario.reset();
}





