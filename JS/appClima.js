const kelvin = 273.15;


const obtenerClima = () => {
	let ciudad = document.querySelector("#ciudad").value;
	let pais = "chile"


	if(ciudad.trim()==='' || pais.trim()==='') {
		mostrarError("#msj-error", "falta llenar campos");
		return
	}

	consultarAPI(ciudad, pais);
}


const consultarAPI= async(ciudad, pais)=>{
	const apiKey="c136a9653ae4e58924924b5a69577b73";
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`
	console.log(url);
	const respuesta = await fetch(url);
	const resultado = await respuesta.json();
	console.log(resultado);

	if (resultado.cod=="404"){
		mostrarError("#msj-error", "No hay resultados");
		return;
	}

	const {name, main} = resultado;
	if (!name) return null;

	let divResultado = document.querySelector("#divResultado");

	divResultado.innerHTML=`
		<div class="alert alert-primary cal s12">
			<div class="text.dark">
				<h2 class="text-dark">El clima de ${name} es: </h2>
				<p class="temperatura text-center"> Temperatura Actual: 
					${parseFloat(main.temp-kelvin,10).toFixed(2)} <span> &#x2103; </span>
				</p>
				<p class=" text-center"> Temperatura Máxima: 
					${parseFloat(main.temp_max-kelvin,10).toFixed(2)} <span> &#x2103; </span>
				</p>
				<p class=" text-center"> Temperatura Mínima: 
					${parseFloat(main.temp_min-kelvin,10).toFixed(2)} <span> &#x2103; </span>
				</p>
				<p class=" text-center"> Humedad: 
					${parseFloat(main.humidity,10).toFixed(2)} <span> % </span>
				</p>
			</div>
		</div>
		`;

}



const mostrarError = (elemento, mensaje) => {
	divError=document.querySelector(elemento);
	divError.innerHTML=`<p class="alert alert-danger error">${mensaje}</p>`;
	setTimeout(()=> { divError.innerHTML=''; }, 4000);
}

