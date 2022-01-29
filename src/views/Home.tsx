import React from 'react';
import AppShell from '../app_scaffold/AppShell';
import Header from '../components/Header';
import CategoryCarousel from '../components/CategoryCarousel';
import Box from '../components/Box';
import StoreCard from '../components/StoreCard';

function Home () {
    return (
        <AppShell BottomNav StatusBar>
            <Header />
            <Box className='flex w-full my-4 items-center'>
                <span className='text-white font-bold'>Categories:&nbsp;</span><CategoryCarousel />
            </Box>
            <StoreCard />
        </AppShell>
    );
}

export default Home;
