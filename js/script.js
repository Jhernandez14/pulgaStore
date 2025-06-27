function mostrarFechaHora() {
    const contenedor = document.getElementById("fecha-hora");
    if (!contenedor) return; // Si no existe el contenedor, no hace nada

    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                   "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    const ahora = new Date();
    const diaSemana = diasSemana[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    const hora = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const segundos = ahora.getSeconds().toString().padStart(2, "0");

    const texto = `Hoy es ${diaSemana} ${dia} de ${mes} de ${año}, y son las ${hora} horas, ${minutos} minutos con ${segundos} segundos.`;
    contenedor.textContent = texto;
}

// Ejecutar al cargar
mostrarFechaHora();

// Actualizar cada segundo
setInterval(mostrarFechaHora, 1000);
