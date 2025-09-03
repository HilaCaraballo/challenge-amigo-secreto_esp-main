let listaDeNombres = [];
function agregarAmigo () {
let nombresAgregados = document.getElementById('amigo').value 

if (nombresAgregados === "") {alert ('Ingrese un nombre válido')
} else { listaDeNombres.push(nombresAgregados);
    document.getElementById('listaAmigos').innerHTML += nombresAgregados + "<br>";
    document.getElementById('amigo').value = "";
}
};

 function sortearAmigo () {
let nombreRandom = Math.floor(Math.random() * listaDeNombres.length)

let amigoSorteado = listaDeNombres[nombreRandom];

document.getElementById('resultado').innerHTML = amigoSorteado
 };