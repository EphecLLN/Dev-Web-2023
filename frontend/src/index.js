import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';


const rightRoot = ReactDOM.createRoot(document.getElementById('right-container'));
rightRoot.render(<h1>I'm on the right</h1>);

const leftRoot = ReactDOM.createRoot(document.getElementById('left-container'));
leftRoot.render(<h1>I'm on the left</h1>);