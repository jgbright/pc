import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const features = [
    {
        title: "Survival with personality",
        description: "Gather, cook, and keep warm while curious dinosaurs wander your campsite looking for snacks and attention."
    },
    {
        title: "Tactile crafting",
        description: "Sketch blueprints, dig up fossils, and snap parts together to create gear that changes how you explore."
    },
    {
        title: "Shared expeditions",
        description: "Drop into a friend's camp, trade discoveries, and fill a communal expedition journal with tall tales."
    },
    {
        title: "Living history",
        description: "Mini-games, museum exhibits, and late-night campfire stories unlock lore, jokes, and hidden quests."
    }
];
export const FeaturesPage = () => {
    return (_jsxs("section", { className: "page", "aria-labelledby": "features-heading", children: [_jsx("h2", { id: "features-heading", children: "What makes PaleoCraft a delight" }), _jsx("ul", { className: "feature-grid", children: features.map((feature) => (_jsxs("li", { className: "feature-card", children: [_jsx("h3", { children: feature.title }), _jsx("p", { children: feature.description })] }, feature.title))) })] }));
};
//# sourceMappingURL=FeaturesPage.js.map