console.log("Hello World!");

btnCriarEquipe.onclick = function () {
    overlay.classList.add('active');
    modal.classList.add('active');
}
overlay.onclick = function () {
    overlay.classList.remove('active');
    modal.classList.remove('active');
}

btnClose.onclick = function () {
    overlay.classList.remove('active');
    modal.classList.remove('active');
}


let equipes = JSON.parse(localStorage.getItem('equipes')) || [];

function listarEquipe() {
    listaDeEquipes.innerHTML = '';
    if (equipes.length != 0) {
        for (let i = 0; i < equipes.length; i++) {
            listaDeEquipes.innerHTML += 
            `<li>
            <h4>${equipes[i].nome}</h4>
                <div class="infos">
                    <h2>${equipes[i].participantes.length} <span>/ ${equipes[i].qtdMax}</span></h2>
                    <div class="acoes">
                    <button>adicionar</button>
                    <button onClick='deletarEquipe(${i})'><box-icon name='trash'></box-icon></button>
                    </div>
                </div>
            </li>`;
        }   
    }
    else{
        listaDeEquipes.innerHTML = `
            <li class='sem-equipes'>Crie sua primeira equipe!</li>
        `;
    }
}


function criarEquipe() {
    event.preventDefault();
    let equipeNome = document.querySelector("#equipe-nome");
    let equipeQtn = document.querySelector("#equipe-qtd");
    equipes.push(
        {
            nome: equipeNome.value,
            qtdMax: equipeQtn.value,
            participantes:[],
        }
        )
        if(!localStorage.getItem('equipes')){
            localStorage.setItem('equipes', JSON.stringify(equipes));
        }else{
            let equipesSalvas = JSON.parse(localStorage.getItem('equipes'));
            equipesSalvas.push(
                {
                    nome: equipeNome.value,
                    qtdMax:equipeQtn.value,
                    participantes: []
                }
            );
            localStorage.setItem('equipes', JSON.stringify(equipesSalvas));
        }
        formCriar.reset();
        overlay.classList.remove('active');
        modal.classList.remove('active');
        listarEquipe();
};

function deletarEquipe(posicao) {
    let equipesRestantes = [];
    let equipesSalvas = JSON.parse(localStorage.getItem('equipes'));
    for(let i = 0; i < equipes.length; i++) {
        if( i != posicao ){
        equipesRestantes.push(equipes[i]);
    }
    }
    equipes = [];
    equipes = equipesRestantes;
    equipesSalvas = [];
    equipes = equipesRestantes;
    localStorage.setItem('equipes', JSON.stringify(equipesSalvas));
    listarEquipe();
};
listarEquipe();
