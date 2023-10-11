function buscarRepositorio() {
    fetch("https://api.github.com/users/Presley14/repos")
        .then(response => response.json())
        .then(data => {
            const projetos = data.public_repos;

            const projetosContainer = document.getElementById("projetosContainer");

            if (data.repos) { // Verifica se 'repos' existe
                for (let i = 0; i < projetos; i++) {
                    const projetoCard = document.createElement("div");
                    projetoCard.className = "projetoCard";
                    projetoCard.innerHTML = `<h3>${data.repos[i].name}</h3>
                                             <p>${data.repos[i].description}</p>
                                             <a href="${data.repos[i].html_url}" target="_blank">Ver no GitHub</a>`;

                    projetosContainer.appendChild(projetoCard);
                }
            }
        })
        .catch(error => console.error('Erro ao buscar repositório:', error));
}

buscarRepositorio();
