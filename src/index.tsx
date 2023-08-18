import React from 'react';
import {createRoot, Root} from 'react-dom/client';
import Framework7 from 'framework7/lite/bundle';
import Framework7React, { f7ready, f7 } from 'framework7-react';
import 'framework7/css/bundle';
import './css/icons.css';
import './css/app.scss';

import App from './app/app';

Framework7.use(Framework7React);

const root: Root = createRoot(document.getElementById('app') as HTMLElement);
root.render(React.createElement(App));