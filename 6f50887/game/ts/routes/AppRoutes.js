import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { CraftingPage } from '@/pages/CraftingPage';
import { InventoryPage } from '@/pages/InventoryPage';
import { MainGameScreen } from '@/pages/MainGameScreen';
export const AppRoutes = () => (_jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/game", element: _jsx(MainGameScreen, {}) }), _jsx(Route, { path: "/crafting", element: _jsx(CraftingPage, {}) }), _jsx(Route, { path: "/inventory", element: _jsx(InventoryPage, {}) })] }) }));
//# sourceMappingURL=AppRoutes.js.map