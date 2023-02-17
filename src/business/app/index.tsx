import React from 'react';
import { Outlet } from '@xams-framework/dusk';

export default function App() {
    return (
        <div className={'app'}>
            hello dusk-react-app-vite!
            <Outlet/>
        </div>

    );
};
