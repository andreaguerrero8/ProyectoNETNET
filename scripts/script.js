import { peliculas } from "./data.js";

const body = document.getElementById('body');

let series = document.getElementById('serie');
let pelis = document.getElementById('pelicula');

let proximamente = document.getElementById('proximamente');
let descarga = document.getElementById('descarga');


function iniciar() {
    let boton = document.getElementById('boton');
    boton.addEventListener('click', presionar, false);
}
function presionar() {
    let video = document.getElementById('video');
    video.play();
}
window.addEventListener('load', iniciar, false);




proximamente.addEventListener('click', () => {
    alert('PROXIMAMENTE TENDREMOS NUEVAS PELICULAS Y SERIES \n PARA TI, ESPERALAS...!!')
})

descarga.addEventListener('click', () => {
    alert('QUIERES DESCARGAR PELICULAS Y SERIES \n REGISTRATE...!!')
})



document.addEventListener('DOMContentLoaded', () => {
    mostrarPelicula();
});


function mostrarPelicula() {

    let imagenPopulares = document.getElementById('imagenPopulares');
    let imagenJaponesas = document.getElementById('imagenJaponesas');
    let imagenEEUU = document.getElementById('imagenEEUU');

    peliculas.forEach(element => {

        if (element.id <= 6) {

            let fragmento = document.createDocumentFragment();

            const btnVer = document.createElement('button');
            btnVer.setAttribute('class', 'btn');
            btnVer.setAttribute('data-bs-toggle', 'modal');
            btnVer.setAttribute('data-bs-target', '#exampleModal');

            let imagen = document.createElement('img')
            imagen.setAttribute('src', `${element.foto}`);
            imagen.setAttribute('id', `${element.id}`);
            imagen.setAttribute('class', 'populares');

            btnVer.appendChild(imagen);
            fragmento.appendChild(btnVer);

            imagenPopulares.appendChild(fragmento);

        }

        if (element.id > 6 && element.id <= 12) {


            let fragmento = document.createDocumentFragment();

            const btnVer = document.createElement('button');
            btnVer.setAttribute('class', 'btn');
            btnVer.setAttribute('data-bs-toggle', 'modal');
            btnVer.setAttribute('data-bs-target', '#exampleModal');

            let imagen = document.createElement('img')
            imagen.setAttribute('src', `${element.foto}`);
            imagen.setAttribute('id', `${element.id}`);
            imagen.setAttribute('class', 'populares');

            btnVer.appendChild(imagen);
            fragmento.appendChild(btnVer);

            imagenJaponesas.appendChild(fragmento);


        }
        if (element.id > 12 && element.id <= 18) {

            let fragmento = document.createDocumentFragment();

            const btnVer = document.createElement('button');
            btnVer.setAttribute('class', 'btn');
            btnVer.setAttribute('data-bs-toggle', 'modal');
            btnVer.setAttribute('data-bs-target', '#exampleModal');

            let imagen = document.createElement('img')
            imagen.setAttribute('src', `${element.foto}`);
            imagen.setAttribute('id', `${element.id}`);
            imagen.setAttribute('class', 'populares');

            btnVer.appendChild(imagen);
            fragmento.appendChild(btnVer);

            imagenEEUU.appendChild(fragmento);

        }

    });

}

//obtener el id de la cards oprimida
imagenPopulares.addEventListener('click', (e) => {
    mostrarModal(e.target.id);
});

//obtener el id de la cards oprimida
imagenJaponesas.addEventListener('click', (e) => {
    mostrarModal(e.target.id);
});

//obtener el id de la cards oprimida
imagenEEUU.addEventListener('click', (e) => {
    mostrarModal(e.target.id);
});

function mostrarModal(id) {

    body.innerHTML = '';

    peliculas.forEach(element => {
        if (id == element.id) {
            body.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">${element.nombre}</h2><br>
                    </div>
                    <div class="modal-body">

                        <div id="imgPeli" class = "imgPeli">
                            <img src="${element.foto}" width="50%">
                        </div>
                        <br><br>

                        <h2>Información</h2><br>

                        <p id="informacionPeli">
                           ${element.informacion}
                        </p>
                        
                        <br><br> 

                        <a href="./index.html" class='regresar'> Atras </button><br>
                        
                    </div>
                </div>
        </div> <br>

        `;
        }
    });

}

series.addEventListener('click', (e) => {
    e.preventDefault();
    categorias(e.target.id);

});

pelis.addEventListener('click', (e) => {
    e.preventDefault();
    categorias(e.target.id);

});



function categorias(cate) {

    body.innerHTML = '';

    let fragmento = document.createDocumentFragment();
    let div = document.createElement('div');
    div.setAttribute('id', 'diva');
    div.setAttribute('class', 'diva');

    let imagenPopu = document.createElement('div');
    imagenPopu.setAttribute('id', 'imagenPopulares');
    imagenPopu.setAttribute('class', 'imagenPopulares');

    let imagenJapo = document.createElement('div');
    imagenJapo.setAttribute('id', 'imagenJaponesas');
    imagenJapo.setAttribute('class', 'imagenJaponesas');

    let imagenEU = document.createElement('div');
    imagenEU.setAttribute('id', 'imagenEEUU');
    imagenEU.setAttribute('class', 'imagenEEUU');

    fragmento.appendChild(div);
    fragmento.appendChild(imagenPopu)
    fragmento.appendChild(imagenJapo)
    fragmento.appendChild(imagenEU)
    body.appendChild(fragmento);

    let diva = document.getElementById('diva');

    diva.style.display = 'flex';
    diva.style.justifyContent = 'center';
    diva.style.alignItems = 'center';
    diva.style.flexWrap = 'wrap';

    peliculas.forEach(element => {

        if (cate == element.categoria) {

            diva.innerHTML += `

            <button class="btn">
                    <img  id= "${element.id}" class="populares" src="${element.foto}"
                </button>
            </div>
        `;

        }
    });


    //obtener el id de la cards oprimida
    diva.addEventListener('click', (e) => {
        mostrarModal2(e.target.id);
        console.log(e.target.id);

    });

    function mostrarModal2(ids) {
        body.innerHTML = '';

        peliculas.forEach(element => {
            if (ids == element.id) {
                body.innerHTML = `<br><div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">${element.nombre}</h2><br>
                    </div>
                    <div class="modal-body">

                        <div id="imgPeli" class = "imgPeli">
                            <img src="${element.foto}" width="50%">
                        </div>
                        <br><br>

                        <h2>Información</h2><br>

                        <p id="informacionPeli">
                           ${element.informacion}
                        </p>
                        
                        <br><br> 
                    </div>
                </div>
        </div> <br>

        `
            }
        });

    }
}
