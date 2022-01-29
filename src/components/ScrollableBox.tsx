import React from 'react';

type Props = {
    children: React.ReactNode
}

function ScrollableBox (props: Props) {
    return (
        <div className="flex flex-col gap-4 overflow-auto h-full w-full relative">
            {props.children}
        </div>
    );
}

export default ScrollableBox;
