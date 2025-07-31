// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];


function agregarAmigo(){
    let datoUsuario = document.getElementById('amigo').value;
    // Verificar que el campo no esté vacío
    if (datoUsuario != '') {
        // Agregar el nombre ingresado a la lista
        nombresAmigos.push(datoUsuario);
        // Limpiar el campo de texto
        limpiarCajar();
        listaAmigos(); 
    } else {
        alert('Por favor, inserte un nombre');
    }
}

function limpiarCajar(){
    // Limpiar el campo de texto
    document.getElementById('amigo').value = '';
}

function listaAmigos(){
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    
    // Recorrer la lista de nombres y crear un <li> por cada uno
    for (let i = 0; i < nombresAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = nombresAmigos[i];
        listaHTML.appendChild(li);
    }
}
