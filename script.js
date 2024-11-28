// Referencias al modal y al botón
const fullLetterModal = document.getElementById("full-letter");
const modalContent = document.querySelector(".modal-content p");
const letterSection = document.getElementById("carta");
const sorpresaButton = document.getElementById("mostrar-sorpresa");
const boletosContainer = document.querySelector(".boletos-container");
const boletosImg = document.getElementById("boletos");

// Función para mostrar la carta al hacer clic en "Ver Carta"
document.getElementById("ver-carta").addEventListener("click", () => {
    letterSection.classList.remove("hidden");
    letterSection.scrollIntoView({ behavior: "smooth" });
});

// Función para mostrar el modal con la carta completa
function showFullLetter() {
    fullLetterModal.classList.remove("hidden");
    modalContent.innerHTML = `
               Mi amor,<br><br>
        Quiero empezar esta carta pidiéndote perdón. Sé que he cometido muchos errores, y lo que más me duele es saber que mis mentiras han lastimado algo tan valioso como nuestra relación. Nunca fue mi intención hacerte daño, pero entiendo que con mis acciones te hice dudar de mí y de lo que tenemos.<br><br>
        Estos cinco meses contigo han sido de lo más bonito que he vivido, y no quiero que mis fallas arruinen lo que hemos construido juntos. Estoy consciente de que he fallado en ser el hombre que mereces, pero también quiero que sepas que estoy decidido a cambiar. No solo quiero recuperar tu confianza, quiero demostrarte con hechos que podemos salir adelante, que podemos ser nosotros.<br><br>
        He estado reflexionando mucho sobre lo que necesitas de mí y lo que esperas de esta relación. Prometo que voy a poner todo de mi parte para estar a la altura, para escucharte más, ser más honesto y demostrarte que contigo quiero un futuro real.<br><br>
        Compré boletos para que vayamos a ver “Wicked”, porque quiero compartir ese momento contigo, que podamos disfrutar y recordar por qué nos elegimos.<br><br>
        Gracias por todo lo que me has dado hasta ahora, por tu paciencia y por tu amor. Sé que recuperar tu confianza no será fácil, pero estoy dispuesto a hacer lo que sea necesario. Te amo y espero que podamos superar esto juntos.<br><br>
        Con todo mi corazón.<br><br>
        - Osito 🧸💖
    `;
}

// Función para ocultar el modal
function hideFullLetter() {
    fullLetterModal.classList.add("hidden");
}

// Función para mostrar la imagen de los boletos con transición
sorpresaButton.addEventListener("click", () => {
    boletosImg.src = "boleto.jpg"; // Ruta directa a la imagen en la raíz
    boletosContainer.classList.add("show"); // Aplica la clase 'show' para iniciar la transición
});
