import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';
const resolvedBasename = new URL(import.meta.env.BASE_URL, window.location.href)
    .pathname.replace(/\/$/, '');
const routerBasename = resolvedBasename === '' ? '/' : resolvedBasename;
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { basename: routerBasename, children: _jsx(App, {}) }) }));
//# sourceMappingURL=main.js.map