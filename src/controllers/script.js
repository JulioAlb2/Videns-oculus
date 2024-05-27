import { bst } from "./dependencies.js";
import { Videojuegos } from "../models/Videojuegos.js";

let btn = document.getElementById("btn-add");
btn.addEventListener("click", (event) => {
  // Evita que el formulario se envíe o que ocurra la acción predeterminada
  event.preventDefault();

  let videojuego = document.getElementById("validationTooltip01").value;
  let desarrolladora = document.getElementById("desarrolladora").value;
  let genero = document.getElementById("genero").value;

  let videojuegos = new Videojuegos(videojuego, desarrolladora, genero);
  console.log(bst);

  if (bst.add(videojuegos)) {
    alert("juego registrado");
  } else {
    alert("Registro invalido");
  }
});

let buscar = document.getElementById("btn-buscador");
buscar.addEventListener("click", (event) => {
  event.preventDefault();
  let buscador = document.getElementById("buscador").value;

  if (buscador.length == 0) {
    alert("Introduce nombre de nuevo");
    return;
  }
  let videojuego = bst.search(buscador);
  console.log(bst.search(buscador));
  if (videojuego != null) {
    alert(
      "La desarrolladora es: " +
        videojuego.desarrolladora +
        " Desarrollo el juego: " +
        videojuego.nombre +
        " De genero : " +
        videojuego.categoria
    );
  } else {
    alert("No se encontro a la desarrolladora");
  }

});

let buscarPreOrden = document.getElementById("buscadorPreOrdenBtn");
buscarPreOrden.addEventListener("click", (event) => {
    event.preventDefault();
    let videojuegos = bst.PreOrden();
    console.log(videojuegos + "   *" + videojuegos.length);
    var tblBody = document.getElementById("tbody");

    // Limpiar el contenido anterior de la tabla
    tblBody.innerHTML = "";


        for (var i = 0; i < videojuegos.length; i++) {
            var fila = document.createElement("tr");

            var columnaIndice = document.createElement("td");
            var columnaJuego = document.createElement("td");
            var columnaDesarrolladora = document.createElement("td");
            var columnaGenero = document.createElement("td");

            var textoColumnaIndice = document.createTextNode(i + 1);
            var textoColumnaNombre = document.createTextNode(videojuegos[i].nombre);
            var textoColumnaDesarrolladora = document.createTextNode(videojuegos[i].desarrolladora);
            var textoColumnaGenero = document.createTextNode(videojuegos[i].categoria);

            columnaIndice.appendChild(textoColumnaIndice);
            columnaJuego.appendChild(textoColumnaNombre);
            columnaDesarrolladora.appendChild(textoColumnaDesarrolladora);
            columnaGenero.appendChild(textoColumnaGenero);

            fila.appendChild(columnaIndice);
            fila.appendChild(columnaJuego);
            fila.appendChild(columnaDesarrolladora);
            fila.appendChild(columnaGenero);

            tblBody.appendChild(fila);
        }

  });
  
      let buscarMin = document.getElementById("buscadorMinBtn");
      buscarMin.addEventListener("click",(event)=> {
        event.preventDefault
        let videojuegos = bst.searchMinNode()
        var tblBody = document.getElementById("tbody")
        tblBody.innerHTML = "";
  
          var fila = document.createElement("tr");

          var columnaIndice = document.createElement("td");
          var columnaJuego = document.createElement("td");
          var columnaDesarrolladora = document.createElement("td");
          var columnaGenero = document.createElement("td");

          var textoColumnaIndice = document.createTextNode(1);
          var textoColumnaNombre = document.createTextNode(videojuegos.nombre);
          var textoColumnaDesarrolladora = document.createTextNode(videojuegos.desarrolladora);
          var textoColumnaGenero = document.createTextNode(videojuegos.categoria);

          columnaIndice.appendChild(textoColumnaIndice);
          columnaJuego.appendChild(textoColumnaNombre);
          columnaDesarrolladora.appendChild(textoColumnaDesarrolladora);
          columnaGenero.appendChild(textoColumnaGenero);

          fila.appendChild(columnaIndice);
          fila.appendChild(columnaJuego);
          fila.appendChild(columnaDesarrolladora);
          fila.appendChild(columnaGenero);

          tblBody.appendChild(fila);
        
      });
      let buscarMax = document.getElementById("buscadorMaxBtn");
      buscarMax.addEventListener("click",(event)=> {
        event.preventDefault
        let videojuegos = bst.searchMaxNode()
        var tblBody = document.getElementById("tbody")
        tblBody.innerHTML = "";
  
          var fila = document.createElement("tr");

          var columnaIndice = document.createElement("td");
          var columnaJuego = document.createElement("td");
          var columnaDesarrolladora = document.createElement("td");
          var columnaGenero = document.createElement("td");

          var textoColumnaIndice = document.createTextNode(1);
          var textoColumnaNombre = document.createTextNode(videojuegos.nombre);
          var textoColumnaDesarrolladora = document.createTextNode(videojuegos.desarrolladora);
          var textoColumnaGenero = document.createTextNode(videojuegos.categoria);

          columnaIndice.appendChild(textoColumnaIndice);
          columnaJuego.appendChild(textoColumnaNombre);
          columnaDesarrolladora.appendChild(textoColumnaDesarrolladora);
          columnaGenero.appendChild(textoColumnaGenero);

          fila.appendChild(columnaIndice);
          fila.appendChild(columnaJuego);
          fila.appendChild(columnaDesarrolladora);
          fila.appendChild(columnaGenero);

          tblBody.appendChild(fila);
        
      })
  
  