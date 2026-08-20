// =====================================
// BASIC INFORMATION
// =====================================

document.getElementById("business-name").textContent =
    client.name;

document.getElementById("category").textContent =
    client.category;

document.getElementById("description").textContent =
    client.description;

document.getElementById("footer-name").textContent =
    client.name;


// =====================================
// PHOTOS
// =====================================

document.getElementById("banner").src =
    client.banner;

document.getElementById("logo").src =
    client.logo;


// =====================================
// WHATSAPP
// =====================================

document.getElementById("whatsapp").href =
    `https://wa.me/${client.whatsapp}`;

document.getElementById("whatsapp-number").textContent =
    "+" + client.whatsapp;


// =====================================
// PHONE
// =====================================

document.getElementById("phone").href =
    `tel:${client.phone}`;

document.getElementById("phone-number").textContent =
    client.phone;


// =====================================
// INSTAGRAM
// =====================================

document.getElementById("instagram").href =
    client.instagram;

document.getElementById("instagram-name").textContent =
    client.instagram
        .split("/")
        .filter(Boolean)
        .pop();


// =====================================
// GOOGLE MAPS
// =====================================

document.getElementById("maps").href =
    client.maps;

document.getElementById("direction").href =
    client.maps;

document.getElementById("address-short").textContent =
    client.address;

document.getElementById("address").textContent =
    client.address;


// =====================================
// SERVICES
// =====================================

const servicesList =
    document.getElementById("services-list");

client.services.forEach(service => {

    const serviceElement =
        document.createElement("div");

    serviceElement.className = "service";

    serviceElement.innerHTML = `

        <div class="service-name">

        

            <span>
                ${service.name}
            </span>

        </div>

    `;

    servicesList.appendChild(serviceElement);

});