import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import { CommunityPage } from '@/pages/CommunityPage';
import { FeaturesPage } from '@/pages/FeaturesPage';
import { OverviewPage } from '@/pages/OverviewPage';
import { WorldPage } from '@/pages/WorldPage';
export const AppRoutes = () => (_jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(OverviewPage, {}) }), _jsx(Route, { path: "/features", element: _jsx(FeaturesPage, {}) }), _jsx(Route, { path: "/world", element: _jsx(WorldPage, {}) }), _jsx(Route, { path: "/community", element: _jsx(CommunityPage, {}) })] }) }));
//# sourceMappingURL=AppRoutes.js.map