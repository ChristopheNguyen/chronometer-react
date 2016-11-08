import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './Welcome'
import Chronometer from './Chronometer'


const welcomeElement = {
    text: "Welcome to my 'chronometer-react-sample'"
};

ReactDOM.render(
    <Welcome text={welcomeElement.text} />,
    document.getElementById('welcome')
);

ReactDOM.render(
    <Chronometer/>,
    document.getElementById('chronometer')
);

