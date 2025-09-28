import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
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
const initialWorkbenchIngredientSlots = [
    {
        id: 'reed-slot',
        stack: { itemId: 'reed-bundle', icon: '🌿', label: 'Reed Bundles', count: 3 }
    },
    {
        id: 'sap-slot',
        stack: { itemId: 'tree-sap', icon: '🧴', label: 'Tree Sap', count: 1 }
    },
    {
        id: 'twine-slot',
        stack: { itemId: 'twine', icon: '🪢', label: 'Twine', count: 2 }
    }
];
const initialWorkbenchToolSlots = [
    { id: 'knife', icon: '🔪', label: 'Stone Knife', durability: 14, maxDurability: 20 },
    { id: 'mallet', icon: '🔨', label: 'Wood Mallet', durability: 18, maxDurability: 24 }
];
const initialPreviewSlot = {
    itemId: 'woven-basket',
    icon: '🧺',
    label: 'Woven Basket',
    count: 1
};
const categories = [
    { id: 'food', label: 'Food', icon: '🍖' },
    { id: 'tools', label: 'Tools', icon: '🪓' },
    { id: 'armors', label: 'Armors', icon: '🛡️' },
    { id: 'buildings', label: 'Buildings', icon: '🏕️' },
    { id: 'misc', label: 'Misc', icon: '🎒' }
];
const inventoryStacks = [
    { itemId: 'campfire', label: 'Campfire', icon: '🔥', count: 1 },
    { itemId: 'sturdy-log', label: 'Sturdy Log', icon: '🌳', count: 8 },
    { itemId: 'saplings', label: 'Saplings', icon: '🌱', count: 10 },
    { itemId: 'dry-twigs', label: 'Dry Twigs', icon: '🪵', count: 12 },
    { itemId: 'shaped-stone', label: 'Shaped Stone', icon: '🪨', count: 6 },
    { itemId: 'weaving-leaf', label: 'Weaving Leaves', icon: '🍂', count: 18 },
    { itemId: 'berries', label: 'Berries', icon: '🍇', count: 14 },
    { itemId: 'braided-rope', label: 'Braided Rope', icon: '🧵', count: 4 },
    { itemId: 'flint-shard', label: 'Flint Shard', icon: '⚒️', count: 7 }
];
const totalInventorySlots = 25;
const initialInventorySlots = Array.from({ length: totalInventorySlots }, (_, index) => {
    return inventoryStacks[index] ?? null;
});
const STACK_CAPACITY = 20;
const wovenBasketRecipe = {
    id: 'woven-basket',
    craftTimeMs: 1000,
    ingredients: [
        { itemId: 'reed-bundle', count: 1 },
        { itemId: 'tree-sap', count: 1 },
        { itemId: 'twine', count: 1 }
    ],
    toolCosts: [
        { toolId: 'knife', durabilityLoss: 2 },
        { toolId: 'mallet', durabilityLoss: 1 }
    ],
    outputs: [initialPreviewSlot]
};
const initialStatusFeed = [
    {
        id: 'ready',
        message: 'Craft Status Feed ready. Craft task will produce 1 Woven Basket.',
        tone: 'info'
    }
];
const mergeOutputsIntoInventory = (slots, outputs) => {
    const nextSlots = slots.map((slot) => (slot ? { ...slot } : null));
    for (const output of outputs) {
        let remaining = output.count;
        const outputDurability = output.durability ?? null;
        for (let index = 0; index < nextSlots.length && remaining > 0; index += 1) {
            const slot = nextSlots[index];
            if (!slot)
                continue;
            if (slot.itemId !== output.itemId)
                continue;
            if ((slot.durability ?? null) !== outputDurability)
                continue;
            const availableSpace = STACK_CAPACITY - slot.count;
            if (availableSpace <= 0)
                continue;
            const moved = Math.min(availableSpace, remaining);
            nextSlots[index] = { ...slot, count: slot.count + moved };
            remaining -= moved;
        }
        for (let index = 0; index < nextSlots.length && remaining > 0; index += 1) {
            if (nextSlots[index])
                continue;
            const moved = Math.min(STACK_CAPACITY, remaining);
            nextSlots[index] = { ...output, count: moved };
            remaining -= moved;
        }
        if (remaining > 0) {
            return { success: false, slots };
        }
    }
    return { success: true, slots: nextSlots };
};
export const CraftingWorkbench = () => {
    const [ingredientSlots, setIngredientSlots] = useState(initialWorkbenchIngredientSlots);
    const [toolSlots, setToolSlots] = useState(initialWorkbenchToolSlots);
    const [previewSlot, setPreviewSlot] = useState(initialPreviewSlot);
    const [inventorySlots, setInventorySlots] = useState(initialInventorySlots);
    const [statusFeed, setStatusFeed] = useState(initialStatusFeed);
    const [activeTask, setActiveTask] = useState(null);
    const isCrafting = activeTask?.status === 'running';
    const craftTimeSeconds = useMemo(() => wovenBasketRecipe.craftTimeMs / 1000, []);
    const appendStatusEntry = (message, tone) => {
        setStatusFeed((entries) => [
            ...entries,
            { id: `${tone}-${Date.now()}`, message, tone }
        ]);
    };
    const handleCraft = () => {
        if (isCrafting)
            return;
        const missingIngredient = wovenBasketRecipe.ingredients.find((ingredient) => {
            const slot = ingredientSlots.find((candidate) => candidate.stack.itemId === ingredient.itemId);
            if (!slot)
                return true;
            return slot.stack.count < ingredient.count;
        });
        if (missingIngredient) {
            appendStatusEntry('Craft task failed. Ingredient Slot is missing a required Stack.', 'error');
            setActiveTask({
                id: `failed-${Date.now()}`,
                recipeId: wovenBasketRecipe.id,
                startedAt: Date.now(),
                durationMs: wovenBasketRecipe.craftTimeMs,
                status: 'failed'
            });
            return;
        }
        const depletedTool = wovenBasketRecipe.toolCosts.find((cost) => {
            const tool = toolSlots.find((candidate) => candidate.id === cost.toolId);
            if (!tool)
                return true;
            return tool.durability < cost.durabilityLoss;
        });
        if (depletedTool) {
            appendStatusEntry('Craft task failed. Tool Slot needs more durability.', 'error');
            setActiveTask({
                id: `failed-${Date.now()}`,
                recipeId: wovenBasketRecipe.id,
                startedAt: Date.now(),
                durationMs: wovenBasketRecipe.craftTimeMs,
                status: 'failed'
            });
            return;
        }
        const inventorySimulation = mergeOutputsIntoInventory(inventorySlots, wovenBasketRecipe.outputs);
        if (!inventorySimulation.success) {
            appendStatusEntry('Craft task failed. Inventory is out of slots.', 'error');
            setActiveTask({
                id: `failed-${Date.now()}`,
                recipeId: wovenBasketRecipe.id,
                startedAt: Date.now(),
                durationMs: wovenBasketRecipe.craftTimeMs,
                status: 'failed'
            });
            return;
        }
        const startedAt = Date.now();
        const task = {
            id: `task-${startedAt}`,
            recipeId: wovenBasketRecipe.id,
            startedAt,
            durationMs: wovenBasketRecipe.craftTimeMs,
            status: 'running'
        };
        setActiveTask(task);
        appendStatusEntry(`Craft task running. Craft Time ${craftTimeSeconds}s.`, 'info');
        window.setTimeout(() => {
            let inventorySucceeded = true;
            setInventorySlots((slots) => {
                const result = mergeOutputsIntoInventory(slots, wovenBasketRecipe.outputs);
                if (!result.success) {
                    inventorySucceeded = false;
                    return slots;
                }
                return result.slots;
            });
            if (!inventorySucceeded) {
                setActiveTask({ ...task, status: 'failed' });
                appendStatusEntry('Craft task failed. Inventory is out of slots.', 'error');
                return;
            }
            setIngredientSlots((slots) => slots.map((slot) => {
                const cost = wovenBasketRecipe.ingredients.find((ingredient) => ingredient.itemId === slot.stack.itemId);
                if (!cost)
                    return slot;
                const newCount = Math.max(0, slot.stack.count - cost.count);
                return { ...slot, stack: { ...slot.stack, count: newCount } };
            }));
            setToolSlots((slots) => slots.map((slot) => {
                const cost = wovenBasketRecipe.toolCosts.find((toolCost) => toolCost.toolId === slot.id);
                if (!cost)
                    return slot;
                const newDurability = Math.max(0, slot.durability - cost.durabilityLoss);
                return { ...slot, durability: newDurability };
            }));
            setPreviewSlot((slot) => ({ ...slot }));
            setActiveTask({ ...task, status: 'done' });
            appendStatusEntry('Craft task complete. Output stored in Inventory.', 'success');
        }, wovenBasketRecipe.craftTimeMs);
    };
    const craftButtonLabel = isCrafting
        ? 'Craft task running...'
        : `Craft Button — Craft Woven Basket (Craft Time ${craftTimeSeconds}s)`;
    return (_jsxs("div", { className: "crafting-workbench", role: "application", "aria-label": "Tribal crafting workbench", children: [_jsxs("div", { className: "crafting-workbench__board", children: [_jsxs("header", { className: "crafting-workbench__status", children: [_jsx("div", { className: "crafting-workbench__party", "aria-label": "Party status", children: partyMembers.map((member) => (_jsxs("article", { className: "crafting-workbench__party-member", children: [_jsx("div", { className: "crafting-workbench__portrait", "aria-hidden": "true", children: member.portrait }), _jsxs("div", { className: "crafting-workbench__member-body", children: [_jsxs("div", { className: "crafting-workbench__member-header", children: [_jsx("h3", { children: member.name }), _jsx("span", { className: "crafting-workbench__member-role", children: member.role })] }), _jsx("ul", { className: "crafting-workbench__stat-list", children: member.stats.map((stat) => (_jsxs("li", { children: [_jsx("span", { className: "crafting-workbench__stat-label", children: stat.label }), _jsx("div", { className: "crafting-workbench__progress", role: "meter", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": stat.value, "aria-label": `${stat.label} ${stat.value}%`, children: _jsx("span", { className: "crafting-workbench__progress-value", style: { width: `${stat.value}%`, background: stat.color } }) })] }, stat.label))) })] })] }, member.id))) }), _jsx("div", { className: "crafting-workbench__resources", "aria-label": "Tribe resources", children: resourceChips.map((resource) => (_jsxs("div", { className: "crafting-workbench__resource-chip", children: [_jsx("span", { className: "crafting-workbench__resource-icon", "aria-hidden": "true", children: resource.icon }), _jsxs("div", { children: [_jsx("span", { className: "crafting-workbench__resource-label", children: resource.label }), _jsxs("span", { className: "crafting-workbench__resource-value", children: [resource.value, _jsx("span", { className: `crafting-workbench__resource-delta ${resource.delta >= 0 ? 'is-positive' : 'is-negative'}`, children: resource.delta >= 0 ? `+${resource.delta}` : resource.delta })] })] })] }, resource.id))) })] }), _jsxs("div", { className: "crafting-workbench__workbench", role: "region", "aria-labelledby": "workbench-heading", children: [_jsx("h2", { id: "workbench-heading", className: "crafting-workbench__workbench-title", children: "Workbench" }), _jsxs("div", { className: "crafting-workbench__workbench-slots", children: [_jsx("div", { className: "crafting-workbench__slot-group", "aria-label": "Ingredient Slot", children: ingredientSlots.map((slot) => (_jsxs("div", { className: "crafting-workbench__slot", children: [_jsx("span", { className: "crafting-workbench__slot-icon", "aria-hidden": "true", children: slot.stack.icon }), _jsxs("span", { className: "crafting-workbench__slot-qty", children: ["x", slot.stack.count] }), _jsx("span", { className: "crafting-workbench__slot-label", children: slot.stack.label })] }, slot.id))) }), _jsx("div", { className: "crafting-workbench__slot-group", "aria-label": "Tool Slot", children: toolSlots.map((slot) => (_jsxs("div", { className: "crafting-workbench__slot crafting-workbench__slot--tool", children: [_jsx("span", { className: "crafting-workbench__slot-icon", "aria-hidden": "true", children: slot.icon }), _jsxs("span", { className: "crafting-workbench__slot-qty", children: ["Durability ", slot.durability, "/", slot.maxDurability] }), _jsx("span", { className: "crafting-workbench__slot-label", children: slot.label })] }, slot.id))) }), _jsxs("div", { className: "crafting-workbench__slot crafting-workbench__slot--preview", "aria-label": "Preview Slot", children: [_jsx("span", { className: "crafting-workbench__slot-icon", "aria-hidden": "true", children: previewSlot.icon }), _jsxs("span", { className: "crafting-workbench__slot-qty", children: ["x", previewSlot.count] }), _jsx("span", { className: "crafting-workbench__slot-label", children: previewSlot.label })] })] }), _jsxs("div", { className: "crafting-workbench__workbench-footer", children: [_jsx("div", { className: "crafting-workbench__categories", role: "tablist", "aria-label": "Recipe categories", children: categories.map((category) => (_jsxs("span", { role: "tab", "aria-selected": category.id === 'tools', className: `crafting-workbench__category${category.id === 'tools' ? ' is-active' : ''}`, children: [_jsx("span", { "aria-hidden": "true", children: category.icon }), category.label] }, category.id))) }), _jsx("button", { type: "button", className: "crafting-workbench__craft-button", onClick: handleCraft, disabled: isCrafting, children: craftButtonLabel })] })] })] }), _jsxs("section", { className: "crafting-workbench__status-feed", role: "log", "aria-live": "polite", "aria-label": "Craft Status Feed", children: [_jsx("h2", { children: "Craft Status Feed" }), _jsx("ul", { children: statusFeed.map((entry) => (_jsx("li", { className: `crafting-workbench__status-feed-entry crafting-workbench__status-feed-entry--${entry.tone}`, children: entry.message }, entry.id))) })] }), _jsxs("section", { className: "crafting-workbench__inventory", role: "region", "aria-labelledby": "inventory-heading", children: [_jsxs("div", { className: "crafting-workbench__inventory-header", children: [_jsx("h2", { id: "inventory-heading", children: "Inventory" }), _jsx("span", { className: "crafting-workbench__inventory-capacity", children: "Capacity 25 slots" })] }), _jsx("div", { className: "crafting-workbench__inventory-grid", role: "grid", "aria-readonly": "true", children: inventorySlots.map((slot, index) => (_jsx("div", { role: "gridcell", "aria-label": slot
                                ? `${slot.label} Inventory Slot, Stack count ${slot.count}`
                                : 'Empty Inventory Slot', className: `crafting-workbench__inventory-slot${slot ? ' has-item' : ''}`, children: slot ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "crafting-workbench__inventory-icon", "aria-hidden": "true", children: slot.icon }), _jsx("span", { className: "crafting-workbench__inventory-qty", children: slot.count })] })) : (_jsx("span", { className: "crafting-workbench__inventory-empty", children: "Empty Inventory Slot" })) }, `inventory-slot-${index}`))) })] })] }));
};
//# sourceMappingURL=CraftingWorkbench.js.map