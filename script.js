
// Obtém o botão pelo ID
var btnVoltarTopo = document.querySelector(".btn-voltar-topo");

// Quando o usuário rolar a página, verifica a posição
window.onscroll = function () {
    mostrarOcultarBotao();
};

function mostrarOcultarBotao() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Se a página foi rolada mais de 20 pixels, mostra o botão
        btnVoltarTopo.style.display = "block";
    } else {
        // Caso contrário, esconde o botão
        btnVoltarTopo.style.display = "none";
    }
}

// Quando o usuário clicar no botão, volta ao topo da página com rolagem suave
btnVoltarTopo.onclick = function () {
    rolarParaTopo();
};

function rolarParaTopo() {
    // Verifica se há suporte para scrollIntoViewOptions
    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // Fallback para navegadores antigos (sem rolagem suave nativa)
        document.body.scrollTop = 0; // Para navegadores Safari
        document.documentElement.scrollTop = 0; // Para outros navegadores
    }
}
