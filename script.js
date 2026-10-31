/* REFLEXOS DINÂMICOS DO LIQUID GLASS */

const elementosGlass = document.querySelectorAll(".glass");

elementosGlass.forEach(elemento => {
    elemento.addEventListener("pointermove", evento => {
        const rect = elemento.getBoundingClientRect();
        const x = ((evento.clientX - rect.left) / rect.width) * 100;
        const y = ((evento.clientY - rect.top) / rect.height) * 100;

        elemento.style.setProperty("--mx", `${x}%`);
        elemento.style.setProperty("--my", `${y}%`);
    });

    elemento.addEventListener("pointerleave", () => {
        elemento.style.setProperty("--mx", "50%");
        elemento.style.setProperty("--my", "0%");
    });
});