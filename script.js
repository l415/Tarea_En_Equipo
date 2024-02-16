// Array para almacenar los datos de los alumnos
let alumnos = [
    { 
        nombre: "Juan", 
        apellido: "Pérez", 
        numeroCuenta: "20210001",
        edad: 22,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacionEspanol: Math.floor(Math.random()*5) + 6,
        calificacionMatematicas: Math.floor(Math.random()*5) + 6,
        calificacionIngles: Math.floor(Math.random()*5) + 6,
        calificacioncomputacion: Math.floor(Math.random()*5) + 6,
        materias: {
            español: false,
            computacion: false,
            ingles: false,
            matematicas: false
        }
    },
    { 
        nombre: "María", 
        apellido: "García", 
        numeroCuenta: "20210002",
        edad: 20,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacionEspanol: Math.floor(Math.random()*5) + 6,
        calificacionMatematicas: Math.floor(Math.random()*5) + 6,
        calificacionIngles: Math.floor(Math.random()*5) + 6,
        calificacioncomputacion: Math.floor(Math.random()*5) + 6,
        materias: {
            español: false,
            computacion: false,
            ingles: false,
            matematicas: false
        }
    },
    { 
        nombre: "Pedro", 
        apellido: "Martínez", 
        numeroCuenta: "20210003",
        edad: 21,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacionEspanol: Math.floor(Math.random()*5) + 6,
        calificacionMatematicas: Math.floor(Math.random()*5) + 6,
        calificacionIngles: Math.floor(Math.random()*5) + 6,
        calificacioncomputacion: Math.floor(Math.random()*5) + 6,
        materias: {
            español: false,
            computacion: false,
            ingles: false,
            matematicas: false
        }
    },
    { 
        nombre: "Luisa", 
        apellido: "Rodríguez", 
        numeroCuenta: "20210004",
        edad: 19,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacionEspanol: Math.floor(Math.random()*5) + 6,
        calificacionMatematicas: Math.floor(Math.random()*5) + 6,
        calificacionIngles: Math.floor(Math.random()*5) + 6,
        calificacioncomputacion: Math.floor(Math.random()*5) + 6,
        materias: {
            español: false,
            computacion: false,
            ingles: false,
            matematicas: false
        }
    },
    { 
        nombre: "Carlos", 
        apellido: "Sánchez", 
        numeroCuenta: "20210005",
        edad: 23,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacionEspanol: Math.floor(Math.random()*5) + 6,
        calificacionMatematicas: Math.floor(Math.random()*5) + 6,
        calificacionIngles: Math.floor(Math.random()*5) + 6,
        calificacioncomputacion: Math.floor(Math.random()*5) + 6,
        materias: {
            español: false,
            computacion: false,
            ingles: false,
            matematicas: false
        }
    },
    { 
        nombre: "Ana", 
        apellido: "Hernández", 
        numeroCuenta: "20210006",
        edad: 20,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacionEspanol: Math.floor(Math.random()*5) + 6,
        calificacionMatematicas: Math.floor(Math.random()*5) + 6,
        calificacionIngles: Math.floor(Math.random()*5) + 6,
        calificacioncomputacion: Math.floor(Math.random()*5) + 6,
        materias: {
            español: false,
            computacion: false,
            ingles: false,
            matematicas: false
        }
    },
    { 
        nombre: "Javier", 
        apellido: "López", 
        numeroCuenta: "20210007",
        edad: 22,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacionEspanol: Math.floor(Math.random()*5) + 6,
        calificacionMatematicas: Math.floor(Math.random()*5) + 6,
        calificacionIngles: Math.floor(Math.random()*5) + 6,
        calificacioncomputacion: Math.floor(Math.random()*5) + 6,
        materias: {
            español: false,
            computacion: false,
            ingles: false,
            matematicas: false
        }
    },
    { 
        nombre: "Laura", 
        apellido: "Díaz", 
        numeroCuenta: "20210008",
        edad: 21,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacionEspanol: Math.floor(Math.random()*5) + 6,
        calificacionMatematicas: Math.floor(Math.random()*5) + 6,
        calificacionIngles: Math.floor(Math.random()*5) + 6,
        calificacioncomputacion: Math.floor(Math.random()*5) + 6,
        materias: {
            español: false,
            computacion: false,
            ingles: false,
            matematicas: false
        }
    },
    { 
        nombre: "Miguel", 
        apellido: "Gómez", 
        numeroCuenta: "20210009",
        edad: 20,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacionEspanol: Math.floor(Math.random()*5) + 6,
        calificacionMatematicas: Math.floor(Math.random()*5) + 6,
        calificacionIngles: Math.floor(Math.random()*5) + 6,
        calificacioncomputacion: Math.floor(Math.random()*5) + 6,
        materias: {
            español: false,
            computacion: false,
            ingles: false,
            matematicas: false
        }
    },
    { 
        nombre: "Sofía", 
        apellido: "Muñoz", 
        numeroCuenta: "20210010",
        edad: 19,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacion: Math.floor(Math.random() * 5) + 6,
        calificacionEspanol: Math.floor(Math.random()*5) + 6,
        calificacionMatematicas: Math.floor(Math.random()*5) + 6,
        calificacionIngles: Math.floor(Math.random()*5) + 6,
        calificacioncomputacion: Math.floor(Math.random()*5) + 6,
        materias: {
            español: false,
            computacion: false,
            ingles: false,
            matematicas: false
        }
    }
];

