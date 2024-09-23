// script.js
document.addEventListener("DOMContentLoaded", () => {
    const contatoSection = document.getElementById("contato");
    const button = document.createElement("button");
    button.innerText = "Clique para entrar em contato!";
    
    button.addEventListener("click", () => {
        alert("Você pode nos contatar pelo email: contato@colegiosantoagostinho.edu.br");
    });

    contatoSection.appendChild(button);
});
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const contatoSection = document.getElementById("contato");
    const button = document.createElement("button");
    button.innerText = "Clique para entrar em contato!";
    
    button.addEventListener("click", () => {
        alert("Você pode nos contatar pelo email: contato@colegiosantoagostinho.edu.br");
    });

    contatoSection.appendChild(button);

    // Funcionalidade do botão Ver Eventos
    const eventosButton = document.getElementById("verEventos");
    eventosButton.addEventListener("click", () => {
        alert("Próximos eventos: Reunião de Pais, Feira de Ciências.");
    });
});