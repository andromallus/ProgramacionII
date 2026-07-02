const tareas = JSON.parse(localStorage.getItem("tareas")) || []

const botonAgregar = document.getElementById("agregarTarea")

const inputTarea = document.getElementById("inputTarea")

const lista = document.getElementById("lista")


botonAgregar.addEventListener("click", function () { agregarTarea() })

inputTarea.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarTarea()
    }
})


function agregarTarea() {
    const tarea = inputTarea.value
    if (tarea.length > 0) {
        // alert("Tarea agregada: " + tarea)
        tareas.push({ texto: tarea, completada: false })
        inputTarea.value = ""
        guardarTareas()
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
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = tarea.completada
        checkbox.addEventListener("change", function () { toggleTarea(index) })

        const botonEliminar = document.createElement("button")
        botonEliminar.textContent = "X"
        botonEliminar.className = "botonEliminar"
        botonEliminar.addEventListener("click", function () { eliminarTarea(index) })

        const li = document.createElement("li")
        li.appendChild(checkbox)
        li.appendChild(document.createTextNode(tarea.texto))
        li.appendChild(botonEliminar)

        if (tarea.completada) {
            li.style.textDecoration = "line-through"
            li.style.color = "#888"
        }

        lista.appendChild(li)
    })
}

function toggleTarea(index) {
    // alert("esta llegando al toggle")
    tareas[index].completada = !tareas[index].completada
    guardarTareas()
    renderizarTareas()
}

function eliminarTarea(index) {
    tareas.splice(index, 1)
    renderizarTareas()
}

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas))
}


renderizarTareas();
