// Manipulando o DOM
document.addEventListener("DOMContentLoaded", function() {
    // Função para pesquisar uma informação na página
    function pesquisar() {
        let sectionResultados = document.getElementById("resultados-pesquisa");
        let pesquisaInput = document.getElementById("pesquisa").value.toLowerCase();

        // Limpa o conteúdo da seção de apresentação ao iniciar uma pesquisa
        if (pesquisaInput.trim() !== '') {
            const imagemApresentacao = document.querySelector('.imagem-apresentacao');
            if (imagemApresentacao) {
                imagemApresentacao.style.display = 'none';
            }
        } else {
            // Se a pesquisa estiver vazia, exibe a imagem de apresentação novamente
            const imagemApresentacao = document.querySelector('.imagem-apresentacao');
            if (imagemApresentacao) {
                imagemApresentacao.style.display = 'block';
            }
            sectionResultados.innerHTML = `<div class="imagem-apresentacao">
                <h2>"Bem-vindo(a) ao planeta"</h2>
                <p> - Lois Lane</p>
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/T6DJcgm3ViE"
                    title="Man of Steel - Official Trailer 3 [HD]"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>`;
            return;
        }

        let resultadosHTML = "";
        let encontrouResultados = false;

        for (const dado of dados) {
            const titulo = dado.titulo.toLowerCase();
            const descricao = dado.descricao.toLowerCase();
            const tags = dado.tags.toLowerCase();

            if (titulo.includes(pesquisaInput) || descricao.includes(pesquisaInput) || tags.includes(pesquisaInput)) {
                resultadosHTML += `
                    <div class="item-resultado card-container">
                        <img src="${dado.image}" alt="${dado.titulo}">
                        <section class="descricao">
                            <h2>${dado.titulo}</h2>
                            <p class="descricao-meta">${dado.descricao}</p>
                        </section>
                        <a href="${dado.link}" target="_blank">Mais Informações</a>
                    </div>
                `;
                encontrouResultados = true;
            }
        }

        // Exibe na tag HTML o resultado ou a mensagem informando que não existe no banco de dados
        if (encontrouResultados) {
            sectionResultados.innerHTML = resultadosHTML;
        } else {
            sectionResultados.innerHTML = "<p>Nenhum resultado encontrado para sua pesquisa.</p>";
        }
    }

    // Atribuindo a função "pesquisar()" no evento de clicar no botão
    document.getElementById("button-pesquisa").addEventListener('click', pesquisar);

    // Atribuindo a função "pesquisar()" no evento de pressionar o "enter"
    document.getElementById("pesquisa").addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            pesquisar();
        }
    });
});