import React, { useCallback, useState } from 'react';
import SearchBar from './SearchBar';
import Box from '../components/Box';
import AddressIcon from '../icons/AddressIcon';

enum orderMethods {
    DELIVERY = 'Delivery',
    PICKUP = 'Pick Up'
};

type orderMethodType = keyof typeof orderMethods;

function Header () {

    const [orderMethod, setOrderMethod] = useState<orderMethodType>('DELIVERY');
    const [address, setAddress] = useState('1707 N Ruble St, Chicago, IL 60616');
    const orderMethodsList = orderMethods;

    const onChangeOrderMethod = useCallback(() => (event: React.ChangeEvent): void => {
        const method: orderMethodType = orderMethod === 'DELIVERY' ? 'PICKUP' : 'DELIVERY';
        setOrderMethod(method);
    }, [orderMethod]);


    return (
        <div className="bg-white w-full p-4 rounded-lg">
            <div className='w-full flex flex-col items-center'>
                <div className="w-full flex items-center justify-evenly">
                    <select name="ordermethod"
                        className="text-3xl font-bold flex items-center focus:outline-none"
                        onChange={onChangeOrderMethod()}
                    >
                        {Object.values(orderMethodsList).map((item, index) => {
                            return <option key={index} value={item}>{item}</option>;
                        })}
                    </select>
                </div>
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
