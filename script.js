let tourist = prompt("Olá turista. Qual seu nome? ");
let visited = prompt("Você visitou alguma cidade? (s/n)");
let citiesVisited = "";
let cityCount = 0;

while (visited === "s" || visited === "S") {
    let city = prompt("Qual é o nome da cidade visitada?");
    if (cityCount === 0) {
        citiesVisited = "- " + city;
    } else {
        citiesVisited += "\n- " + city;

    }

    cityCount++;

    visited = prompt("Você visitou alguma outra cidade? (s/n)");

}

alert("Turista: " + tourist);
alert("Quantidade de cidades visitadas: " + cityCount);

if (cityCount > 0) {
    alert("Cidades visitadas:\n" + citiesVisited);
} else {
    alert("Nenhuma cidade visitada.");
