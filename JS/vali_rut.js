const obtenerRut = () => {

    let rut = document.querySelector("#rut").value;

    if(rut.trim()==='') {
        mostrarError("#msj-error", "El rut no esta rellenado");
        return
    }

    checkRut(rut);

}



function checkRut(document.querySelector("#rut")){
    let valor= rut.value.replace('.','');
    valor = valor.replace('-','');
    Cuerpo= valor.slice(0, -1);
    dv =valor.slice(-1).toUpperCase();

    //DECLARAR LA ESTRUCTURA DEL RUT
    rut.value =cuerpo + '-' + dv
    if (cuerpo.length < 7) {rut.setCustomValidity("El Run no está completo.");                         
    return false}
                   
    //DECLARAR LOS DIGITON PARA EL CALCULO:
    suma = 0;
    multiplo = 2;

    for (c=1; c < cuerpo.length; c++) {
    	calculo = multiplo*valor.charAt(cuerpo.length - c);
    	suma= suma + calculo

    	if (multiplo <7) { multiplo + 1;}
    	else {multiplo = 2;}
	}  

	//CALCULAR DIGITOS EN 11 NUMEROS:
	dv2 =11 -(suma%11);
    /*en caso que sea numerico o con K*/
    dv = (dv == 'k')?10:dv;
    dv = (dv == 0)?11:dv;

    if (dv2 != dv) {rut.setCustomValidity("Run inválido.");
    return false;} 
     
    rut.setCustomValidity('');
}


const mostrarError = (elemento, mensaje) => {
    divError=document.querySelector(elemento);
    divError.innerHTML=`<p class="alert alert-danger error">${mensaje}</p>`;
    setTimeout(()=> { divError.innerHTML=''; }, 4000);
}