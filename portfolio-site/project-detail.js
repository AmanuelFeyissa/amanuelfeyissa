const params = new URLSearchParams(window.location.search);
const projectKey = params.get('project');
const project = window.portfolioData.projects.find(({ slug }) => slug === projectKey) || window.portfolioData.projects[0];

document.title = `${project.title} | Amanuel Feyissa`;
document.querySelector('#project-category').textContent = project.category;
document.querySelector('#project-number').textContent = `PROJECT // ${project.id}`;
document.querySelector('#project-title').textContent = project.title;
document.querySelector('#project-intro').textContent = project.detailIntro;
document.querySelector('#project-tags').innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join('');
