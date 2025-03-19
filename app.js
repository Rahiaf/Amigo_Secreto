let amigos = [];

function adicionarAmigo() {
  let inputAmigo = document.getElementById('amigo');
  let nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nomeAmigo);

  inputAmigo.value = '';

    atualizarListaAmigos();
}

  function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
      let itemLista = document.createElement('li');
      itemLista.textContent = amigos[i];
        
      listaAmigos.appendChild(itemLista);
    }
    }

    function sortearAmigo() {
      if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
      }

      let Aleatorio = Math.floor(Math.random() * amigos.length);

      let amigoSorteado = amigos[Aleatorio];

      let resultado = document.getElementById('resultado');
      resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;

    }