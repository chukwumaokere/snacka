import React from 'react';

function NavButton (props: any) {
    return (
        <button className='p-2 rounded-lg'>
            {props.children}
        </button>
    );
}

export default NavButton ;
