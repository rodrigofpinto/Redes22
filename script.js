fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.querySelector('.box-projects');
    let projectsHTML = ''; 

    projects.forEach(project => {
      projectsHTML += `
        <a href="${project.link || '#'}" class="card-project" target="_blank" rel="noopener noreferrer">
          <img src="${project.image}" alt="${project.name}" class="image-project">
          <div class="card-projects-text">
            <span class="name-project">${project.name}</span>
            <span class="details-project">${project.details}</span>
          </div>
        </a>
      `;
    });

    container.innerHTML = projectsHTML; // Insere o HTML uma única vez no DOM
  })
  .catch(error => console.error('Erro ao carregar projetos:', error));



// Função para animar os elementos
function animateElements(elements, animationName, initialDelay, delayIncrement) {
    let delay = initialDelay;
    elements.forEach((element) => {
        element.style.animation = `${animationName} 1s ease forwards`;
        element.style.animationDelay = `${delay}s`;
        delay += delayIncrement;
    });
}

const sectionProjects = document.querySelector('.section-projects'); 
const sectionTechnologies = document.querySelector('.section-technologies');
const sectionExperiences = document.querySelector('.box-experiences'); 

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animar os projetos
            if (entry.target.classList.contains('section-projects')) {
                const projects = entry.target.querySelectorAll('.card-project');
                animateElements(projects, 'appear', 0.3, 0.3);
            }
                // Animar as tecnologias
            if (entry.target.classList.contains('section-technologies')) {
                const technologies = entry.target.querySelectorAll('.card-technologies');
                animateElements(technologies, 'appear', 0.3, 0.3);
            }
                // Animar as experiencias
            if (entry.target.classList.contains('box-experiences')) {
                const experiences = entry.target.querySelectorAll('.row-experiences');
                animateElements(experiences, 'appear', 0.3, 0.3);
            }
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

observer.observe(sectionProjects);
observer.observe(sectionTechnologies);
observer.observe(sectionExperiences);
