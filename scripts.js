 document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('projectTitle').value;
    const code = document.getElementById('projectCode').value;

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = title;

    const projectCode = document.createElement('pre');
    projectCode.textContent = code;

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectCode);

    document.getElementById('projects').appendChild(projectDiv);

    document.getElementById('projectForm').reset();
});