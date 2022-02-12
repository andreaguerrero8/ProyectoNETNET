const FORMULARIO = document.getElementById('formulario');
let regi = []; // arreglo para guardar los objetos con los datos de los registros


FORMULARIO.addEventListener('submit', (e) => {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;

    if (isNaN(telefono)) {
        alert('Ingrese números en el campo Telefono');

    } else if (nombre == '' || apellido == '' || direccion == '' || telefono == '') {
        alert('LLene todos los campos');

    } else {

        // rsgitros
        let registros =
        {
            nombre: `${nombre}`,
            apellido: `${apellido}`,
            telefono: `${telefono}`,
            direccion: `${direccion}`,
        }

        regi.push(registros); // agregar objeto con datos de registro al arreglo


        //guardar el objeto en el localStorage
        localStorage.setItem('Registros', JSON.stringify(regi));

        alert('Su registro fue exitoso, Gracias por confiar en nosotros')
        

        //traer el objeto guardado en el localStoragwe
        let datosLocal = localStorage.getItem('Registros')

        console.log(JSON.parse(datosLocal));


        FORMULARIO.reset();


    }

});
