import React from 'react';
import DisplayPill from './DisplayPill';
import { Store } from '../views/Home';
import { categories } from '../constants/Categories';

function StoreCard (props: Store) {
    let deliveryPrice: string | null = null;
    if(!props.freeDelivery) {
        deliveryPrice = props?.deliveryPrice ? new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' })
            .format(props?.deliveryPrice) : null;
    };

    return (
        <div className="bg-white rounded-xl p-4 relative w-full">
            <div className="w-full grid grid-cols-2 gap-4 mb-2">
                <img className="rounded-md max-h-24 place-self-center" src={props.icon} />
                <div className="">
                    <h2 className="text-xl font-bold">{props.name}</h2>
                    <h3 className="text-sm text-gray-500 mb-4">
                        {props.travelTime[0]} - {props.travelTime[1]} minutes
                    </h3>
                    {props.freeDelivery ?
                        <h3 className="text-red-500 font-bold">Free delivery</h3>
                        :
                        <h3 className="text-red-500 font-bold">Delivery: {deliveryPrice}</h3>
                    }
                </div>
            </div>
            <div className="w-full flex flex-row mb-1">
                {props.categories.map((category) => {
                    return <DisplayPill key={category} outline={true} text={category} color={categories[category]} />;
                })}
            </div>
            <div className=' w-full grid justify-items-end'>
                <button className='text-red-500 font-bold uppercase text-sm'>See more {'>'}</button>
            </div>
        </div>
    );
}

export default StoreCard;
