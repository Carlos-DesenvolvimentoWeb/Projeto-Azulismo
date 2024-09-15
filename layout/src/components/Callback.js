import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const Callback = () => {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        if (token) {
            // Armazene o token e as informações do usuário conforme necessário
            console.log('Token:', token);
            //  armazenar o token no localStorage
            localStorage.setItem('token', token);

            const user = jwtDecode(token)

            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [location]);
}

export default Callback;
