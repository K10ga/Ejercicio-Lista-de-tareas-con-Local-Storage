const btnTareas = document.querySelector(".btnTareas");
const pendientes = document.querySelector(".pendientes");
const tareas = document.querySelector(".tareas");

const textoTarea = localStorage.getItem("texto");
if(textoTarea != ""){
    pendientes.textContent=`Guardado: ${textoTarea}`;

}
btnTareas.addEventListener("click", ()=>{
    const texto =tareas.value;
    if(tareas != ""){
        localStorage.setItem(`tareas`, texto);
        pendientes.textContent =`Guardado: ${texto}`;
    }

});
