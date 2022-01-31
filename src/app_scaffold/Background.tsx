import React from 'react';

type Props = {
    children: React.ReactNode,
    color: string,
}

function Background ({children, color}: Props) {
    return (
        <div className={`w-screen h-screen ${color}`}>
            {children}
        </div>
    );
}

export default Background;
