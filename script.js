let dropdown = document.querySelector(".dropdown_lng");
let country_list = document.querySelector(".country_list");
let countries = ["Ukraine", "Germany", "France", "Spain"];
let contents = document.querySelectorAll(".content > div");

let vertical_icon = document.querySelector(".vertical-icon");
let vertic = document.querySelector(".vertical_menu");
let close_icon = document.querySelector(".close_icon");

let blackBg = document.querySelector(".blackBg");
let big_appBtns = document.querySelectorAll(".big-appBtn");
let sml_appBtn = document.querySelector("footer .sml-appBtn");
let svg = document.querySelector("svg").outerHTML;

checkMediaQuery();

for (let i = 0; i < countries.length; i++) {
    let country = document.createElement("a");
    country.href = ""
    country.style.display = "flex";
    country.style.padding = "10px";
    country.style.color = "black";
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


close_icon.addEventListener("click", CloseVertic);
vertical_icon.addEventListener("click", ShowVertic);

function CloseVertic() {
    document.body.style.overflow = "auto";
    setTimeout(() => {
        vertic.style.display = "none";
    }, 200);
    vertic.style.transform = "translate(400px, 0px)";
    blackBg.style.display = "none";
   
}

function ShowVertic() {
    vertic.style.transform = "translate(400px, 0px)"
    document.body.style.overflow = "hidden";
    vertic.style.display = "flex";
    setTimeout(() => {
        vertic.style.transform = "translate(0px, 0px)";
    }, 200);
    blackBg.style.display = "block";
    
}

window.addEventListener('resize', checkMediaQuery);

function checkMediaQuery() {
    if (window.innerWidth < 1024) {
        for (const button of big_appBtns) {
            button.innerHTML = `${svg} Download from Google Play`;
        }
        sml_appBtn.innerHTML = "Download";
    }
    if (window.innerWidth > 1023) {
        for (const button of big_appBtns) {
            button.innerHTML = `${svg} Download for Windows`;
        }
        sml_appBtn.innerHTML = "Open Discord";
        CloseVertic();
    }
}
