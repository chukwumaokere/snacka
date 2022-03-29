import React from 'react';
import AppShell from '../app_scaffold/AppShell';
import Header from '../components/Header';
import CategoryCarousel from '../components/CategoryCarousel';
import Box from '../components/Box';
import StoreCard from '../components/StoreCard';
import ScrollableBox from '../components/ScrollableBox';

export interface PaidDelivery {
    type: 'paiddelivery',
    storeName: string,
    storeIcon: string,
    travelTime: Array<number>,
    freeDelivery: false,
    deliveryPrice: number,
    categories: Array<string>
}

export interface FreeDelivery {
    type: 'freedelivery',
    storeName: string,
    storeIcon: string,
    travelTime: Array<number>,
    freeDelivery: true,
    categories: Array<string>
}

export type Store = PaidDelivery | FreeDelivery;

function Home () {
    const cvs: Store = {
        type: 'freedelivery',
        storeName: 'CVS Pharmacy',
        storeIcon: 'https://logos-world.net/wp-content/uploads/2021/08/CVS-Symbol.png',
        travelTime: [20, 30],
        freeDelivery: true,
        categories: ['Snacks', 'Supplies'],
    };

    const dr: Store = {
        type: 'paiddelivery',
        storeName: 'Duane Reade',
        storeIcon: 'https://upload.wikimedia.org/wikipedia/en/0/06/Duane_Reade_Logo.svg',
        travelTime: [30, 40],
        freeDelivery: false,
        deliveryPrice: 5,
        categories: ['Snacks', 'Supplies'],
    };

    const target: Store = {
        type: 'freedelivery',
        storeName: 'Target',
        // eslint-disable-next-line max-len
        storeIcon: 'https://e7.pngegg.com/pngimages/156/169/png-clipart-target-logo-target-corporation-logo-target-icon-logo-text-retail.png',
        travelTime: [5, 10],
        freeDelivery: true,
        categories: ['Groceries', 'Snacks', 'Supplies'],
    };

    const storesArray: Store[] = [cvs, dr, target];

    return (
        <AppShell BottomNav StatusBar color="bg-red-500">
            <Box className='mt-4'>
                <Header />
            </Box>
            <Box className='flex w-full my-4 items-center'>
                <CategoryCarousel />
            </Box>
            <ScrollableBox>
                {/* eslint-disable-next-line react/jsx-key*/}
                {React.Children.toArray(storesArray.map((props) => <StoreCard {...props} />))}
            </ScrollableBox>
        </AppShell>
    );
}

export default Home;

export type { Store };
