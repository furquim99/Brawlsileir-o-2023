const mascotes = document.querySelectorAll(".mascote");


mascotes.forEach((mascote) => {
    mascote.addEventListener("mouseenter", () => {
        const idSelect = mascote.attributes.id.value;

        if(idSelect === 'santos') return;

        const mascoteEscolhido = document.querySelector(".selecionado")
        mascoteEscolhido.classList.remove("selecionado")

        mascote.classList.add("selecionado");

        const imagemJogador1 = document.getElementById('personagem-jogador-1');

        imagemJogador1.src = `./src/img/${idSelect}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = mascote.getAttribute('data-name');
        
        nomeJogador1.innerHTML = nomeSelecionado;
    })
})