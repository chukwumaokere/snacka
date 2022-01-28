import React from 'react';
import WifiIcon from '../icons/WifiIcon';
import BatteryIcon from '../icons/BatteryIcon';
import CelldataIcon from '../icons/CelldataIcon';

function StatusBar () {
    return (
        <div className='w-full flex flex-row absolute top-2'>
            <div className='relative w-full'>
                <div className='float-left text-white text-lg font-bold'>9:41</div>
                <div className='float-right flex flex-row gap-2'>
                    <CelldataIcon />
                    <WifiIcon />
                    <BatteryIcon />
                </div>
            </div>
        </div>
    );
}

export default StatusBar;
