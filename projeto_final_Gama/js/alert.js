function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");
    var habilitacao = document.getElementById("habilitacao");
    var telefone = document.getElementById("telefone");
    var cep = document.getElementById("cep");
    var sexo = document.getElementById("sexo");
    var veiculo = document.getElementById("veiculo");
  
    // verificar se o nome está vazio
    if (nome.value == "") {
      alert("Nome não informado");
  
      // Deixa o input com o focus
      nome.focus();
      // retorna a função e não olha as outras linhas
      return;
    }
    if (sobrenome.value == "") {
      alert("Sobrenome não informado");
      sobrenome.focus();
      return;
    }
    if (email.value == "") {
      alert("E-mail não informado");
      email.focus();
      return;
    }
    if (habilitacao.value == "selecione") {
      alert("Senha não informada");
      senha.focus();
      return;
    }
    if (telefone.value == "") {
      alert("Telefone não informado");
      telefone.focus();
      return;
    }
    if (cep.value == "") {
      alert("CEP não informado");
      cep.focus();
      return;
    }
    if (sexo.value == "selecione") {
      alert("sexo não informado");
      sexo.focus();
      return;
    }
    alert("Formulário enviado!");
    // envia o formulário
    //formulario.submit();
  }