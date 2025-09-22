import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { items } from '@/data/items';
const rarityLabels = {
    common: 'Common',
    uncommon: 'Uncommon',
    rare: 'Rare',
    legendary: 'Legendary'
};
export const InventoryPage = () => {
    return (_jsxs("section", { children: [_jsx("h1", { children: "Inventory" }), _jsx("p", { children: "Sample inventory data for rapid prototyping of UI flows and stats." }), _jsx("div", { className: "card-grid", children: items.map((item) => (_jsxs("article", { className: `card rarity-${item.rarity}`, children: [_jsx("h3", { children: item.name }), _jsx("p", { children: item.description }), _jsxs("p", { children: [_jsx("strong", { children: "Rarity:" }), " ", rarityLabels[item.rarity]] })] }, item.id))) })] }));
};
//# sourceMappingURL=InventoryPage.js.map