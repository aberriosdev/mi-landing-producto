const form = document.querySelector("#registroForm");
const email = document.querySelector("#email");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (email.value.trim() === "") {
        alert("Por favor ingresa tu correo");
    } else {
        alert("Registro exitoso 🚀");
        form.reset();
    }
});