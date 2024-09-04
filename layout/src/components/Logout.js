import React from 'react';
import authService from '../services/authService'

const LogoutComponent = () => {
    const handleLogout = () => {
        authService.logout();
        // Aqui há o redirecionamento para o login ou frontpage
        window.location.href = '/login';
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutComponent;