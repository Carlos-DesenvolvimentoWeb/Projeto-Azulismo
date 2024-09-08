import api from '../services/api'

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
    // Optionally, redirect to the login page or home
};

const authService = { login, logout };
export default authService;