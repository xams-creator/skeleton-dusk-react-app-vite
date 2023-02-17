import { createBrowserRouter, RouteObject } from '@xams-framework/dusk';
import React from 'react';
import App from '@/business/app';

function routes(): RouteObject[] {
    return [
        {
            path: '/',
            element: <App />,
        },
    ];
}

export default createBrowserRouter(routes(), {
    basename: import.meta.env.BASE_URL || '/',
});
