import React from 'react';

type Props = {
    children: React.ReactNode,
    props?: any,
}

function Background ({children, ...props}: Props) {
    return (
        <div className="w-screen h-screen bg-red-500">
            {children}
        </div>
    );
}

export default Background;
