let listaDeNombres = [];
function agregarAmigo () {
let nombresAgregados = document.getElementById('amigo').value 
let nombreSinEspacios = "";

for (let i = 0; i < nombresAgregados.length; i++) {
    if (nombresAgregados[i] !== " ") {
        nombreSinEspacios += nombresAgregados[i];
    }
    
}


if (nombreSinEspacios.length === 0) {alert ('Ingrese un nombre válido')
} else { listaDeNombres.push(nombreSinEspacios);
    document.getElementById('listaAmigos').innerHTML += nombreSinEspacios + "<br>";
    document.getElementById('amigo').value = "";
}
};

 function sortearAmigo () {

    let nombreRandom = Math.floor(Math.random() * listaDeNombres.length)
let amigoSorteado = listaDeNombres[nombreRandom];

document.getElementById('resultado').innerHTML = amigoSorteado
 };