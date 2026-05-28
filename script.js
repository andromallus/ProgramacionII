const tareas = []

const botonAgregar = document.getElementById("agregarTarea")

const inputTarea = document.getElementById("inputTarea")

const lista = document.getElementById("lista")


botonAgregar.addEventListener("click", function () { agregarTarea() })

function agregarTarea() {
    const tarea = inputTarea.value
    if (tarea.length > 0) {
        alert("Tarea agregada: " + tarea)
    }
    else {
        alert("Debes ingresar una tarea")
    }
    tareas.push(tarea)
    renderizarTareas()
}

function renderizarTareas() {

    alert("esta llegando al render")
    lista.innerHTML = ""
    tareas.forEach(function (tarea) {

        const li = document.createElement("li")
        li.textContent = tarea
        lista.appendChild(li)
    })
}