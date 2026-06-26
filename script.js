const tareas = []

const botonAgregar = document.getElementById("agregarTarea")

const inputTarea = document.getElementById("inputTarea")

const lista = document.getElementById("lista")


botonAgregar.addEventListener("click", function () { agregarTarea() })

function agregarTarea() {
    const tarea = inputTarea.value
    if (tarea.length > 0) {
        // alert("Tarea agregada: " + tarea)
        tareas.push(tarea)
        renderizarTareas()
    }
    else {
        alert("Debes ingresar una tarea")
    }

}

function renderizarTareas() {

    // alert("esta llegando al render")
    lista.innerHTML = ""
    tareas.forEach(function (tarea, index) {
        const botonEliminar = document.createElement("button")
        botonEliminar.textContent = "X"
        botonEliminar.className = "botonEliminar"
        botonEliminar.addEventListener("click", function () { eliminarTarea(index) })

        const li = document.createElement("li")
        li.textContent = tarea
        li.appendChild(botonEliminar)

        lista.appendChild(li)
    })
}

function eliminarTarea(index) {
    tareas.splice(index, 1)
    renderizarTareas()
}