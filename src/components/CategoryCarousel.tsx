import React, { useState } from 'react';
import PillButton from './PillButton';
import { categoriesConstant } from '../constants/Categories';

function CategoryCarousel () {
    const [selectedCateogries, setSelectedCategories] = useState([]);

    return (
        <div className="w-full flex overflow-auto gap-2">
            {Object.keys(categoriesConstant).map((k: any, index: number) => {
                return <PillButton outline={true} key={index} text={k} color={categoriesConstant[k]} />;
            })}
        </div>
    );
}

export default CategoryCarousel;
