const urlBase = "https://pokeapi.co/api/v2/";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}
// 3 Obtener el nodo a modificar
const pikachuImg = document.getElementById("pikachuImg");
const pikachuName = document.getElementById("pikachuName");

// 4 -fetch para obtener los datos
fetch(`${urlBase}pokemon/pikachu`)
  .then((response) => response.json())
  .then((data) => {
    // 5 modificar el nodo con los datos obtenidos
    pikachuImg.setAttribute("src", data.sprites.front_default);
    pikachuName.innerHTML = capitalizeFirstLetter(data.name);
  });

// 3 Obtener el nodo a modificar
const bulbasaurImg = document.getElementById("bulbasaurImg");
const bulbasaurName = document.getElementById("bulbasaurName");

// 4 -fetch para obtener los datos
fetch(`${urlBase}pokemon-form/1/`)
  .then((response) => response.json())
  .then((data) => {
    // 5 modificar el nodo con los datos obtenidos
    bulbasaurImg.setAttribute("src", data.sprites.front_default);
    bulbasaurName.innerHTML = capitalizeFirstLetter(data.pokemon.name);
  });

const charmanderImg = document.getElementById("charmanderImg");
const charmanderName = document.getElementById("charmanderName");
// 4 -fetch para obtener los datos
fetch(`${urlBase}pokemon/charmander`)
  .then((response) => response.json())
  .then((data) => {
    // 5 modificar el nodo con los datos obtenidos
    console.log(data);
    charmanderImg.setAttribute("src", data.sprites.front_default);
    charmanderName.innerHTML = capitalizeFirstLetter(data.name);
  });
// 1- hacer el maquetado de html
// 2- hacer css

//Efecto evolucionar e involucionar pikachu

const buttonPikachu = document.getElementById("btnEvolucionarPikachu");

buttonPikachu.addEventListener("click", evolucionarPikachu);

function evolucionarPikachu() {
  if (buttonPikachu.innerHTML === "Evolucionar") {
    fetch(`${urlBase}pokemon/raichu`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        pikachuImg.setAttribute("src", data.sprites.front_default);
        buttonPikachu.innerHTML = "Involucionar";
      });
  } else if (buttonPikachu.innerHTML === "Involucionar") {
    fetch(`${urlBase}pokemon/pikachu`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        pikachuImg.setAttribute("src", data.sprites.front_default);
        buttonPikachu.innerHTML = "Evolucionar";
      });
  }
}

//Efecto evolucionar e involucionar bulbasaur

const buttonBulbasaur = document.getElementById("btnEvolucionarBulbasaur");

buttonBulbasaur.addEventListener("click", evolucionarBulbasaur);

function evolucionarBulbasaur() {
  if (buttonBulbasaur.innerHTML === "Evolucionar") {
    fetch(`${urlBase}pokemon/venusaur`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        bulbasaurImg.setAttribute("src", data.sprites.front_default);
        buttonBulbasaur.innerHTML = "Involucionar";
      });
  } else if (buttonBulbasaur.innerHTML === "Involucionar") {
    fetch(`${urlBase}pokemon/bulbasaur`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        bulbasaurImg.setAttribute("src", data.sprites.front_default);
        buttonBulbasaur.innerHTML = "Evolucionar";
      });
  }
}

//Efecto evolucionar e involucionar Charmander

const buttonCharmander = document.getElementById("btnEvolucionarCharmander");

buttonCharmander.addEventListener("click", evolucionarCharmander);

function evolucionarCharmander() {
  if (buttonCharmander.innerHTML === "Evolucionar") {
    fetch(`${urlBase}pokemon/charizard`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        charmanderImg.setAttribute("src", data.sprites.front_default);
        buttonCharmander.innerHTML = "Involucionar";
      });
  } else if (buttonCharmander.innerHTML === "Involucionar") {
    fetch(`${urlBase}pokemon/charmander`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        charmanderImg.setAttribute("src", data.sprites.front_default);
        buttonCharmander.innerHTML = "Evolucionar";
      });
  }
}