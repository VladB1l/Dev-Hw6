let dropdown = document.querySelector(".dropdown_lng");
let country_list = document.querySelector(".country_list");
let countries = ["Ukraine", "Germany", "France", "Spain"];


for (let i = 0; i < 4; i++) {
    let country = document.createElement("a");
    country.href = ""
    country.style.display = "flex"
    country.style.padding = "10px"
    country.style.color = "black"
    country.innerHTML = ` <img src='./assets/${countries[i]}_icon.png' id='country_icon' alt='country_icon'> <div>${countries[i]}</div>`;
    country_list.append(country);
}

dropdown.onclick = function (event) {
    country_list.style.display = "flex";
    event.stopPropagation();
}

document.body.onclick = function (event) {
    if (!dropdown.contains(event.target)) {
        country_list.style.display = "none";
    }
}


