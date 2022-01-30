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
}

function AppShell (props: Props) {

    return (
        <Background>
            <AppShellSpacing>
                <div className="w-full h-full relative">
                    {props.StatusBar && <StatusBar />}
                    <div className='w-full h-full pt-8 flex flex-col flex-grow pb-24'>
                        {props.children}
                    </div>
                    {props.BottomNav && <BottomNav />}
                </div>
            </AppShellSpacing>
        </Background>
    );
}

export default AppShell;
