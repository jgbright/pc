import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { itemTypes } from '@/data/items';
const rarityLabels = {
    common: 'Common',
    uncommon: 'Uncommon',
    rare: 'Rare',
    legendary: 'Legendary'
};
export const InventoryPage = () => {
    return (_jsxs("section", { children: [_jsx("h1", { children: "Inventory" }), _jsx("p", { children: "Sample inventory data for rapid prototyping of UI flows and stats." }), _jsx("div", { className: "card-grid", children: itemTypes.map((item) => (_jsxs("article", { className: `card rarity-${item.rarity}`, children: [_jsx("h3", { children: item.name }), _jsxs("p", { children: [_jsx("strong", { children: "Rarity:" }), " ", rarityLabels[item.rarity]] }), _jsxs("p", { children: [_jsx("strong", { children: "Craftable:" }), " ", item.craftable ? 'Yes' : 'No'] }), _jsxs("p", { children: [_jsx("strong", { children: "Minion can scavenge:" }), " ", item.scavengedByMinion ? 'Yes' : 'No'] }), item.energyRestored !== undefined && (_jsxs("p", { children: [_jsx("strong", { children: "Energy restored:" }), " ", item.energyRestored] })), item.returnsItemId && (_jsxs("p", { children: [_jsx("strong", { children: "Returns item:" }), " ", item.returnsItemId] }))] }, item.id))) })] }));
};
//# sourceMappingURL=InventoryPage.js.map