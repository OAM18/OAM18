let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = this.nombre.value;
    const telefono = this.telefono.value;
    const correo = this.correo.value;
    const tema = this.tema.value;
    const mensaje = this.mensaje.value;

    const numeroWhatsApp = "573013746805"; // SIN +

    const texto = `Hola, soy ${nombre}%0A
Teléfono: ${telefono}%0A
Correo: ${correo}%0A
Asunto: ${tema}%0A
Mensaje:%0A${mensaje}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(url, "_blank"); // Abre en una nueva pestaña
    this.reset(); // Limpia el formulario

    // Mostrar mensaje de confirmación
    let confirmacion = document.createElement("p");
    confirmacion.textContent = "✅ Tu mensaje ha sido enviado a WhatsApp. ¡Gracias por contactarme!";
    confirmacion.style.color = "#4CAF50";
    confirmacion.style.marginTop = "10px";
    confirmacion.style.fontWeight = "bold";

    this.appendChild(confirmacion);

    setTimeout(() => {
        confirmacion.remove();
    }, 4000);
});
