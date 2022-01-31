import React from 'react';
import Background from './Background';
import AppShellSpacing from './AppShellSpacing';
import BottomNav from '../components/BottomNav';
import StatusBar from '../app_scaffold/StatusBar';

type Props = {
    BottomNav?: boolean,
    StatusBar?: boolean,
    props?: any,
    children: React.ReactNode,
    color: string,
}

function AppShell (props: Props) {
    let pardonBottom: string | null = ' pb-4';
    if (props.BottomNav) {
        pardonBottom = ' pb-24';
    }

    return (
        <Background color={props.color}>
            <AppShellSpacing>
                <div className="w-full h-full relative">
                    {props.StatusBar && <StatusBar />}
                    <div className={`w-full h-full pt-8 flex flex-col flex-grow${pardonBottom}`}>
                        {props.children}
                    </div>
                    {props.BottomNav && <BottomNav />}
                </div>
            </AppShellSpacing>
        </Background>
    );
}

export default AppShell;
