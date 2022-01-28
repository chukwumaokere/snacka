import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell from '../app_scaffold/AppShell';

function Splash () {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/home');
    }, 5000);

    return (
        <AppShell>
            <p className="text-4xl font-normal text-white flex w-full h-full justify-center items-center">snacka</p>
        </AppShell>
    );
}

export default Splash;
