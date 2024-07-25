// Obtener los elementos de la tabla y los inputs
const contenedorFilas = document.querySelector('#contenedor-filas');
const inputs = document.querySelectorAll('.registro input');

// Obtener el botón "Guardar"
const botonGuardar = document.querySelector('.botones input[value="Guardar"]');

// Agregar un evento click al botón "Guardar"
botonGuardar.addEventListener('click', (e) => {
  // Prevenir el comportamiento predeterminado del botón submit
  e.preventDefault();

  // Crear una nueva fila
  const fila = document.createElement('div');
  fila.classList.add('fila');

  // Iterar sobre los inputs y agregar un nuevo elemento <div> con el valor del input a la fila
  inputs.forEach((input, index) => {
    const columna = document.createElement('div');
    columna.classList.add('columna');
    columna.textContent = input.value;
    fila.appendChild(columna);
  });

  // Agregar la nueva fila a la tabla
  contenedorFilas.appendChild(fila);

  // Limpiar los inputs
  inputs.forEach((input) => input.value = '');
});