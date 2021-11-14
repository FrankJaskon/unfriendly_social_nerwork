import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './redux/redux-store';
import UnfriendlySocialNetworkApp from './components/app';

import './index.css';

ReactDOM.render(
    <UnfriendlySocialNetworkApp store={store} />,
    document.getElementById('root')
);