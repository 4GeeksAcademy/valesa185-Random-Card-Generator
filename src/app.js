window.onload = function() {
  // Arrays que almacenan las posibles cartas
  let icons = ["♠️", "♦️", "♣️", "♥️"];
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  // Un numero random para obtener una posición en el arreglo al azar
  let numRandomIcon = Math.floor(Math.random() * icons.length);
  let numRandomNumbers = Math.floor(Math.random() * numbers.length);

  // Posiciones Random en los arrays
  let randomIcon = icons[numRandomIcon];
  let randomNumbers = numbers[numRandomNumbers];

  // Ubicar cada posición para cambiar los valores en el HTML y que se visualicen en el navegador
  var cardIconTop = document.getElementsByClassName("card-icon-top")[0];
  var cardIconBotton = document.getElementsByClassName("card-icon-botton")[0];
  var cardNumber = document.getElementsByClassName("card-number")[0];

  // Asignar cada valor random a la Card y Condicional color rojo/negro segun la figura
  if (randomIcon == "♦️" || randomIcon == "♥️") {
    cardIconTop.innerHTML = `<p style="color: red;">${randomIcon}</p>`;
    cardIconBotton.innerHTML = `<p style="color: red;">${randomIcon}</p>`;
  } else {
    cardIconTop.innerHTML = `<p style="color: black;">${randomIcon}</p>`;
    cardIconBotton.innerHTML = `<p style="color: black;">${randomIcon}</p>`;
  }

  // Asignar valor de la letra/Numero
  cardNumber.innerHTML = randomNumbers;
};
