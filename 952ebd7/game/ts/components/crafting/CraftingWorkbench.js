import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './CraftingWorkbench.css';
const partyMembers = [
    {
        id: 'lysa',
        name: 'Lysa',
        role: 'Forager',
        portrait: '🪵',
        stats: [
            { label: 'Stamina', value: 82, color: '#7bc96f' },
            { label: 'Focus', value: 64, color: '#58b368' },
            { label: 'Spirit', value: 54, color: '#3da35d' }
        ]
    },
    {
        id: 'toma',
        name: 'Toma',
        role: 'Elder',
        portrait: '🦴',
        stats: [
            { label: 'Stamina', value: 48, color: '#f2a65a' },
            { label: 'Focus', value: 72, color: '#f5853f' },
            { label: 'Spirit', value: 90, color: '#f76f8e' }
        ]
    },
    {
        id: 'bera',
        name: 'Bera',
        role: 'Crafter',
        portrait: '🛠️',
        stats: [
            { label: 'Stamina', value: 95, color: '#70c1ff' },
            { label: 'Focus', value: 88, color: '#4ab3f4' },
            { label: 'Spirit', value: 61, color: '#248bd5' }
        ]
    }
];
const resourceChips = [
    { id: 'vigor', icon: '💚', label: 'Tribe Vigor', value: 89, delta: 3 },
    { id: 'leaves', icon: '🍃', label: 'Leaves', value: 54, delta: 5 },
    { id: 'berries', icon: '🍓', label: 'Berries', value: 32, delta: -2 }
];
const workbenchIngredientSlots = [
    { id: 'reed', icon: '🌿', label: 'Reed Bundles', quantity: 3 },
    { id: 'sap', icon: '🧴', label: 'Tree Sap', quantity: 1 },
    { id: 'twine', icon: '🪢', label: 'Twine', quantity: 2 }
];
const workbenchToolSlots = [
    { id: 'knife', icon: '🔪', label: 'Stone Knife' },
    { id: 'mallet', icon: '🔨', label: 'Wood Mallet' }
];
const workbenchPreviewSlot = {
    id: 'basket',
    icon: '🧺',
    label: 'Woven Basket',
    quantity: 1
};
const categories = [
    { id: 'food', label: 'Food', icon: '🍖' },
    { id: 'tools', label: 'Tools', icon: '🪓' },
    { id: 'armors', label: 'Armors', icon: '🛡️' },
    { id: 'buildings', label: 'Buildings', icon: '🏕️' },
    { id: 'misc', label: 'Misc', icon: '🎒' }
];
const inventoryItems = [
    { id: 'campfire', label: 'Campfire', icon: '🔥', quantity: 1 },
    { id: 'log', label: 'Sturdy Log', icon: '🌳', quantity: 8 },
    { id: 'saplings', label: 'Saplings', icon: '🌱', quantity: 10 },
    { id: 'twigs', label: 'Dry Twigs', icon: '🪵', quantity: 12 },
    { id: 'stone', label: 'Shaped Stone', icon: '🪨', quantity: 6 },
    { id: 'leaf', label: 'Weaving Leaves', icon: '🍂', quantity: 18 },
    { id: 'berries', label: 'Berries', icon: '🍇', quantity: 14 },
    { id: 'rope', label: 'Braided Rope', icon: '🧵', quantity: 4 },
    { id: 'flint', label: 'Flint Shard', icon: '⚒️', quantity: 7 }
];
const totalInventorySlots = 25;
const inventorySlots = Array.from({ length: totalInventorySlots }, (_, index) => {
    return inventoryItems[index] ?? null;
});
export const CraftingWorkbench = () => {
    return (_jsxs("div", { className: "crafting-workbench", role: "application", "aria-label": "Tribal crafting workbench", children: [_jsxs("div", { className: "crafting-workbench__board", children: [_jsxs("header", { className: "crafting-workbench__status", children: [_jsx("div", { className: "crafting-workbench__party", "aria-label": "Party status", children: partyMembers.map((member) => (_jsxs("article", { className: "crafting-workbench__party-member", children: [_jsx("div", { className: "crafting-workbench__portrait", "aria-hidden": "true", children: member.portrait }), _jsxs("div", { className: "crafting-workbench__member-body", children: [_jsxs("div", { className: "crafting-workbench__member-header", children: [_jsx("h3", { children: member.name }), _jsx("span", { className: "crafting-workbench__member-role", children: member.role })] }), _jsx("ul", { className: "crafting-workbench__stat-list", children: member.stats.map((stat) => (_jsxs("li", { children: [_jsx("span", { className: "crafting-workbench__stat-label", children: stat.label }), _jsx("div", { className: "crafting-workbench__progress", role: "meter", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": stat.value, "aria-label": `${stat.label} ${stat.value}%`, children: _jsx("span", { className: "crafting-workbench__progress-value", style: { width: `${stat.value}%`, background: stat.color } }) })] }, stat.label))) })] })] }, member.id))) }), _jsx("div", { className: "crafting-workbench__resources", "aria-label": "Tribe resources", children: resourceChips.map((resource) => (_jsxs("div", { className: "crafting-workbench__resource-chip", children: [_jsx("span", { className: "crafting-workbench__resource-icon", "aria-hidden": "true", children: resource.icon }), _jsxs("div", { children: [_jsx("span", { className: "crafting-workbench__resource-label", children: resource.label }), _jsxs("span", { className: "crafting-workbench__resource-value", children: [resource.value, _jsx("span", { className: `crafting-workbench__resource-delta ${resource.delta >= 0 ? 'is-positive' : 'is-negative'}`, children: resource.delta >= 0 ? `+${resource.delta}` : resource.delta })] })] })] }, resource.id))) })] }), _jsxs("div", { className: "crafting-workbench__workbench", role: "region", "aria-labelledby": "workbench-heading", children: [_jsx("h2", { id: "workbench-heading", className: "crafting-workbench__workbench-title", children: "Workbench" }), _jsxs("div", { className: "crafting-workbench__workbench-slots", children: [_jsx("div", { className: "crafting-workbench__slot-group", "aria-label": "Ingredient Slot", children: workbenchIngredientSlots.map((slot) => (_jsxs("div", { className: "crafting-workbench__slot", children: [_jsx("span", { className: "crafting-workbench__slot-icon", "aria-hidden": "true", children: slot.icon }), _jsxs("span", { className: "crafting-workbench__slot-qty", children: ["x", slot.quantity] }), _jsx("span", { className: "crafting-workbench__slot-label", children: slot.label })] }, slot.id))) }), _jsx("div", { className: "crafting-workbench__slot-group", "aria-label": "Tool Slot", children: workbenchToolSlots.map((slot) => (_jsxs("div", { className: "crafting-workbench__slot crafting-workbench__slot--tool", children: [_jsx("span", { className: "crafting-workbench__slot-icon", "aria-hidden": "true", children: slot.icon }), _jsx("span", { className: "crafting-workbench__slot-label", children: slot.label })] }, slot.id))) }), _jsxs("div", { className: "crafting-workbench__slot crafting-workbench__slot--preview", "aria-label": "Preview Slot", children: [_jsx("span", { className: "crafting-workbench__slot-icon", "aria-hidden": "true", children: workbenchPreviewSlot.icon }), _jsxs("span", { className: "crafting-workbench__slot-qty", children: ["x", workbenchPreviewSlot.quantity] }), _jsx("span", { className: "crafting-workbench__slot-label", children: workbenchPreviewSlot.label })] })] }), _jsxs("div", { className: "crafting-workbench__workbench-footer", children: [_jsx("div", { className: "crafting-workbench__categories", role: "tablist", "aria-label": "Recipe categories", children: categories.map((category) => (_jsxs("span", { role: "tab", "aria-selected": category.id === 'tools', className: `crafting-workbench__category${category.id === 'tools' ? ' is-active' : ''}`, children: [_jsx("span", { "aria-hidden": "true", children: category.icon }), category.label] }, category.id))) }), _jsx("button", { type: "button", className: "crafting-workbench__craft-button", children: "Craft Button \u2014 Start Selected Recipe" })] })] })] }), _jsxs("section", { className: "crafting-workbench__inventory", role: "region", "aria-labelledby": "inventory-heading", children: [_jsxs("div", { className: "crafting-workbench__inventory-header", children: [_jsx("h2", { id: "inventory-heading", children: "Inventory" }), _jsx("span", { className: "crafting-workbench__inventory-capacity", children: "Capacity 25 slots" })] }), _jsx("div", { className: "crafting-workbench__inventory-grid", role: "grid", "aria-readonly": "true", children: inventorySlots.map((slot, index) => (_jsx("div", { role: "gridcell", "aria-label": slot
                                ? `${slot.label} Inventory Slot, quantity ${slot.quantity}`
                                : 'Empty Inventory Slot', className: `crafting-workbench__inventory-slot${slot ? ' has-item' : ''}`, children: slot ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "crafting-workbench__inventory-icon", "aria-hidden": "true", children: slot.icon }), _jsx("span", { className: "crafting-workbench__inventory-qty", children: slot.quantity })] })) : (_jsx("span", { className: "crafting-workbench__inventory-empty", children: "Empty Inventory Slot" })) }, `inventory-slot-${index}`))) })] })] }));
};
//# sourceMappingURL=CraftingWorkbench.js.map