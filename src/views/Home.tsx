import React from 'react';
import AppShell from '../app_scaffold/AppShell';
import Header from '../components/Header';
import CategoryCarousel from '../components/CategoryCarousel';
import Box from '../components/Box';
import StoreCard from '../components/StoreCard';
import ScrollableBox from '../components/ScrollableBox';

type Store = {
    name: string,
    icon: string,
    travelTime: Array<number>,
    freeDelivery: true,
    categories: Array<string>
} | {
    name: string,
    icon: string,
    travelTime: Array<number>,
    freeDelivery: false,
    deliveryPrice: number,
    categories: Array<string>
};

function Home () {
    const cvs: Store = {
        name: 'CVS Pharmacy',
        icon: 'https://logos-world.net/wp-content/uploads/2021/08/CVS-Symbol.png',
        travelTime: [20, 30],
        freeDelivery: true,
        categories: ['Snacks', 'Supplies'],
    };

    const dr: Store = {
        name: 'Duane Reade',
        icon: 'https://upload.wikimedia.org/wikipedia/en/0/06/Duane_Reade_Logo.svg',
        travelTime: [30, 40],
        freeDelivery: false,
        deliveryPrice: 5,
        categories: ['Snacks', 'Supplies'],
    };

    const target: Store = {
        name: 'Target',
        // eslint-disable-next-line max-len
        icon: 'https://e7.pngegg.com/pngimages/156/169/png-clipart-target-logo-target-corporation-logo-target-icon-logo-text-retail.png',
        travelTime: [5, 10],
        freeDelivery: true,
        categories: ['Groceries', 'Snacks', 'Supplies'],
    };

    const storesArray: Array<Store> = [cvs, dr, target];
    return (
        <AppShell BottomNav StatusBar>
            <Header />
            <Box className='flex w-full my-4 items-center'>
                <span className='text-white font-bold'>Categories:&nbsp;</span><CategoryCarousel />
            </Box>
            <ScrollableBox>
                {storesArray.map((store) => {
                    const storeCard = store.freeDelivery ?
                        <StoreCard
                            name={store.name}
                            icon={store.icon}
                            travelTime={store.travelTime}
                            freeDelivery={store.freeDelivery}
                            categories={store.categories} /> :
                        <StoreCard
                            name={store.name}
                            icon={store.icon}
                            travelTime={store.travelTime}
                            freeDelivery={store.freeDelivery}
                            deliveryPrice={store?.deliveryPrice}
                            categories={store.categories} />;
                    return storeCard;

                })}
            </ScrollableBox>
        </AppShell>
    );
}

export default Home;

export type { Store };
