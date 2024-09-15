import React from 'react';
import authService from '../services/authService'

const LogoutComponent = () => {
    const controleLogout = () => {
        authService.logout();
        // Aqui há o redirecionamento para o login ou frontpage
        window.location.href = '/login';
    };

    return (
        <button onClick={controleLogout}>Logout</button>
    );
};

export default LogoutComponent;