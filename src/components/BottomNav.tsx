import React from 'react';
import NavButton from './NavButton';
import CartIcon from '../icons/CartIcon';
import HomeIcon from '../icons/HomeIcon';
import UserIcon from '../icons/UserIcon';

function BottomNav () {
    return (
        <div className="w-full bg-white flex flex-row rounded-lg p-2 justify-around absolute bottom-4">
            <NavButton><UserIcon /></NavButton>
            <NavButton><HomeIcon /></NavButton>
            <NavButton><CartIcon /></NavButton>
        </div>
    );
}

export default BottomNav;
