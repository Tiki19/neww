document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.getElementById('contenedor');
    let isDragging = false;
    let startX;
    let scrollLeft;
  
    contenedor.addEventListener('mousedown', function(e) {
      isDragging = true;
      startX = e.pageX - contenedor.offsetLeft;
      scrollLeft = contenedor.scrollLeft;
      contenedor.style.cursor = 'grabbing'; // Cambia el cursor mientras se arrastra
    });
  
    contenedor.addEventListener('mousemove', function(e) {
      if (isDragging) {
        const x = e.pageX - contenedor.offsetLeft;
        const walk = (x - startX) * 2; // Ajusta la velocidad de desplazamiento
        contenedor.scrollLeft = scrollLeft - walk;
      }
    });
  
    document.addEventListener('mouseup', function() {
      isDragging = false;
      contenedor.style.cursor = 'grab'; // Vuelve al cursor normal después de soltar
    });
  
    contenedor.addEventListener('mouseleave', function() {
      isDragging = false;
      contenedor.style.cursor = 'grab'; // Vuelve al cursor normal al salir del contenedor
    });
  });