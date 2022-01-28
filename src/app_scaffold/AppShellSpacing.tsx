import React from 'react';

type Props = {
    props?: any,
    children: React.ReactNode,
}

function AppShellSpacing (props: Props) {

    return (
        <div className="w-full h-full px-4">{props.children}</div>
    );
}

export default AppShellSpacing;
