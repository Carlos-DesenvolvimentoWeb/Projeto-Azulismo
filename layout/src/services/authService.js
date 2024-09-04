import axios from 'axios';

const login = async (email, password) => {
    try {
        const response = await axios.post('/api/login', { email, password });
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

export default { login, logout };