import React from 'react';
import ReactDOM from 'react-dom/client';
import Notebook from './notebook';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Notebook />);
