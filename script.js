document.getElementById('trigger').addEventListener('click', function() {
    const lista = document.getElementById('lista');
    if (lista.classList.contains('oculto')) {
        lista.classList.remove('oculto');
    } else {
        lista.classList.add('oculto');
    }
});
document.getElementById('trago').addEventListener('click', function() {
    const lista = document.getElementById('tragas');
    if (lista.classList.contains('oculto')) {
        lista.classList.remove('oculto');
    } else {
        lista.classList.add('oculto');
    }
});