// Función para mostrar los alumnos en la lista
function mostrarAlumnos() {
    const lista = document.getElementById("lista-alumnos");
    lista.innerHTML = ""; // Limpiamos la lista antes de volver a mostrar los alumnos

    alumnos.forEach(function(alumno, index) {
        if (index % 5 === 0) { // Cada 5 alumnos, comienza una nueva fila
            lista.innerHTML += '<div class="w-100"></div>'; // Agrega un separador de fila
        }

        const card = document.createElement("div");
        card.classList.add("col-md-2", "mb-4");
        
        // Contenido de la tarjeta del alumno
        const contenido = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${alumno.nombre} ${alumno.apellido}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Número de cuenta: ${alumno.numeroCuenta}</h6>
                    <ul class="list-unstyled">
                        ${Object.keys(alumno.materias).map(materia => `<li><input type="checkbox" ${alumno.materias[materia] ? 'checked' : ''} onclick="marcarMateria(${index}, '${materia}')"> ${materia.charAt(0).toUpperCase() + materia.slice(1)}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        card.innerHTML = contenido;
        lista.appendChild(card);
    });
}

// Función para marcar o desmarcar una materia
function marcarMateria(indiceAlumno, materia) {
    alumnos[indiceAlumno].materias[materia] = !alumnos[indiceAlumno].materias[materia];
}

// Función para agregar un nuevo alumno a la lista
function agregarAlumno() {
    const inputNombre = document.getElementById("nombre-alumno");
    const inputApellido = document.getElementById("apellido-alumno");
    const inputNumeroCuenta = document.getElementById("numero-cuenta-alumno");
    const inputEdad = document.getElementById("edad-alumno"); // Nuevo campo de edad
    const inputCalificacion = document.getElementById("calificacion-alumno"); // Nuevo campo de calificación

    const nombre = inputNombre.value.trim(); 
    const apellido = inputApellido.value.trim(); 
    const numeroCuenta = inputNumeroCuenta.value.trim(); 
    const edad = inputEdad.value.trim(); // Obtener el valor del campo de edad
    const calificacion = inputCalificacion.value.trim(); // Obtener el valor del campo de calificación

    if (nombre !== "" && apellido !== "" && numeroCuenta !== "" && edad !== "" && calificacion !== "") { // Verificar que todos los campos estén completos
        const nuevoAlumno = {
            nombre: nombre,
            apellido: apellido,
            numeroCuenta: numeroCuenta,
            edad: parseInt(edad), // Convertir la edad a número entero
            calificacion: parseFloat(calificacion), // Convertir la calificación a número decimal
            materias: {
                español: false,
                computacion: false,
                ingles: false,
                matematicas: false
            }
        };
        alumnos.push(nuevoAlumno); 
        mostrarAlumnos(); 
        inputNombre.value = ""; 
        inputApellido.value = ""; 
        inputNumeroCuenta.value = ""; 
        inputEdad.value = ""; // Limpiar el campo de edad después de agregar el alumno
        inputCalificacion.value = ""; // Limpiar el campo de calificación después de agregar el alumno
    } else {
        alert("Por favor, completa todos los campos para agregar al alumno.");
    }
}

// Función para inscribir alumnos en la materia de español
function inscribirAlumno() {
    const listaEspañol = document.getElementById("lista-espanol");
    const tab3Content = document.getElementById("tab3"); // Contenedor del tab 3

    listaEspañol.innerHTML = ""; // Limpiamos la lista antes de volver a mostrar los alumnos inscritos en español

    alumnos.forEach(function(alumno) {
        if (alumno.materias.español) {
            const item = document.createElement("div");
            item.textContent = `${alumno.nombre} ${alumno.apellido} - ${alumno.numeroCuenta}`;
            listaEspañol.appendChild(item);

            // Crear tarjeta con los datos completos del alumno
            const card = document.createElement("div");
            card.classList.add("card", "mb-3", "alumno");
            card.setAttribute("data-calificacion", alumno.calificacion); // Añadir el atributo "data-calificacion" con la calificación del alumno

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = `${alumno.nombre} ${alumno.apellido}`;

            const cardSubtitle = document.createElement("h6");
            cardSubtitle.classList.add("card-subtitle", "mb-2", "text-muted");
            cardSubtitle.textContent = `Número de cuenta: ${alumno.numeroCuenta}`;

            const edad = document.createElement("p");
            edad.classList.add("card-text");
            edad.textContent = `Edad: ${alumno.edad}`;

            const calificacion = document.createElement("p");
            calificacion.classList.add("card-text", "calificacion");
            calificacion.textContent = `Calificación: ${alumno.calificacion}`;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardSubtitle);
            cardBody.appendChild(edad);
            cardBody.appendChild(calificacion);

            card.appendChild(cardBody);
            tab3Content.appendChild(card);
        }
    });

    // Mostrar las calificaciones
    mostrarCalificaciones();

    // Ocultamos el tab actual y mostramos el tab 3
    document.getElementById('tab1').style.display = 'none';
    document.getElementById('tab3').style.display = 'block';

    // Marcamos el enlace del tab 3 como activo y desactivamos los otros
    var tabLinks = document.querySelectorAll('.nav-link');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }
    document.querySelector("a[href='#tab3']").classList.add('active');

    // Calcular y mostrar el promedio después de inscribir alumnos en español
    mostrarPromedio();
}

// Función para cambiar entre tabs
function openTab(tabId) {
    // Ocultar todos los tabs y quitar la clase 'active' de los enlaces de los tabs
    var tabs = document.querySelectorAll('.tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    var tabLinks = document.querySelectorAll('.nav-link');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }

    // Mostrar el tab seleccionado y marcar su enlace como 'active'
    document.getElementById(tabId).style.display = 'block';
    document.querySelector("a[href='#" + tabId + "']").classList.add('active');
}

// Mostrar el primer tab por defecto al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    openTab('tab1');
    mostrarAlumnos();
});

// Función para buscar un alumno
function buscarAlumno() {
    const input = document.getElementById("buscar-alumno");
    const query = input.value.toLowerCase();
    const resultados = document.getElementById("resultado-busqueda");
    resultados.innerHTML = ""; // Limpiamos los resultados anteriores

    let alumnoEncontrado = false;

    alumnos.forEach(function(alumno) {
        const nombreCompleto = `${alumno.nombre} ${alumno.apellido}`.toLowerCase();
        const numeroCuenta = alumno.numeroCuenta.toLowerCase();

        // Buscamos coincidencias en el nombre completo y número de cuenta
        if (nombreCompleto.includes(query) || numeroCuenta.includes(query)) {
            // Creamos un elemento <div> para mostrar el alumno
            const divAlumno = document.createElement("div");
            divAlumno.textContent = `${alumno.nombre} ${alumno.apellido} - ${alumno.numeroCuenta}`;
            
            // Si hay coincidencia, agregamos la clase "bg-danger" para resaltar la tarjeta en rojo
            divAlumno.classList.add("bg-danger");
        
            // Agregamos el alumno resaltado al resultado de la búsqueda
            resultados.appendChild(divAlumno);

            alumnoEncontrado = true;
        }
    });

    if (!alumnoEncontrado) {
        resultados.textContent = "Alumno no inscrito";
    }
}

// Función para mostrar las calificaciones de los alumnos inscritos en español
function mostrarCalificaciones() {
    const listaAlumnos = document.getElementById("lista-espanol");
    const resultadoCalificaciones = document.createElement("div");
    resultadoCalificaciones.classList.add("mt-4");

    alumnos.forEach(function(alumno) {
        if (alumno.materias.español) {
            const calificacion = document.createElement("p");
            calificacion.textContent = `Calificación: ${alumno.calificacion}`;
            resultadoCalificaciones.appendChild(calificacion);
        }
    });

    listaAlumnos.appendChild(resultadoCalificaciones);
}

// Función para calcular y mostrar el promedio de las calificaciones
function mostrarPromedio() {
    const listaAlumnos = document.getElementById("lista-espanol");
    const resultadoPromedio = document.getElementById("resultado-promedio");
    resultadoPromedio.innerHTML = ""; // Limpiar el contenido previo

    const calificaciones = Array.from(listaAlumnos.querySelectorAll('.calificacion')).map(calificacionElement => {
        const calificacion = parseFloat(calificacionElement.textContent.split(': ')[1]);
        const listItem = document.createElement("li");
        listItem.textContent = `Calificación: ${calificacion}`;
        resultadoPromedio.appendChild(listItem);
        return calificacion;
    });

    // Calcula el promedio y muéstralo
    const totalCalificaciones = calificaciones.reduce((acc, curr) => acc + curr, 0);
    const promedio = totalCalificaciones / calificaciones.length;
    const promedioItem = document.createElement("li");
    promedioItem.textContent = `Promedio: ${promedio.toFixed(2)}`;
    resultadoPromedio.appendChild(promedioItem);
}

function inscribirAlumnosComputacion() {
    const listaComputacion = document.getElementById("lista-computacion");
    const tab2Content = document.getElementById("tab2"); // Contenedor del tab 2

    listaComputacion.innerHTML = ""; // Limpiamos la lista antes de volver a mostrar los alumnos inscritos en computación

    alumnos.forEach(function(alumno) {
        if (alumno.materias.computacion) {
            const item = document.createElement("div");
            item.textContent = `${alumno.nombre} ${alumno.apellido} - ${alumno.numeroCuenta}`;
            listaComputacion.appendChild(item);

            // Crear tarjeta con los datos completos del alumno
            const card = document.createElement("div");
            card.classList.add("card", "mb-3", "alumno");
            card.setAttribute("data-calificacion", alumno.calificacion); // Añadir el atributo "data-calificacion" con la calificación del alumno

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = `${alumno.nombre} ${alumno.apellido}`;

            const cardSubtitle = document.createElement("h6");
            cardSubtitle.classList.add("card-subtitle", "mb-2", "text-muted");
            cardSubtitle.textContent = `Número de cuenta: ${alumno.numeroCuenta}`;

            const edad = document.createElement("p");
            edad.classList.add("card-text");
            edad.textContent = `Edad: ${alumno.edad}`;

            const calificacion = document.createElement("p");
            calificacion.classList.add("card-text", "calificacion");
            calificacion.textContent = `Calificación: ${alumno.calificacion}`;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardSubtitle);
            cardBody.appendChild(edad);
            cardBody.appendChild(calificacion);

            card.appendChild(cardBody);
            tab2Content.appendChild(card);
        }
    });

    // Mostrar las calificaciones
    mostrarCalificaciones();

    // Ocultamos el tab actual y mostramos el tab 2
    document.getElementById('tab1').style.display = 'none';
    document.getElementById('tab2').style.display = 'block';

    // Marcamos el enlace del tab 2 como activo y desactivamos los otros
    var tabLinks = document.querySelectorAll('.nav-link');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }
    document.querySelector("a[href='#tab2']").classList.add('active');

    // Calcular y mostrar el promedio después de inscribir alumnos en computación
    mostrarPromedio();
}
// Función para buscar un alumno en la materia de computación
function buscarAlumnoComputacion() {
    const input = document.getElementById("buscar-alumno-computacion");
    const query = input.value.toLowerCase();
    const resultados = document.getElementById("lista-computacion");
    resultados.innerHTML = ""; // Limpiamos los resultados anteriores

    let alumnoEncontrado = false;

    alumnos.forEach(function(alumno) {
        if (alumno.materias.computacion) {
            const nombreCompleto = `${alumno.nombre} ${alumno.apellido}`.toLowerCase();
            const numeroCuenta = alumno.numeroCuenta.toLowerCase();

            // Buscamos coincidencias en el nombre completo y número de cuenta
            if (nombreCompleto.includes(query) || numeroCuenta.includes(query)) {
                // Creamos un elemento <div> para mostrar el alumno
                const divAlumno = document.createElement("div");
                divAlumno.textContent = `${alumno.nombre} ${alumno.apellido} - ${alumno.numeroCuenta}`;
                
                // Si hay coincidencia, agregamos la clase "bg-danger" para resaltar la tarjeta en rojo
                divAlumno.classList.add("bg-danger");
            
                // Agregamos el alumno resaltado al resultado de la búsqueda
                resultados.appendChild(divAlumno);

                alumnoEncontrado = true;
            }
        }
    });

    if (!alumnoEncontrado) {
        resultados.textContent = "Alumno no inscrito en computación";
    }
}
// Función para buscar un alumno en la materia de inglés
function buscarAlumnoIngles() {
    const input = document.getElementById("buscar-alumno-ingles");
    const query = input.value.toLowerCase();
    const resultados = document.getElementById("lista-ingles");
    resultados.innerHTML = ""; // Limpiamos los resultados anteriores

    let alumnoEncontrado = false;

    alumnos.forEach(function(alumno) {
        if (alumno.materias.ingles) {
            const nombreCompleto = `${alumno.nombre} ${alumno.apellido}`.toLowerCase();
            const numeroCuenta = alumno.numeroCuenta.toLowerCase();

            // Buscamos coincidencias en el nombre completo y número de cuenta
            if (nombreCompleto.includes(query) || numeroCuenta.includes(query)) {
                // Creamos un elemento <div> para mostrar el alumno
                const divAlumno = document.createElement("div");
                divAlumno.textContent = `${alumno.nombre} ${alumno.apellido} - ${alumno.numeroCuenta}`;
                
                // Si hay coincidencia, agregamos la clase "bg-danger" para resaltar la tarjeta en rojo
                divAlumno.classList.add("bg-danger");
            
                // Agregamos el alumno resaltado al resultado de la búsqueda
                resultados.appendChild(divAlumno);

                alumnoEncontrado = true;
            }
        }
    });

    if (!alumnoEncontrado) {
        resultados.textContent = "Alumno no inscrito en inglés";
    }
}
// Función para inscribir alumnos en la materia de inglés
function inscribirAlumnosIngles() {
    const listaIngles = document.getElementById("lista-ingles");
    const tab4Content = document.getElementById("tab4"); // Contenedor del tab 4 (Inglés)

    listaIngles.innerHTML = ""; // Limpiamos la lista antes de volver a mostrar los alumnos inscritos en inglés

    alumnos.forEach(function(alumno) {
        if (alumno.materias.ingles) {
            const item = document.createElement("div");
            item.textContent = `${alumno.nombre} ${alumno.apellido} - ${alumno.numeroCuenta}`;
            listaIngles.appendChild(item);

            // Crear tarjeta con los datos completos del alumno
            const card = document.createElement("div");
            card.classList.add("card", "mb-3", "alumno");
            card.setAttribute("data-calificacion", alumno.calificacion); // Añadir el atributo "data-calificacion" con la calificación del alumno

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = `${alumno.nombre} ${alumno.apellido}`;

            const cardSubtitle = document.createElement("h6");
            cardSubtitle.classList.add("card-subtitle", "mb-2", "text-muted");
            cardSubtitle.textContent = `Número de cuenta: ${alumno.numeroCuenta}`;

            const edad = document.createElement("p");
            edad.classList.add("card-text");
            edad.textContent = `Edad: ${alumno.edad}`;

            const calificacion = document.createElement("p");
            calificacion.classList.add("card-text", "calificacion");
            calificacion.textContent = `Calificación: ${alumno.calificacion}`;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardSubtitle);
            cardBody.appendChild(edad);
            cardBody.appendChild(calificacion);

            card.appendChild(cardBody);
            tab4Content.appendChild(card);
        }
    });

    // Ocultamos el tab actual y mostramos el tab 4 (Inglés)
    document.getElementById('tab1').style.display = 'none';
    document.getElementById('tab4').style.display = 'block';

    // Marcamos el enlace del tab 4 como activo y desactivamos los otros
    var tabLinks = document.querySelectorAll('.nav-link');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }
    document.querySelector("a[href='#tab4']").classList.add('active');

    // Calcular y mostrar el promedio después de inscribir alumnos en inglés
    mostrarPromedio();
}
function flipCard(card) {
    card.classList.toggle('flip'); // Alternar la clase 'flip' en la tarjeta al hacer clic
}
function mostrarInformacionAlumno(alumno) {
    // Crear un mensaje con la información del alumno
    var mensaje = `Información del alumno:
    Nombre: ${alumno.querySelector("#nombre-alumno").value}
    Apellido: ${alumno.querySelector("#apellido-alumno").value}
    Número de cuenta: ${alumno.querySelector("#numero-cuenta-alumno").value}
    Edad: ${alumno.querySelector("#edad-alumno").value}
    Calificación: ${alumno.querySelector("#calificacion-alumno").value}`;

    // Mostrar la información del alumno en un cuadro de alerta
    alert(mensaje);
}
// Función para ordenar los alumnos por nombre en la pestaña de Computación
function ordenarPorNombreComputacion() {
    var listaAlumnos = document.getElementById("lista-computacion");
    var items = listaAlumnos.getElementsByClassName("alumno-card");
    var sortedItems = Array.from(items).sort((a, b) => {
        var nombreA = a.querySelector(".nombre").innerText.trim();
        var nombreB = b.querySelector(".nombre").innerText.trim();
        return nombreA.localeCompare(nombreB);
    });
    listaAlumnos.innerHTML = "";
    sortedItems.forEach(item => {
        listaAlumnos.appendChild(item);
    });
}

// Función para ordenar los alumnos por edad en la pestaña de Computación
function ordenarPorEdadComputacion() {
    var listaAlumnos = document.getElementById("lista-computacion");
    var items = listaAlumnos.getElementsByClassName("alumno-card");
    var sortedItems = Array.from(items).sort((a, b) => {
        var edadA = parseInt(a.querySelector(".edad").innerText.trim());
        var edadB = parseInt(b.querySelector(".edad").innerText.trim());
        return edadA - edadB;
    });
    listaAlumnos.innerHTML = "";
    sortedItems.forEach(item => {
        listaAlumnos.appendChild(item);
    });
}

// Función para ordenar los alumnos por nombre en la pestaña de Español
function ordenarPorNombreEspanol() {
    var listaAlumnos = document.getElementById("lista-espanol");
    var items = listaAlumnos.getElementsByClassName("alumno-card");
    var sortedItems = Array.from(items).sort((a, b) => {
        var nombreA = a.querySelector(".nombre").innerText.trim();
        var nombreB = b.querySelector(".nombre").innerText.trim();
        return nombreA.localeCompare(nombreB);
    });
    listaAlumnos.innerHTML = "";
    sortedItems.forEach(item => {
        listaAlumnos.appendChild(item);
    });
}

// Función para ordenar los alumnos por edad en la pestaña de Español
function ordenarPorEdadEspanol() {
    var listaAlumnos = document.getElementById("lista-espanol");
    var items = listaAlumnos.getElementsByClassName("alumno-card");
    var sortedItems = Array.from(items).sort((a, b) => {
        var edadA = parseInt(a.querySelector(".edad").innerText.trim());
        var edadB = parseInt(b.querySelector(".edad").innerText.trim());
        return edadA - edadB;
    });
    listaAlumnos.innerHTML = "";
    sortedItems.forEach(item => {
        listaAlumnos.appendChild(item);
    });
}

// Función para ordenar los alumnos por nombre en la pestaña de Inglés
function ordenarPorNombreIngles() {
    var listaAlumnos = document.getElementById("lista-ingles");
    var items = listaAlumnos.getElementsByClassName("alumno-card");
    var sortedItems = Array.from(items).sort((a, b) => {
        var nombreA = a.querySelector(".nombre").innerText.trim();
        var nombreB = b.querySelector(".nombre").innerText.trim();
        return nombreA.localeCompare(nombreB);
    });
    listaAlumnos.innerHTML = "";
    sortedItems.forEach(item => {
        listaAlumnos.appendChild(item);
    });
}

// Función para ordenar los alumnos por nombre
function ordenarPorNombre() {
    var listaAlumnos = document.getElementById("lista-computacion");
    var items = listaAlumnos.getElementsByClassName("card");
    var sortedItems = Array.from(items).sort(function(a, b) {
        var nombreA = a.getElementsByClassName("nombre")[0].innerText.toLowerCase();
        var nombreB = b.getElementsByClassName("nombre")[0].innerText.toLowerCase();
        if (nombreA < nombreB) {
            return -1;
        }
        if (nombreA > nombreB) {
            return 1;
        }
        return 0;
    });
    for (var i = 0; i < sortedItems.length; i++) {
        listaAlumnos.appendChild(sortedItems[i]);
    }
}

// Función para ordenar los alumnos por edad
function ordenarPorEdad() {
    var listaAlumnos = document.getElementById("lista-computacion");
    var items = listaAlumnos.getElementsByClassName("card");
    var sortedItems = Array.from(items).sort(function(a, b) {
        var edadA = parseInt(a.getElementsByClassName("edad")[0].innerText);
        var edadB = parseInt(b.getElementsByClassName("edad")[0].innerText);
        return edadA - edadB;
    });
    for (var i = 0; i < sortedItems.length; i++) {
        listaAlumnos.appendChild(sortedItems[i]);
    }
}
