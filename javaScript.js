async function lacrado(){
const presente = "https://musicbrainz.org/ws/2/artist?fmt=json&query=BANDA";
const caixaRecebida = await fetch(presente);
const abrirPresente = await caixaRecebida.json();


const artista = abrirPresente.artists[0];
console.log(artista.name);
console.log(artista.area.name);
console.log(artista.id);
console.log(artista["life-span"].ended)
console.log(artista)
document.getElementById("nomeFicticio").textContent = artista.name;
document.getElementById("artista").textContent = artista.area.name;
document.getElementById("favorito").textContent = artista.id;
if (artista["life-span"].ended == null){
    document.getElementById("show").textContent = "Vivo";
}
else{
    document.getElementById("show").textContent = "Morto";
}

}

document.addEventListener("DOMContentLoaded", lacrado());
