// Cadastro
document.querySelector('#cadastroModal form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('cadastroNome').value;
    const email = document.getElementById('cadastroEmail').value;
    const senha = document.getElementById('cadastroSenha').value;

    if (!nome || !email ||senha) {
        alert(`Preencha todos os campos.`);
        return;
    }

//Verificar se o email já está cadastrado
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const existe = usuarios.find(u => u.email === email);
    if (existe) {
        alert(`Email já cadastrado!`);
        return;
    }
    usuarios.push({ nome, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert(`Conta criada com sucesso!`);
    e.target.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('cadastroModal'));
    modal.hide();
});

// Login
document.querySelector('#loginModal form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        alert(`Bem-vindo, ${usuario.nome}!`);
        e.target.reset();
        const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        modal.hide();
    } else {
        alert(`Email ou senha incorretos.`);
    }
});