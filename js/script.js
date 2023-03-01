// Función para mostrar/ocultar secciones
function mostrarSeccion(seccionId) {
    let seccion = document.getElementById(seccionId);
    if (seccion.style.display === 'none') {
      seccion.style.display = 'block';
    } else {
      seccion.style.display = 'none';
    }
  }
  
  // Agregamos los eventos a los links
  let links = document.querySelectorAll('nav a');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
      e.preventDefault();
      let seccionId = this.getAttribute('href').replace('#', '');
      mostrarSeccion(seccionId);
    });
  }