const form = document.getElementById("novoItem");
const lista = document.getElementById('lista');
const itens = [];

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    // console.log(evento.target[0].value)
    // console.log(evento)
    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    criarElemento(nome.value, quantidade.value);

    nome.value = '';
    quantidade.value = '';
})

function criarElemento(nome, quantidade) {
    // exemplo de li: <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li');
    // obtendo a classe do item 
    novoItem.classList.add('item');
    // obtendo o strong do item
    const numeroItem  = document.createElement('strong')
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

    const itemAtual = {
        'nome': nome,
        'quantidade': quantidade,
    };

    itens.push(itemAtual);

    localStorage.setItem('item',JSON.stringify(itens));
}


/**
 * "evento.preventDefault()"
 * evita que os dados seja enviados para a página, sem essa função
 * os dados acabariam indo direto pra pagina (comportamento padrão),
 * e fazendo com que os dados não entrasse na função
 */