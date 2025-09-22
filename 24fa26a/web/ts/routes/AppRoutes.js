import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import { ContactPage } from '@/pages/ContactPage';
import { FeaturesPage } from '@/pages/FeaturesPage';
import { OverviewPage } from '@/pages/OverviewPage';
import { PricingPage } from '@/pages/PricingPage';
export const AppRoutes = () => (_jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(OverviewPage, {}) }), _jsx(Route, { path: "/features", element: _jsx(FeaturesPage, {}) }), _jsx(Route, { path: "/pricing", element: _jsx(PricingPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) })] }) }));
//# sourceMappingURL=AppRoutes.js.map