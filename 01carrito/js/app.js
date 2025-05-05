// Variables de acceso al DOM
const listaCursos = document.querySelector('#lista-cursos')
const carrito = document.querySelector('#carrito')
const listaCarrito = document.querySelector('#lista-carrito')
const vaciarCarrito = document.querySelector('#vaciar-carrito')

//...
loadEventListeners();


function loadEventListeners() {
    listaCursos.addEventListener('click', addToCart)

}

function addToCart(e) {
    e.preventDefault()

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        readData(cursoSeleccionado)
    }
}


// Function to read data's course
function readData(curso) {
    console.log(curso)

    // Objeto con el contenido del curso
    const infoCurso = {
        img: curso.querySelector('img').src,
        title: curso.querySelector('h4').textContent,
        price: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        quantity: 1

    }

    console.log(infoCurso)
}

