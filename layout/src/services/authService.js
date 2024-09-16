import api from '../services/api'

const cadastrar = async (nomeResponsavel, telefone, emailResponsavel, nomeUsuario, dataNascimento, password) => {
    try {
        const response = await api.post('/api/register', {
            nomeResponsavel: nomeResponsavel,
            nomeCrianca: nomeUsuario,
            email: emailResponsavel,
            telefone: telefone,
            password: password,
            dataNascimentoCrianca: dataNascimento
        });

        return response.data.user;
        //Após o cadastro bem sucedido, o usuário é logado e redirecionado para o /dashboard

    } catch (error) {
        console.error('Cadastro falhou:', error);
        throw error;
    }
}

const login = async (email, password) => {

    try {

        const response = await api.post('/api/login', { email, password });

        console.log(response)
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data;
    } catch (error) {
        console.error('Login falhou:', error);
        throw error;
    }
};


const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'http://localhost:3000';
};

const authService = { cadastrar, login, logout };
export default authService;