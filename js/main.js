const form = document.getElementById("novoItem");
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((elemento) => {
    criarElemento(elemento)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome === nome.value);
    console.log(existe)

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value,
    };

    if (existe) {
        itemAtual.id = existe.id;

        atualizaElemento(itemAtual);

        itens[existe.id] = itemAtual; 
        // quando atualizar a quantidade de algum objeto, ele vai sobrescrever essa quantidade no localStorage
    } else {
        itemAtual.id = itens.length;

        criarElemento(itemAtual);

        itens.push(itemAtual);
    }

    localStorage.setItem('itens',JSON.stringify(itens));

    nome.value = '';
    quantidade.value = '';
});

function criarElemento(item) {
    // exemplo de li: <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li');
    // obtendo a classe do item 
    novoItem.classList.add('item');
    // obtendo o strong do item
    const numeroItem  = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}


/**
 * "evento.preventDefault()"
 * evita que os dados seja enviados para a página, sem essa função
 * os dados acabariam indo direto pra pagina (comportamento padrão),
 * e fazendo com que os dados não entrasse na função
 */