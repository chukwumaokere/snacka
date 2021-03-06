import React from 'react';
import DisplayPill from './DisplayPill';
import { Store, PaidDelivery } from '../views/Home';
import { categoriesConstant } from '../constants/Categories';

function StoreCard (props: Store) {
    const { storeName, storeIcon, travelTime, freeDelivery, categories } = props;
    let deliveryPrice: string | null = null;

    function isPaidDelivery (store: Store): store is PaidDelivery {
        return store.type === 'paiddelivery';
    }

    if (isPaidDelivery(props)) {
        deliveryPrice = props.deliveryPrice ? new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' })
            .format(props?.deliveryPrice) : null;
    };

    return (
        <div className="bg-white rounded-xl p-4 relative w-full">
            <div className="w-full grid grid-cols-2 gap-4 mb-2">
                <img className="max-h-24 place-self-center" src={storeIcon} />
                <div className="">
                    <h2 className="text-xl font-bold">{storeName}</h2>
                    <h3 className="text-sm text-gray-500 mb-4">
                        {travelTime[0]} - {travelTime[1]} minutes
                    </h3>
                    {freeDelivery ?
                        <h3 className="text-red-500 font-bold">Free delivery</h3>
                        :
                        <h3 className="text-red-500 font-bold">Delivery: {deliveryPrice}</h3>
                    }
                </div>
            </div>
            <div className="w-full flex flex-row mb-1">
                {categories.map((category: string) => {
                    return <DisplayPill
                        key={category}
                        outline={true}
                        text={category}
                        color={categoriesConstant[category]} />;
                })}
            </div>
            <div className=' w-full grid justify-items-end'>
                <button className='text-red-500 font-bold uppercase text-sm'>See more {'>'}</button>
            </div>
        </div>
    );
}

export default StoreCard;
