import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, NavLink } from 'react-router-dom';
import logo from '@/assets/logo.svg';
import './NavigationBar.css';
const links = [
    { to: '/', label: 'Overview' },
    { to: '/adventures', label: 'Adventures' },
    { to: '/features', label: 'Features' },
    { to: '/community', label: 'Community' }
];
export const NavigationBar = () => {
    return (_jsxs("header", { className: "navbar", children: [_jsxs(Link, { to: "/", className: "navbar-brand", "aria-label": "PaleoCraft marketing home", children: [_jsx("img", { src: logo, alt: "PaleoCraft logo", width: 40, height: 40 }), _jsx("span", { children: "PaleoCraft" })] }), _jsx("nav", { className: "navbar-links", "aria-label": "Primary", children: links.map((link) => (_jsx(NavLink, { to: link.to, className: ({ isActive }) => (isActive ? 'active' : undefined), end: link.to === '/', children: link.label }, link.to))) })] }));
};
//# sourceMappingURL=NavigationBar.js.map