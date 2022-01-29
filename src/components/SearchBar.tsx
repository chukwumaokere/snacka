import React from 'react';
import SearchIcon from '../icons/SearchIcon';

type Props = {
    placeholder?: string,
};

function SearchBar (props: Props) {
    return (
        <div className="w-full h-6 flex flex-row gap-2 items-center content-center border-b-2 border-black box-border">
            <SearchIcon />
            <input className='w-full h-full decoration' placeholder={props?.placeholder} />
        </div>
    );
}

export default SearchBar;
