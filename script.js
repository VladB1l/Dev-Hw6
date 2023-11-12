let dropdown = document.querySelector(".dropdown_lng");
let country_list = document.querySelector(".country_list");
let countries = ["Ukraine", "Germany", "France", "Spain"];
let contents = document.querySelectorAll(".content > div")



for (let i = 0; i < countries.length; i++) {
    let country = document.createElement("a");
    country.href = ""
    country.style.display = "flex"
    country.style.padding = "10px"
    country.style.color = "black"
    country.innerHTML = ` <img src='./assets/${countries[i]}_icon.png' id='country_icon' alt='country_icon'> <div>${countries[i]}</div>`;
    country_list.append(country);
}

dropdown.onclick = function (event) {
    if (country_list.style.display === "flex") {
        country_list.style.display = "none";
        setTimeout(() => {
            country_list.style.display = "flex";
        }, 100);
    }
    else {
        country_list.style.display = "flex";
    }
    event.stopPropagation();
}

document.body.onclick = function (event) {
    if (!dropdown.contains(event.target)) {
        country_list.style.display = "none";
    }

}

for (let content of contents) {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show_block');
            }
        });
    });
    observer.observe(content);
}

