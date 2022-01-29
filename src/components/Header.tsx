import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Box from '../components/Box';
import AddressIcon from './AddressIcon';
import ChevronDown from './ChevronDown';

enum orderMethods {
    DELIVERY = 'Delivery',
    PICKUP = 'Pick Up'
};

function Header () {

    const [orderMethod, setOrderMethod] = useState<orderMethods>(orderMethods.DELIVERY);
    const [address, setAddress] = useState('1707 N Ruble St, Chicago, IL 60616');

    return (
        <div className="bg-white w-full p-4 rounded-lg mt-4">
            <div className='flex flex-col items-center'>
                <div className="text-3xl font-bold flex items-center gap-1">{orderMethod}<ChevronDown /></div>
                <div className="nowrap overflow-hidden text-ellipsis text-red-500 font-bold flex items-center gap-1">
                    <AddressIcon />{address}
                </div>
            </div>
            <Box className='w-full p-4'>
                <SearchBar placeholder='Find snacks...' />
            </Box>
        </div>
    );
}

export default Header;
