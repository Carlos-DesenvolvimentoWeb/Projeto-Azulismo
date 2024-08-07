document.addEventListener('DOMContentLoaded', function() {
    const cadastrarBtn = document.getElementById('cadastrarBtn');

    // Validar emails
    function validateEmail(email1, email2) {
        return email1 === email2;
    }

    // Validar senhas
    function validatePassword(password1, password2) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{1,6}$/; // Pelo menos uma letra maiúscula, um símbolo e no máximo 6 dígitos
        return password1 === password2 && passwordRegex.test(password1);
    }

    // Validar telefone
    function validatePhoneNumber(phone) {
        return phone.startsWith('819') && phone.length >= 10;
    }

    // Validar idade
    function validateAge(dateOfBirth) {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age <= 17;
    }

    // Validar nome completo
    function validateFullName(name) {
        return name.trim().split(' ').length >= 2; // Deve conter pelo menos um nome e um sobrenome
    }

    cadastrarBtn.addEventListener('click', function() {
        const nomeResponsavel = document.getElementById('nomeResponsavel').value;
        const telefone = document.getElementById('telefone').value;
        const emailResponsavel = document.getElementById('emailResponsavel').value;
        const confirmaEmail = document.getElementById('confirmaEmail').value;

        const nomeUsuario = document.getElementById('nomeUsuario').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const senha = document.getElementById('senha').value;
        const confirmaSenha = document.getElementById('confirmaSenha').value;

        // Validar dados
        if (!validateEmail(emailResponsavel, confirmaEmail)) {
            alert('Os e-mails não correspondem.');
            return;
        }

        if (!validatePassword(senha, confirmaSenha)) {
            alert('As senhas não correspondem ou não atendem aos critérios de segurança.');
            return;
        }

        if (!validatePhoneNumber(telefone)) {
            alert('O número de telefone deve iniciar com 819 e ter pelo menos 10 dígitos.');
            return;
        }

        if (!validateAge(dataNascimento)) {
            alert('A idade da criança deve ser até 17 anos.');
            return;
        }

        if (!validateFullName(nomeResponsavel)) {
            alert('O nome do responsável deve conter o nome e sobrenome.');
            return;
        }

        if (!validateFullName(nomeUsuario)) {
            alert('O nome do usuário deve conter o nome e sobrenome.');
            return;
        }

        // Se todas as validações passarem, salvar os dados e redirecionar
        const formData = {
            nomeResponsavel,
            telefone,
            emailResponsavel,
            nomeUsuario,
            dataNascimento,
            senha
        };

        localStorage.setItem('formData', JSON.stringify(formData));

        // Redirecionar para a página de dados
        window.location.href = 'dados.html';
    });
});
