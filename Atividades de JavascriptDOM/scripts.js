function adicionarTarefa() {
  var input = document.getElementById('novaTarefaInput');
  var novaTarefa = input.value.trim();

  if (novaTarefa) {
    var li = document.createElement('li');
    var textoTarefa = document.createTextNode(novaTarefa);
    var botaoRemover = document.createElement('button');
    
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = function() {
      this.parentElement.remove(); 
    };
    
    li.appendChild(textoTarefa);
    li.appendChild(botaoRemover);
    
    document.getElementById('listaTarefas').appendChild(li);
    input.value = ''; 
  }
}