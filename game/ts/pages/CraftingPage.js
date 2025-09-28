import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CraftingWorkbench } from '@/components/crafting/CraftingWorkbench';
import { recipes } from '@/data/recipes';
import { findItemType } from '@/data/items';
const describeTool = (toolId) => {
    if (toolId === 'hands') {
        return 'Hands';
    }
    return findItemType(toolId)?.name ?? toolId;
};
export const CraftingPage = () => {
    return (_jsxs("section", { className: "crafting-page", children: [_jsxs("header", { className: "crafting-page__intro", children: [_jsx("h1", { children: "Crafting Workbench" }), _jsx("p", { children: "Experiment with inputs, Tool Slot options, and tribe members to discover the perfect Recipe. The prototype below mirrors the in-game Workbench layout so we can test UX flows and capture visual baselines for the art team." })] }), _jsx(CraftingWorkbench, {}), _jsxs("section", { className: "crafting-page__recipes", "aria-labelledby": "recipe-list-heading", children: [_jsxs("div", { className: "crafting-page__recipes-header", children: [_jsx("h2", { id: "recipe-list-heading", children: "Reference Recipes" }), _jsx("p", { children: "These reference cards help verify the crafting data driving the Workbench mockup. Once the simulation is interactive we can wire the Workbench to these Recipes directly." })] }), _jsx("div", { className: "card-grid", children: recipes.map((recipe) => (_jsxs("article", { className: "card", "aria-labelledby": `${recipe.id}-title`, children: [_jsx("h3", { id: `${recipe.id}-title`, children: recipe.name }), _jsx("h4", { children: "Ingredient Slots" }), _jsx("ul", { children: recipe.ingredients.map((ingredient) => {
                                        const item = findItemType(ingredient.itemId);
                                        return (_jsxs("li", { children: [ingredient.quantity, "x ", item?.name ?? ingredient.itemId] }, ingredient.itemId));
                                    }) }), _jsx("h4", { children: "Tool Slot" }), (() => {
                                    const alternateToolIds = recipe.alternateToolIds ?? [];
                                    const hasToolRequirement = Boolean(recipe.toolId || alternateToolIds.length > 0);
                                    if (!hasToolRequirement) {
                                        return _jsx("p", { children: "Hands only. No tool item required." });
                                    }
                                    return (_jsxs("ul", { children: [recipe.toolId ? (_jsxs("li", { children: [describeTool(recipe.toolId), alternateToolIds.length > 0 ? (_jsxs("span", { children: [' ', "(Alternatives: ", alternateToolIds.map(describeTool).join(', '), ")"] })) : null] })) : null, !recipe.toolId && alternateToolIds.length > 0 ? (_jsx("li", { children: alternateToolIds.map(describeTool).join(', ') })) : null] }));
                                })(), _jsx("h4", { children: "Output" }), _jsx("ul", { children: recipe.outputs.map((output) => {
                                        const item = findItemType(output.itemId);
                                        return (_jsxs("li", { children: [output.quantity, "x ", item?.name ?? output.itemId] }, output.itemId));
                                    }) })] }, recipe.id))) })] })] }));
};
//# sourceMappingURL=CraftingPage.js.map