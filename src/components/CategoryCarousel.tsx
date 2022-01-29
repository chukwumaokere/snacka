import React, { useState } from 'react';
import PillButton from './PillButton';
import { categories } from '../constants/Categories';

function CategoryCarousel () {
    const [selectedCateogries, setSelectedCategories] = useState([]);

    return (
        <div className="w-full flex overflow-auto gap-2">
            {Object.keys(categories).map((k: any, index: number) => {
                return <PillButton outline={true} key={index} text={k} color={categories[k]} />;
            })}
        </div>
    );
}

export default CategoryCarousel;
