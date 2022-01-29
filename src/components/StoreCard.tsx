import React from 'react';
import DisplayPill from './DisplayPill';

function StoreCard () {
    return (
        <div className="bg-white rounded-xl p-4 relative w-full">
            <div className="w-full grid grid-cols-2 gap-4 mb-4">
                <img className="rounded-md" src="https://logos-world.net/wp-content/uploads/2021/08/CVS-Symbol.png" />
                <div className="">
                    <h2 className="text-xl font-bold">CVS Pharmacy</h2>
                    <h3 className="text-gray-500 mb-2">20-30 minutes</h3>
                    <h3 className="text-red-500 font-bold">Free delivery</h3>
                </div>
            </div>
            <div className="w-full flex flex-row mb-2">
                <DisplayPill outline={true} text={'Snacks'} color='bg-red-700' />
                <DisplayPill outline={true} text={'Supplies'} color='bg-yellow-500' />
            </div>
            <div className=' w-full grid justify-items-end'>
                <button className='text-red-500 font-bold uppercase text-sm'>See more {'>'}</button>
            </div>
        </div>
    );
}

export default StoreCard;
