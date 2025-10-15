const btnTareas = document.querySelector(".btnTareas");
const pendientes = document.querySelector(".pendientes");
const tareas = document.querySelector(".tareas");

const textoTarea = localStorage.getItem("texto");
if(textoTarea != ""){
    pendientes.textContent=`Guardado: ${textGuardo}`;

}
btnTareas.addEventListener("click", ()=>{
    const tareas =pendientes.value;
    if(tareas != ""){
        localStorage.setItem(`tareas`, tareas);
        tareas.textContent =`Guardado: ${texto}`;
    }

});
