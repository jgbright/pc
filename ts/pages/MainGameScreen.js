import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import playerAvatar from '../assets/avatars/player.svg';
import guruAvatar from '../assets/avatars/guru.svg';
import minionAvatar from '../assets/avatars/minion.svg';
import './MainGameScreen.css';
const avatars = [
    {
        id: 'player',
        name: 'Kaia',
        role: 'Trailblazer',
        iconSrc: playerAvatar,
        note: 'Focused on refining ration recipes.',
        satiation: { current: 68, max: 100, warningThreshold: 25 }
    },
    {
        id: 'guru',
        name: 'Siku',
        role: 'Tribal Guru',
        iconSrc: guruAvatar,
        note: 'Provides passive crafting bonuses. No hunger tracking.'
    },
    {
        id: 'minion',
        name: 'Roo',
        role: 'Gatherer',
        iconSrc: minionAvatar,
        note: 'Too hungry to explore. Must eat before resuming jobs.',
        satiation: { current: 0, max: 100, warningThreshold: 25 }
    }
];
const craftIngredients = [
    { id: 'peeled-banana', name: 'Peeled Banana', icon: '🍌', quantity: 1 },
    { id: 'shelled-peanut', name: 'Shelled Peanut', icon: '🥜', quantity: 2 },
    { id: 'coconut-flesh', name: 'Coconut Flesh', icon: '🥥', quantity: 1 }
];
const craftTool = {
    id: 'stone-knife',
    name: 'Stone Knife',
    icon: '🔪',
    durability: { current: 14, max: 25 }
};
const craftPreview = {
    id: 'jungle-ration',
    name: 'Jungle Ration',
    icon: '🍱',
    quantity: 1,
    energyCost: 12,
    byproducts: ['Coconut Shell']
};
const craftingStatuses = [
    {
        id: 'queue',
        message: 'Ready to craft 1 Jungle Ration. Hold the craft button for batch crafting (1s per craft).',
        type: 'info'
    },
    {
        id: 'failure',
        message: 'Failed to craft Charred Greens. Produced Green Poop byproduct.',
        type: 'error'
    }
];
const recipeSpotlight = [
    {
        id: 'coconut-cycle',
        name: 'Open Coconut → Raw Flesh + Shell',
        category: 'food',
        summary: 'Use a hammer to crack coconuts, then a cutting tool to portion the flesh.'
    },
    {
        id: 'banana-prep',
        name: 'Peeled Banana → Sliced Banana',
        category: 'food',
        summary: 'Knife work adds nutrition but consumes stamina.'
    },
    {
        id: 'peanut-boil',
        name: 'Shelled Peanut → Boiled Peanut',
        category: 'food',
        summary: 'Requires a fire source. Great for minion satiation boosts.'
    },
    {
        id: 'stone-chain',
        name: 'Rock → Sharpened Stone → Knife',
        category: 'tools',
        summary: 'Upgrade path that maximizes durability before investing in metal tools.'
    }
];
const inventorySeeds = [
    {
        type: 'item',
        id: 'whole-coconut',
        name: 'Coconut',
        icon: '🥥',
        quantity: 4,
        category: 'food'
    },
    {
        type: 'item',
        id: 'peeled-banana-stack',
        name: 'Peeled Banana',
        icon: '🍌',
        quantity: 3,
        category: 'food'
    },
    {
        type: 'item',
        id: 'banana',
        name: 'Banana',
        icon: '🍌',
        quantity: 5,
        category: 'food'
    },
    {
        type: 'item',
        id: 'shelled-peanut',
        name: 'Shelled Peanut',
        icon: '🥜',
        quantity: 12,
        category: 'food'
    },
    {
        type: 'item',
        id: 'stone-knife',
        name: 'Stone Knife',
        icon: '🔪',
        quantity: 1,
        category: 'tools',
        wear: { current: 14, max: 25 }
    },
    {
        type: 'item',
        id: 'rock-hammer',
        name: 'Rock Hammer',
        icon: '🪨',
        quantity: 1,
        category: 'tools',
        wear: { current: 2, max: 5 }
    },
    {
        type: 'item',
        id: 'sharpened-stone-stack',
        name: 'Sharpened Stone',
        icon: '🪨',
        quantity: 2,
        category: 'tools',
        wear: { current: 5, max: 5 }
    },
    {
        type: 'item',
        id: 'leaf-wrap',
        name: 'Leaf Wrap Armor',
        icon: '🥬',
        quantity: 1,
        category: 'armors',
        wear: { current: 18, max: 30 }
    },
    {
        type: 'item',
        id: 'campfire-kit',
        name: 'Campfire Kit',
        icon: '🔥',
        quantity: 1,
        category: 'buildings'
    },
    {
        type: 'item',
        id: 'herb-bundle',
        name: 'Herb Bundle',
        icon: '🌿',
        quantity: 9,
        category: 'misc'
    },
    {
        type: 'container',
        id: 'shell-cache',
        name: 'Coconut Shell Cache',
        icon: '🥥',
        category: 'misc',
        capacity: 6,
        contents: [
            { id: 'sliced-banana', name: 'Sliced Banana', icon: '🍌', quantity: 3 },
            { id: 'coconut-shell', name: 'Coconut Shell', icon: '🥥', quantity: 2 },
            null,
            { id: 'raw-peanut', name: 'Raw Peanut', icon: '🥜', quantity: 6 },
            null,
            null
        ]
    },
    {
        type: 'container',
        id: 'woven-basket',
        name: 'Woven Basket',
        icon: '🧺',
        category: 'misc',
        capacity: 12,
        contents: [
            { id: 'fiber-bundle', name: 'Plant Fiber', icon: '🪢', quantity: 6 },
            { id: 'resin', name: 'Tree Resin', icon: '🧴', quantity: 3 },
            { id: 'dry-twigs', name: 'Dry Twigs', icon: '🪵', quantity: 8 },
            null,
            null,
            { id: 'flint-shard', name: 'Flint Shard', icon: '⚒️', quantity: 4 },
            null,
            null,
            null,
            null,
            null,
            null
        ]
    },
    {
        type: 'item',
        id: 'boiled-peanut',
        name: 'Boiled Peanut',
        icon: '🥜',
        quantity: 4,
        category: 'food'
    },
    {
        type: 'item',
        id: 'raw-coconut-flesh',
        name: 'Raw Coconut Flesh',
        icon: '🥥',
        quantity: 2,
        category: 'food'
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];
const inventorySlots = Array.from({ length: 25 }, (_, index) => inventorySeeds[index] ?? null);
const inventoryContainers = inventorySlots.filter((entry) => entry !== null && entry.type === 'container');
const categories = [
    { id: 'all', label: 'All', icon: '⭐' },
    { id: 'food', label: 'Food', icon: '🍖' },
    { id: 'tools', label: 'Tools', icon: '🪓' },
    { id: 'armors', label: 'Armors', icon: '🛡️' },
    { id: 'buildings', label: 'Buildings', icon: '🏕️' },
    { id: 'misc', label: 'Misc', icon: '🎒' }
];
const craftTimeSeconds = 1;
export const MainGameScreen = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeContainerId, setActiveContainerId] = useState(null);
    const activeContainer = useMemo(() => {
        if (!activeContainerId) {
            return null;
        }
        return (inventoryContainers.find((container) => container.id === activeContainerId) ?? null);
    }, [activeContainerId]);
    return (_jsxs("section", { className: "main-game-screen", "aria-label": "Main inventory and crafting screen", children: [_jsx("header", { className: "main-game-screen__avatar-row", "aria-label": "Avatar status row", children: avatars.map((avatar) => {
                    const satiation = avatar.satiation;
                    const satiationPercentage = satiation
                        ? Math.max(0, Math.min(100, Math.round((satiation.current / satiation.max) * 100)))
                        : 0;
                    const isDepleted = satiation?.current === 0;
                    const isWarning = !!satiation && satiation.current > 0 && satiation.current <= satiation.warningThreshold;
                    return (_jsxs("article", { className: `main-game-screen__avatar${isWarning ? ' is-warning' : ''}${isDepleted ? ' is-depleted' : ''}`, children: [satiation && (_jsxs("div", { className: "main-game-screen__satiation", role: "group", "aria-label": `${avatar.name} satiation`, children: [_jsx("div", { className: "main-game-screen__satiation-meter", role: "meter", "aria-valuemin": 0, "aria-valuemax": satiation.max, "aria-valuenow": satiation.current, "aria-label": `${avatar.name} satiation ${satiation.current} of ${satiation.max}`, children: _jsx("span", { className: "main-game-screen__satiation-fill", style: { width: `${satiationPercentage}%` } }) }), _jsxs("span", { className: "main-game-screen__satiation-value", children: [satiation.current, "/", satiation.max] }), isWarning && !isDepleted && (_jsx("span", { className: "main-game-screen__satiation-state", role: "status", children: "Warning: getting hungry" })), isDepleted && (_jsx("span", { className: "main-game-screen__satiation-state", role: "status", children: "Satiation empty \u2014 limited to eating actions" }))] })), _jsxs("div", { className: "main-game-screen__avatar-body", children: [_jsx("img", { className: "main-game-screen__avatar-icon", src: avatar.iconSrc, alt: `${avatar.name} portrait` }), _jsxs("div", { children: [_jsx("h2", { children: avatar.name }), _jsx("p", { className: "main-game-screen__avatar-role", children: avatar.role }), _jsx("p", { className: "main-game-screen__avatar-note", children: avatar.note })] })] })] }, avatar.id));
                }) }), _jsxs("section", { className: "main-game-screen__craft", "aria-labelledby": "craft-section-heading", children: [_jsxs("div", { className: "main-game-screen__craft-header", children: [_jsx("h2", { id: "craft-section-heading", children: "Craft work tray" }), _jsx("p", { children: "Drag ingredients or tools from the inventory into the tray. Recipes validate server-side; the preview shows the guaranteed outcome before crafting." })] }), _jsxs("div", { className: "main-game-screen__tray", children: [_jsxs("div", { className: "main-game-screen__tray-columns", children: [_jsxs("div", { className: "main-game-screen__tray-column", "aria-label": "Ingredient slots", children: [_jsx("h3", { children: "Ingredients" }), _jsx("div", { className: "main-game-screen__tray-grid", children: craftIngredients.map((ingredient) => (_jsxs("div", { className: "main-game-screen__tray-slot", children: [_jsx("span", { className: "main-game-screen__tray-icon", "aria-hidden": "true", children: ingredient.icon }), _jsx("span", { className: "main-game-screen__tray-label", children: ingredient.name }), _jsxs("span", { className: "main-game-screen__tray-qty", children: ["x", ingredient.quantity] })] }, ingredient.id))) })] }), _jsxs("div", { className: "main-game-screen__tray-column", "aria-label": "Tool slot", children: [_jsx("h3", { children: "Tool" }), _jsxs("div", { className: "main-game-screen__tray-slot main-game-screen__tray-slot--tool", children: [_jsx("span", { className: "main-game-screen__tray-icon", "aria-hidden": "true", children: craftTool.icon }), _jsx("span", { className: "main-game-screen__tray-label", children: craftTool.name }), _jsxs("span", { className: "main-game-screen__tray-durability", "aria-label": "Tool durability", children: ["Durability ", craftTool.durability.current, "/", craftTool.durability.max] })] })] }), _jsxs("div", { className: "main-game-screen__tray-column", "aria-label": "Preview output", children: [_jsx("h3", { children: "Preview" }), _jsxs("div", { className: "main-game-screen__tray-slot main-game-screen__tray-slot--preview", children: [_jsx("span", { className: "main-game-screen__tray-icon", "aria-hidden": "true", children: craftPreview.icon }), _jsxs("div", { className: "main-game-screen__tray-preview-info", children: [_jsx("span", { className: "main-game-screen__tray-label", children: craftPreview.name }), _jsxs("span", { className: "main-game-screen__tray-qty", children: ["x", craftPreview.quantity] }), _jsxs("span", { className: "main-game-screen__tray-meta", children: ["Energy cost: ", craftPreview.energyCost] }), _jsxs("span", { className: "main-game-screen__tray-meta", children: ["Byproducts: ", craftPreview.byproducts.join(', ')] })] })] })] })] }), _jsxs("div", { className: "main-game-screen__tray-actions", children: [_jsxs("button", { type: "button", className: "main-game-screen__craft-button", children: ["Craft (", craftTimeSeconds, "s)"] }), _jsx("div", { className: "main-game-screen__tray-status", role: "status", children: craftingStatuses.map((status) => (_jsx("p", { className: `main-game-screen__tray-message is-${status.type}`, children: status.message }, status.id))) })] })] }), _jsxs("aside", { className: "main-game-screen__recipes", "aria-label": "Highlighted recipes", children: [_jsx("h3", { children: "Recipe spotlight" }), _jsx("p", { children: "Category filters highlight relevant crafting flows." }), _jsx("ul", { children: recipeSpotlight.map((recipe) => {
                                    const isHighlighted = activeCategory === 'all' || recipe.category === activeCategory;
                                    return (_jsxs("li", { className: `main-game-screen__recipe${isHighlighted ? ' is-highlighted' : ''}`, children: [_jsx("strong", { children: recipe.name }), _jsx("span", { children: recipe.summary })] }, recipe.id));
                                }) })] })] }), _jsxs("section", { className: "main-game-screen__inventory", "aria-labelledby": "inventory-section-heading", children: [_jsxs("div", { className: "main-game-screen__inventory-header", children: [_jsxs("div", { children: [_jsx("h2", { id: "inventory-section-heading", children: "Inventory" }), _jsx("p", { children: "Stacks combine automatically when type and wear match. Right-click to split." })] }), _jsx("span", { className: "main-game-screen__inventory-capacity", children: "25 slots" })] }), _jsx("div", { className: "main-game-screen__category-tabs", role: "tablist", "aria-label": "Inventory categories", children: categories.map((category) => (_jsxs("button", { type: "button", role: "tab", "aria-selected": category.id === activeCategory, className: `main-game-screen__category${category.id === activeCategory ? ' is-active' : ''}`, onClick: () => setActiveCategory(category.id), children: [_jsx("span", { "aria-hidden": "true", children: category.icon }), category.label] }, category.id))) }), _jsx("div", { className: "main-game-screen__inventory-grid", role: "grid", "aria-readonly": "true", children: inventorySlots.map((slot, index) => {
                            const key = `inventory-slot-${index}`;
                            const shouldShow = !slot ||
                                activeCategory === 'all' ||
                                slot.category === activeCategory;
                            if (!slot || !shouldShow) {
                                return (_jsx("div", { className: "main-game-screen__slot", role: "gridcell", "aria-label": "Empty slot", children: _jsx("span", { className: "main-game-screen__slot-empty", children: "Empty" }) }, key));
                            }
                            if (slot.type === 'container') {
                                return (_jsxs("button", { type: "button", className: "main-game-screen__slot main-game-screen__slot--container", role: "gridcell", onClick: () => setActiveContainerId(slot.id), "aria-label": `${slot.name} container with capacity ${slot.capacity}`, children: [_jsx("span", { className: "main-game-screen__slot-icon", "aria-hidden": "true", children: slot.icon }), _jsx("span", { className: "main-game-screen__slot-label", children: slot.name }), _jsxs("span", { className: "main-game-screen__slot-capacity", children: [slot.capacity, " slots"] })] }, key));
                            }
                            return (_jsxs("div", { className: "main-game-screen__slot main-game-screen__slot--item", role: "gridcell", "aria-label": `${slot.name}, quantity ${slot.quantity}`, children: [_jsx("span", { className: "main-game-screen__slot-icon", "aria-hidden": "true", children: slot.icon }), _jsx("span", { className: "main-game-screen__slot-qty", children: slot.quantity }), slot.wear && (_jsxs("span", { className: "main-game-screen__slot-wear", "aria-label": `Wear ${slot.wear.current} of ${slot.wear.max}`, children: [slot.wear.current, "/", slot.wear.max] })), _jsx("span", { className: "main-game-screen__slot-label", children: slot.name })] }, key));
                        }) }), _jsx("p", { className: "main-game-screen__inventory-note", children: "Containers occupy inventory slots but expand storage. Drag between panels to reorganize." })] }), activeContainer && (_jsx("div", { className: "main-game-screen__container-overlay", role: "dialog", "aria-modal": "true", children: _jsxs("div", { className: "main-game-screen__container-panel", children: [_jsxs("header", { className: "main-game-screen__container-header", children: [_jsxs("div", { children: [_jsx("h3", { children: activeContainer.name }), _jsxs("p", { children: ["Capacity ", activeContainer.capacity, " slots. Containers serialize independently of the core inventory grid."] })] }), _jsx("button", { type: "button", className: "main-game-screen__close-container", onClick: () => setActiveContainerId(null), children: "Close" })] }), _jsx("div", { className: "main-game-screen__container-grid", role: "grid", "aria-readonly": "true", children: activeContainer.contents.map((content, index) => (_jsx("div", { className: "main-game-screen__container-slot", role: "gridcell", children: content ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "main-game-screen__container-icon", "aria-hidden": "true", children: content.icon }), _jsx("span", { className: "main-game-screen__container-qty", children: content.quantity }), content.wear && (_jsxs("span", { className: "main-game-screen__container-wear", children: [content.wear.current, "/", content.wear.max] })), _jsx("span", { className: "main-game-screen__container-label", children: content.name })] })) : (_jsx("span", { className: "main-game-screen__container-empty", children: "Empty" })) }, `${activeContainer.id}-slot-${index}`))) })] }) }))] }));
};
//# sourceMappingURL=MainGameScreen.js.map