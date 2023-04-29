// Smooth scrolling when clicking on navigation menu items
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Example of project data to be loaded dynamically
const projects = [
    {
        title: "Project 1",
        description: "This is the description of Project 1.",
        image: "path/to/project1-image.jpg",
        url: "https://example.com/project1"
    },
    {
        title: "Project 2",
        description: "This is the description of Project 2.",
        image: "path/to/project2-image.jpg",
        url: "https://example.com/project2"
    }
];

// Function to display projects on the page
function displayProjects() {
    const projectsContainer = document.getElementById('projects');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.image}" alt="${project.title}">
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Call the function to display projects on the page
displayProjects();
