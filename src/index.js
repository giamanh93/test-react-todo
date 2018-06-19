import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppToDo from './AppToDo';
ReactDOM.render(
    <div>
        <AppToDo />,
        <App />
    </div>,
    document.getElementById('root')
    );
