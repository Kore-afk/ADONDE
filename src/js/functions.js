// Función para manejar el voto
function manejarVoto(event) {
    const boton = event.target.closest('button'); // Asegúrate de obtener el botón
    const li = boton.closest('li'); // Obtener el elemento de la lista
    const flechaArriba = li.querySelector('.flecha-arriba');
    const flechaAbajo = li.querySelector('.flecha-abajo');

    // Cambiar el estado de votación
    if (boton.classList.contains('flecha-arriba')) {
        flechaArriba.classList.toggle('votado'); // Cambiar el estado de votación
        flechaAbajo.classList.remove('votado'); // Remover el voto de abajo
    } else if (boton.classList.contains('flecha-abajo')) {
        flechaAbajo.classList.toggle('votado'); // Cambiar el estado de votación
        flechaArriba.classList.remove('votado'); // Remover el voto de arriba
    }

    // Reordenar las publicaciones según los votos
    reordenarPublicaciones();
}

// Función para reordenar las publicaciones
function reordenarPublicaciones() {
    const lista = document.querySelector('.list-group');
    const items = Array.from(lista.children);

    items.sort((a, b) => {
        const votosA = a.querySelector('.flecha-arriba.votado') ? 1 : 0; // Voto arriba
        const votosB = b.querySelector('.flecha-arriba.votado') ? 1 : 0; // Voto arriba
        return votosB - votosA; // Ordenar de mayor a menor
    });

    // Limpiar la lista y volver a agregar los elementos ordenados
    lista.innerHTML = '';
    items.forEach(item => lista.appendChild(item));
}

// Agregar event listeners a los botones de votación
document.querySelectorAll('.votacion button').forEach(button => {
    button.addEventListener('click', manejarVoto);
});
