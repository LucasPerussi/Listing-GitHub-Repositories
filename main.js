import "./style.css";

// Getting user information
fetch("https://api.github.com/users/lucasperussi")
  .then((response) => response.json())
  .then((data) => {
    const { name, avatar_url } = data;

    document.getElementById(
      "pageTitle"
    ).textContent = `GitHub Repos de ${name}`;
    document.getElementById("avatar").src = `${avatar_url}`;
  })
  .catch((err) => {
    const errorContainer = document.createElement("div");
    errorContainer.textContent = `Erro: ${err}`;

    document.body.appendChild(errorContainer);
  });

// listing all repositories
fetch("https://api.github.com/users/lucasperussi/repos?page=1")
  .then((response) => response.json())
  .then((data) => {
    const recordsContainer = document.createElement("div");

    data.forEach((item) => {
      const { id, name, description, html_url } = item;

      const recordElement = document.createElement("div");
      recordElement.id = `records`;

      const nameElement = document.createElement("p");
      nameElement.textContent = `${name}`;
      nameElement.id = `titulo`;
      recordElement.appendChild(nameElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = `Description: ${description}`;
      recordElement.appendChild(descriptionElement);

      const urlElement = document.createElement("a");
      urlElement.href = `${html_url}`;
      urlElement.target = `$_blank`;
      urlElement.textContent = `Acessar`;
      recordElement.appendChild(urlElement);

      recordsContainer.appendChild(recordElement);
    });

    const app = document.getElementById("app");
    app.appendChild(recordsContainer);
  })
  .catch((err) => {
    const errorContainer = document.createElement("div");
    errorContainer.textContent = `Erro: ${err}`;

    document.body.appendChild(errorContainer);
  });
