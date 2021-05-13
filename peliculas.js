dibujarPeliculas(datos);

function dibujarPeliculas(peliculas) {
    let resultadosHtml = "";
    peliculas.forEach(element => {
        resultadosHtml += `
        <article class="item-pelicula">
            <img src="${element.cover}" alt="${element.title}" width="250"/>
            <span> ${element.title} </span>
        </article>
        `
    });

    document.getElementById("resultados").innerHTML = resultadosHtml;
}

function buscarPelicula() {
    const titulo = document.getElementById("buscar").value.toLowerCase();
    const peliculasFiltradas = [];

    for (let index = 0; index < datos.length; index++) {
        if(datos[index].title.toLowerCase().includes(titulo)){
            peliculasFiltradas.push(datos[index]);
        }
    }

    dibujarPeliculas(peliculasFiltradas);
}

function ordenarPeliculas(params) {
    const orden = document.getElementById('orden').value;
    let arrayOrdenados;

    if (orden ===  'titulo') {
        arrayOrdenados = datos.sort(function (peli1, peli2) {
        return peli1.title - peli2.title;
        });
    } else if (orden === 'puntuacion-asc') {
        arrayOrdenados = datos.sort(function (peli1, peli2) {
        return  peli2.score - peli1.score;
        });
    } 
    else if (orden === 'puntuacion-desc') {
        arrayOrdenados = datos.sort(function (peli1, peli2) {
        return  peli1.score - peli2.score;
        });
    }
    
    dibujarPeliculas(arrayOrdenados);
}