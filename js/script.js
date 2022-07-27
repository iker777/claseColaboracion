const menu = document.querySelector(".menu");

function displayList(){
  // Crear X del desplegable
  let xElement = `
    <div class="xElement">
      <img class="xElement__img" src="../img/exit.svg"/>
    </div>
  `;
  
  // Selectores
  const header = document.querySelector(".header");
  const lista = document.querySelector(".lista");
  const contenidoLista = lista.innerHTML;
  // Crear lista desplegable
  const listaDesplegable = document.createElement("ul");
  listaDesplegable.classList.add("listaDesplegable");
  listaDesplegable.innerHTML = xElement + contenidoLista;
  listaDesplegable.classList.remove("desaparecerListaDesplegable");
  // insertar lista desplegable
  header.append(listaDesplegable);
  // eliminar lista NO desplegable
  menu.style.display = "none";
  lista.remove();
  // Coger elementos de la lista desplegable
  const elementosListaDesplegable = document.querySelectorAll(".lista__li");
  elementosListaDesplegable.forEach(elemento => elemento.classList.add("lista__li--desplegable"));
  // x button
  xElement = document.querySelector(".xElement");
  xElement.addEventListener("click", ocultarDesplegable);
};

function ocultarDesplegable(){
  document.querySelector(".listaDesplegable").classList.add("desaparecerListaDesplegable");
};

menu.addEventListener("click", displayList);