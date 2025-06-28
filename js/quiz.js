// Lógica do Quiz
const appQuiz = {
    dados: dados, // 'dados' importado de dados.js
    perguntas: perguntas, // 'perguntas' importado de dados.js
    pontuacao: 0,
    perguntaAtual: 0,
};

function quiz(app) {
    function exibirPergunta() {
        const pergunta = app.perguntas[app.perguntaAtual];
        const elementoPergunta = document.getElementById("pergunta");
        const elementoOpcoes = document.getElementById("opcoes");

        elementoPergunta.textContent = pergunta.pergunta;
        elementoOpcoes.innerHTML = "";

        // Embaralha as opções para que não apareçam sempre na mesma ordem
        const opcoesEmbaralhadas = [...pergunta.opcoes].sort(() => Math.random() - 0.5);

        opcoesEmbaralhadas.forEach(opcao => {
            const botao = document.createElement("button");
            botao.textContent = opcao;
            botao.addEventListener("click", () => verificarResposta(opcao));
            elementoOpcoes.appendChild(botao);
        });
    }

    function verificarResposta(opcaoSelecionada) {
        const pergunta = app.perguntas[app.perguntaAtual];
        const resultadoElement = document.getElementById("resultado");
        resultadoElement.textContent = ""; // Limpa o resultado anterior

        if (opcaoSelecionada === pergunta.resposta) {
            app.pontuacao++;
            resultadoElement.style.color = "lightgreen";
            resultadoElement.textContent = "Resposta correta! ✔️";
        } else {
            resultadoElement.style.color = "red";
            resultadoElement.textContent = `Resposta incorreta. A resposta certa era: "${pergunta.resposta}" ❌`;
        }

        // Desabilita os botões para evitar múltiplas seleções
        Array.from(document.getElementById("opcoes").children).forEach(button => {
            button.disabled = true;
        });

        // Pequeno atraso antes de avançar para a próxima pergunta
        setTimeout(() => {
            app.perguntaAtual++;
            if (app.perguntaAtual < app.perguntas.length) {
                exibirPergunta();
                resultadoElement.textContent = ""; // Limpa o resultado para a próxima pergunta
            } else {
                mostrarResultadoFinal();
            }
        }, 1500); // 1.5 segundos de atraso
    }

    function mostrarResultadoFinal() {
        const resultado = document.getElementById("resultado");
        resultado.style.color = getComputedStyle(document.documentElement).getPropertyValue('--cor-destaque');        resultado.textContent = `Você acertou ${app.pontuacao} de ${app.perguntas.length} perguntas!`;

        // Opcional: Adicionar um botão para reiniciar o quiz
        const reiniciarBotao = document.createElement("button");
        reiniciarBotao.textContent = "Reiniciar Quiz";
        reiniciarBotao.id = "reiniciar-quiz";
        reiniciarBotao.addEventListener("click", () => {
            app.pontuacao = 0;
            app.perguntaAtual = 0;
            document.getElementById("quiz").style.display = "none";
            document.getElementById("iniciar").style.display = "block";
            resultado.textContent = "";
        });
        document.getElementById("quiz").appendChild(reiniciarBotao);
    }

    exibirPergunta();
}

function toggleElement(id, show) {
    const element = document.getElementById(id);
    element.style.display = show ? 'block' : 'none';
}

document.getElementById("iniciar").addEventListener("click", () => {
    toggleElement("iniciar", false);
    toggleElement("quiz", true);
    quiz(appQuiz); // Passa o objeto appQuiz para a função quiz
});