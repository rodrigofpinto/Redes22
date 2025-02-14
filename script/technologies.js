const elemTechnologies = document.querySelector(".box-cards-technologies");

const createImageTechnologie = (imageSrc) => {
    const elemImg = document.createElement("img");
    elemImg.setAttribute("src", imageSrc);
    elemImg.classList.add("image-technologie");

    return elemImg;
};

const createNameTechnologie = (name) => {
    const elemSpan = document.createElement("span");
    elemSpan.classList.add("name-technologie");
    elemSpan.innerText = name;

    return elemSpan;
};

const createTechnologieCard = (technologie, index) => {
    const elemCard = document.createElement("div");
    elemCard.classList.add("card-technologies");

    // Adicionar atributos de animação
    elemCard.setAttribute("data-aos", "zoom-in-up");
    elemCard.setAttribute("data-aos-duration", "800");
    elemCard.setAttribute("data-aos-easing", "ease-in-out");
    elemCard.setAttribute("data-aos-offset", "-100");
    elemCard.setAttribute("data-aos-delay", 300 * (index + 1));

    // Adicionar Imagem
    elemCard.appendChild(createImageTechnologie(technologie.image));

    // Adicionar Nome
    elemCard.appendChild(createNameTechnologie(technologie.name));

    return elemCard;
};

const loadTechnologies = (technologies) => {
    technologies.forEach((technologie, index) => {
        elemTechnologies.appendChild(createTechnologieCard(technologie, index));
    });
};

fetch("./technologies.json")
    .then((response) => response.json())
    .then(loadTechnologies);
