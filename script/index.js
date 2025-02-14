const elemProjects = document.getElementById("project__content")

const createImage = (projectImage) => {
    const elemPicture = document.createElement("picture")
    const elemImg = document.createElement("img")

    elemImg.setAttribute("src", projectImage)

    elemPicture.appendChild(elemImg)

    return elemPicture
}
const createStrong = (projectName) => {
    const elemStrong = document.createElement("strong")
    elemStrong.innerText = projectName

    return elemStrong
}
const creatTags = (projectTags) => {
    const elemTags = document.createElement("div") 
        projectTags.forEach(tag => {
            const elemTag = document.createElement("span")
            elemTag.innerText = tag

            elemTags.appendChild(elemTag)
        })
    return elemTags
}
const createProject = (project, index) => {
    const elemProject = document.createElement("a")

        elemProject.setAttribute("href", project.link)
        elemProject.setAttribute("target", "_blank")

        elemProject.setAttribute("data-aos","zoom-in-up")
        elemProject.setAttribute("data-aos-duration","800")
        elemProject.setAttribute("data-aos-easing","ease-in-out")
        elemProject.setAttribute("data-aos-offset","-100")
        elemProject.setAttribute("data-aos-delay", 300 * (index + 1))

        elemProject.classList.add("project")

        //Add Picture
        elemProject.appendChild(createImage(project.image))

        //Add Strong
        elemProject.appendChild(createStrong(project.name))

        //Add Tags
        elemProject.appendChild(creatTags(project.tags))

        return elemProject
}
const loadProjects = (projects) => {
    projects.forEach((project, index) => {
        elemProjects.appendChild(createProject(project, index))
    });
}

fetch("./projects.json").then(response => response.json()).then(loadProjects)

  // Função de animação
  function animateElements(elements, animationName, initialDelay, delayIncrement) {
    let delay = initialDelay;
    elements.forEach((element) => {
      element.style.animation = `${animationName} 1s ease forwards`;
      element.style.animationDelay = `${delay}s`;
      delay += delayIncrement; // Incrementa o delay para criar efeito em cascata
    });
  }

    // Função de animação
    function animateElements(elements, animationName, initialDelay, delayIncrement) {
        let delay = initialDelay;
        elements.forEach((element) => {
          element.style.animation = `${animationName} 1s ease forwards`;
          element.style.animationDelay = `${delay}s`;
          delay += delayIncrement; // Incrementa o delay para criar efeito em cascata
        });
      }