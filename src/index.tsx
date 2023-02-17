import { createApp } from '@xams-framework/dusk';
import createDuskVite from '@xams-framework/dusk-plugin-vite';
import createDuskAppInitializer from './configuration/plugins/dusk-plugin-app-initializer';
import router from './configuration/router';

import './index.scss';

const app = createApp({
    container: '#root',
    redux: {
        logger: {
            collapsed: false,
        },
    },
});

app
    .use(createDuskAppInitializer())
    .use(createDuskVite())
    .router(router)
    .startup();

window.app = app;
