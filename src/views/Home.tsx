import React from 'react';
import AppShell from '../app_scaffold/AppShell';
import Header from '../components/Header';

function Home () {
    return (
        <AppShell BottomNav StatusBar>
            <Header />
        </AppShell>
    );
}

export default Home;
