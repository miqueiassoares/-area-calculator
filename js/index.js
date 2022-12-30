"use strict";

const nav = document.querySelector(".area-de-navegacao");
const navBtnPlanas = document.querySelector(".planas");
const navBtnNaoPlanas = document.querySelector(".nao-planas");
const buttonCalcular = document.querySelector(".butao-submit");
const figura = document.querySelector("#selecao-figuras-planas");
const areas = {
    "quadrado": (lado) => lado**2,
    "triangulo": (lado) => (lado**2)/2,
    "retangulo": (ladoM, ladoN) => ladoM*ladoN,
    "hexagono": (lado) => ((((lado**2))*Math.sqrt(3))/2)*3,
    "circulo": (raio) => {
        if (raio) {
            return 3.14159265*raio**2;
        } else {
            alert("preencha todos os dados");
        }
    }
}

let lista = ["nenhuma"];
let index = 1;

figura.addEventListener("change", function() {
    lista[index++] = this.value;
    if (lista.length>2) {
        lista.shift();
        index--;
    }
    document.querySelector("."+lista[1]).style.display = "block";
    document.querySelector("."+lista[0]).style.display = "none";
});

function verificarDados() {
    if (figura.value !== "nenhuma") {
        const area = document.querySelector("#area");
        area.style.display = "inline";

        const figuraArea = document.querySelector("#figura");

        const dimensoes = document.querySelector(".dimensoes");

        switch (figura.value) {
            case "quadrado":
                let ladoQuadrado = Number(document.querySelector("#lado-quadrado").value);        
                if (!(isNaN(ladoQuadrado))) {
                    figuraArea.textContent = "Quadrado";
                    area.textContent = areas.quadrado(ladoQuadrado).toFixed(2)+" m²";
                    dimensoes.textContent = ladoQuadrado+"x"+ladoQuadrado;
                } else {
                    alert("Por favor, digite uma medida válida para que a área seja calculada.");
                }
                break;

            case "triangulo":
                let ladoTriangulo = Number(document.querySelector("#lado-triangulo").value);
                if (!(isNaN(ladoTriangulo))) {
                    figuraArea.textContent = "Triângulo";
                    area.textContent = areas.triangulo(ladoTriangulo).toFixed(2)+" m²";
                    dimensoes.textContent = ladoTriangulo+"x"+ladoTriangulo+"x"+ladoTriangulo;
                } else {
                    alert("Por favor, digite uma medida válida para que a área seja calculada.");
                }
                break;
            
            case "retangulo":
                let ladoM = Number(document.querySelector("#lado-retangulo-m").value);
                let ladoN = Number(document.querySelector("#lado-retangulo-n").value);
                if (!(isNaN(ladoM)) && !(isNaN(ladoN))) {
                    figuraArea.textContent = "Retângulo";
                    area.textContent = areas.retangulo(ladoM, ladoN).toFixed(2)+" m²";
                    dimensoes.textContent = ladoM+"x"+ladoN;
                } else {
                    alert("Preencha os dados corretamente para calcular a área do retângulo.");
                }
                break;
            
            case "hexagono":
                let ladoHexagono = Number(document.querySelector("#lado-hexagono").value);
                if (!(isNaN(ladoHexagono))) {
                    figuraArea.textContent = "Hexágono";
                    area.textContent = areas.hexagono(ladoHexagono).toFixed(2)+" m²";
                    dimensoes.textContent = "lado: "+ladoHexagono.toFixed(2) +" m";
                } else {
                    alert("Preencha os dados corretamente!");
                }
                break;
            case "circulo":
                let raioCirculo = Number(document.querySelector("#raio-circulo").value);
                if (!(isNaN(raioCirculo))) {
                    figuraArea.textContent = "Círculo";
                    area.textContent = areas.circulo(raioCirculo).toFixed(2)+" m²";
                    dimensoes.textContent = "raio: "+raioCirculo.toFixed(2)+" m"
                } else {
                    alert("Preencha os dados com valores válidos!")
                }
                break;
            default:
                console.log("algo deu errado com a execução");
        }
    } else {
        alert("Por favor, selecione uma figura!");
    }
}

buttonCalcular.addEventListener("click", (event) => {
    event.preventDefault();
    verificarDados();
});

function ativarArea(event) {
    if(event.target === navBtnPlanas) {
        document.querySelector(".template-padrao").style.display = "none";
        document.querySelector(".figuras-nao-planas").style.display = "none"
        document.querySelector(".figuras-planas").style.display = "block";
        navBtnPlanas.classList.add("ligado");
        navBtnNaoPlanas.classList.remove("ligado");

    } else if (event.target === navBtnNaoPlanas) {
        document.querySelector(".figuras-planas").style.display = "none";
        document.querySelector(".template-padrao").style.display = "none";
        document.querySelector(".figuras-nao-planas").style.display = "block"
        navBtnNaoPlanas.classList.add("ligado");
        navBtnPlanas.classList.remove("ligado");
    }
}

nav.addEventListener("click", (event) => {
    ativarArea(event);
});

