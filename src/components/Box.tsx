import React from 'react';

type Props = {
    className?: string,
    children: React.ReactNode
}
function Box (props: Props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default Box;
