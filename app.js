let listaDeAmigosA = [];
let mostarLista = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado')

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function limpiarLista() {
    mostarLista.innerHTML = '';
}


function agregarAmigos () {
    let agregarAmigoEnArray = document.getElementById('amigo').value;
    console.log(agregarAmigoEnArray);

    if (agregarAmigoEnArray === "" ){
        alert('Por favor, inserte un nombre.');
        return;
    }else{
        listaDeAmigosA.push(agregarAmigoEnArray);
        limpiarCaja();
        limpiarLista();
        mostrarListaDeAmigos();
    }
}

function mostrarListaDeAmigos() {

for (let i = 0; i < listaDeAmigosA.length; i++) {
    let nuevoLi = document.createElement('li');
    nuevoLi.textContent = listaDeAmigosA[i];
    mostarLista.appendChild(nuevoLi);  
}
}
function sortearAmigo(){
    if(listaDeAmigosA.length <= 1){
        alert("Por Favor agrega dos o más amigos");
        return;
    }else{
        let amigoSecreto = listaDeAmigosA[Math.floor(Math.random() * listaDeAmigosA.length)]
        amigoSorteado.innerHTML = "El amigo secreto es:" + amigoSecreto;
    }

}
