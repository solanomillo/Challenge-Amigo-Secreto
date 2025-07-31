// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function agregarAmigo(){
    let datoUsuario = document.getElementById('amigo').value;
    if (datoUsuario != ''){
        nombresAmigos.push(datoUsuario);
        limpiarCajar();
    }
    else{
        alert('Por favor, inserte un nombre');
    }
}

function limpiarCajar(){
    document.getElementById('amigo').value = ''
}