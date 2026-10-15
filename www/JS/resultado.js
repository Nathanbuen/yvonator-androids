const acertou = document.getElementById("acertou");
const errou = document.getElementById("errou");
const modalErro = document.getElementById("modalErro");
const tentarNovamente = document.getElementById("tentarNovamente");

if (errou && modalErro) {
    errou.addEventListener("click", () => {
        modalErro.style.display = "flex";
    });

    // Fecha o modal ao clicar fora do conteúdo.
    modalErro.addEventListener("click", (event) => {
        if (event.target === modalErro) {
            modalErro.style.display = "none";
        }
    });
}

if (tentarNovamente && modalErro) {
    tentarNovamente.addEventListener("click", () => {
        modalErro.style.display = "none";
    });
}
