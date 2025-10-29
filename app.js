// === MENÚ DESPLEGABLE ===
document.addEventListener("DOMContentLoaded", () => {
  const equipoBtn = document.getElementById("equipo-btn");
  const submenu = document.getElementById("submenu");

  equipoBtn?.addEventListener("click", () => submenu.classList.toggle("show"));
  document.addEventListener("click", (e) => {
    if (!equipoBtn?.contains(e.target) && !submenu?.contains(e.target)) {
      submenu?.classList.remove("show");
    }
  });

  // === CARRUSEL ===
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prev = carousel.querySelector(".prev, .carousel-btn.prev");
    const next = carousel.querySelector(".next, .carousel-btn.next");

    // 🔹 Detecta el ancho de pantalla para mostrar 1 o 2 ítems
    let visible = window.innerWidth < 768 ? 1 : 2;
    let index = 0;

    const update = () => {
      const max = slides.length - visible;
      if (index < 0) index = max;
      if (index > max) index = 0;
      track.style.transform = `translateX(-${(100 / visible) * index}%)`;
    };

    const move = (dir) => {
      index += dir;
      update();
    };

    prev?.addEventListener("click", () => move(-1));
    next?.addEventListener("click", () => move(1));

    // 🔹 Se actualiza automáticamente si cambia el tamaño de pantalla
    window.addEventListener("resize", () => {
      visible = window.innerWidth < 768 ? 1 : 2;
      update();
    });
  });
});

// === ANIMACIÓN DE FONDO ===
document.addEventListener("DOMContentLoaded", () => {
  const fondos = document.querySelectorAll(".background-slideshow .bg");
  if (!fondos.length) return;

  let index = 0;
  setInterval(() => {
    fondos[index].classList.remove("active");
    index = (index + 1) % fondos.length;
    fondos[index].classList.add("active");
  }, 6000); // cambia cada 6 segundos
});
