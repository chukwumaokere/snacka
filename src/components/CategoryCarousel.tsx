import React, { useState } from 'react';
import PillButton from './PillButton';

function CategoryCarousel () {
    const [selectedCateogries, setSelectedCategories] = useState([]);

    const categories: any = {
        'Groceries': 'bg-green-500',
        'Snacks': 'bg-red-700',
        'Restaurants': 'bg-blue-600',
        'Desserts': 'bg-red-700',
        'Supplies': 'bg-yellow-500',
        'Local Businesses': 'bg-pink-400',
    };

    return (
        <div className="w-full flex overflow-auto gap-2">
            {Object.keys(categories).map((k: any, index: number) => {
                return <PillButton outline={true} key={index} text={k} color={categories[k]} />;
            })}
        </div>
    );
}

export default CategoryCarousel;
