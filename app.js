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

function sortearAmigo(){
    //Verificar que la lista no este vacia
    if(nombresAmigos.length === 0){
        alert('No hay amigos. Ingresá los nombres para realizar el Sorteo.');
        return;        
    }
    //Generar un índice aletorio
    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    // obtener el nombre del amigo sorteo
    let nombreElegido = nombresAmigos[indiceAleatorio];
    //mostrar el Resultado con el nombre elegido
    document.getElementById("resultado").innerHTML = `<li>🎉 El amigo sorteado es: <strong>${nombreElegido}</strong></li>`;

    // Ocultar la lista de amigos
    document.getElementById("listaAmigos").style.display = "none";
    reiniciarSorteo()
}

function reiniciarSorteo(){
    //La lista vuelve a estar vacia
    nombresAmigos = []
}