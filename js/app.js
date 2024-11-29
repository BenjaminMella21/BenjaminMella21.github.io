const apiUrl = "https://data-arq.onrender.com/usuarios";  // Asegúrate de usar la ruta completa para obtener los usuarios

// Función para iniciar sesión
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(apiUrl);  // Solicita la URL correcta
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);  // Maneja errores de respuesta
      }

      const users = await response.json();  // Convierte la respuesta en JSON

      // Buscar si existe el usuario con la contraseña correcta
      const user = users.find(user => user.username === username && user.password === password);

      if (user) {
        sessionStorage.setItem('username', user.username); // Guardar en sessionStorage
        alert("Inicio de sesión exitoso");
        window.location.href = "dashboard.html"; // Redirigir al panel de usuario u otra página
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Hubo un problema al intentar iniciar sesión.");
    }
  });
});
