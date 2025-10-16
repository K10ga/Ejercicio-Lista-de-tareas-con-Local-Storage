const btnTareas = document.querySelector(".btnTareas");
const pendientes = document.querySelector(".pendientes");
const tareas = document.querySelector(".tareas");

const textoTarea = localStorage.getItem("tareas");
if(textoTarea != ""){
    pendientes.innerHTML = textoTarea;

}
btnTareas.addEventListener("click", ()=>{
    const texto =tareas.value;
    if(texto !== ""){
        const li = document.createElement("li");
        li.textContent = texto;

        li.addEventListener("click", () => {
        li.classList.toggle("completado");
    });


        pendientes.appendChild(li);

        localStorage.setItem(`tareas`, pendientes.innerHTML);

        tareas.value = "";
    }

});

