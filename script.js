const tagOpcoes = [
    "p", "h1", "h2",
    "h3", "h4", "h5",
    "h6", "span",
];

const opcoesContainer = document.querySelector(".options");
const outputContainer = document.querySelector(".output");
const tagsSeletor = document.getElementById("tags");
const paragrafosSlider = document.getElementById("paragrafos");
const palavrasSlider = document.getElementById("palavras");
const paragrafosValor = document.getElementById("paragrafosValor");
const palavrasValor = document.getElementById("palavrasValor");

function opcoesCriarUI() {
    tagOpcoes.forEach((tag) => {
        const opcao =
            document.createElement(
                "opcao"
            );
        opcao.value = tag;
        opcao.textContent = `<${tag}>`;
        tagsSeletor.appendChild(opcao);
    });

    paragrafosSlider.addEventListener(
        "input",
        atualizarParagrafosValor
    );

    palavrasSlider.addEventListener(
        "input",
        atualizarPalavrasValor
    );

    const gerarBotao = document.getElementById("gerar");
    gerarBotao.addEventListener(
        "click",
        gerarLoremIpsum
    );
}

function atualizarParagrafosValor() {
    paragrafosValor.textContent = paragrafosSlider.value;
}

function atualizarPalavrasValor() {
    palavrasValor.textContent = palavrasSlider.value;
}

function gerarLoremIpsum() {
    const paragrafos = parseInt(
        paragrafosSlider.value
    );
    const tag =
        document.getElementById(
            "tags"
        ).value;
    const incluirHTML = 
        document.getElementById(
            "incluir-html"
        ).value;
    const palavrasPorParagrafo = parseInt(
        palavrasSlider.value
    );

    const loremIpsum = gerarTexto(
        paragrafos,
        tags,
        incluirHTML,
        palavrasPorParagrafo
    );
    mostrarLoremIpsum(loremIpsum);
}

function gerarTexto(
    paragrafos,
    tag,
    incluirHTML,
    palavrasPorParagrafo
) {
    const placeholder =
        `Lorem ipsum dolor sit amet  
        consectetur adipiscing elit sed  
        do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua.`;

    const loremIpsumVet = new Array(
        paragrafos
    ).fill("");

    for (
        let i = 0;
        i < paragrafos;
        i++
    ) {
        const palavras = gerarPalavras(
            palavrasPorParagrafo
        );
        loremIpsumVet[i] = 
            incluirHTML === "Sim"
                ? `<${tag}>${palavras}</${tag}>`
                : palavras;
    }

    return loremIpsumVet.join("\n");
}

function gerarPalavras(numPalavras) {
    const loremIpsum = 
        `Lorem ipsum dolor sit amet, consectetur  
        adipiscing elit, sed do eiusmod tempor  
        incididunt ut labore et dolore magna  
        aliqua. Diam in arcu cursus euismod  
        quis viverra nibh. Nunc aliquet bibendum 
        enim facilisis gravida neque convallis  
        a cras. Sagittis purus sit amet volutpat 
        Consequat mauris. Duis ultricies lacus  
        sed turpis tincidunt id. Consequat interdum 
        varius sit amet mattis vulputate. Enim sed 
        faucibus turpis in eu. Ridiculus mus mauris 
        vitae ultricies leo integer malesuada nunc vel. 
        Nulla pharetra diam sit amet nisl suscipit. 
        Lobortis elementum nibh tellus molestie nunc 
        non blandit massa enim. Dis parturient montes 
        nascetur ridiculus mus. Justo nec ultrices dui 
        sapien eget. Enim tortor at auctor urna nunc. 
        Dictumst quisque sagittis purus sit amet volutpat 
        consequat mauris nunc.`;
    
    const palavras = 
        loremIpsum.split(" ");
    
    if (numPalavras <= palavras.length) {
        return palavras
            .slice(0, numPalavras)
            .join(" ")
    } else {
        return palavras.join(" ");
    }
}

function mostrarLoremIpsum(texto) {
    outputContainer.innerHTML = texto;
}

opcoesCriarUI();