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


let equipes = []

function listarEquipe() {
    listaDeEquipe.innerHTML = '';
    for (let i = 0; i < equipes.length; i++) {
        listaDeEquipe.innerHTML += `<li>
        <h4>${equipes[i].nome}</h4>
            <div class="infos">
                <h2>${equipes[i].participantes} <span>/ ${equipes[i].qtdMax}</span></h2>
                <button>adicionar<box-icon name='plus'></box-icon></button>
            </div>
        </li>`;
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
            participantes:0,
        }
        )
        listarEquipe();
}

