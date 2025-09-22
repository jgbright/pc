import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const features = [
    {
        title: 'Cozy co-op play',
        description: 'Pop into a shared campsite, split up tasks, and reunite to show off the fossils, snacks, and silly gadgets you uncovered.'
    },
    {
        title: 'Tinker-friendly crafting',
        description: 'Mix shells, vines, and ancient tech to build contraptions that fling you across valleys or charm the gentlest dinosaurs.'
    },
    {
        title: 'Living world moments',
        description: 'Follow migrating herds at sunrise, surf obsidian rivers at night, and stumble upon secrets that only appear with friends.'
    },
    {
        title: 'A journal worth sharing',
        description: 'Snap photos, stamp discoveries, and trade stickers with the community so everyone sees why your expedition was unforgettable.'
    }
];
export const FeaturesPage = () => {
    return (_jsxs("section", { className: "page", "aria-labelledby": "features-heading", children: [_jsx("h2", { id: "features-heading", children: "Why PaleoCraft is pure fun" }), _jsx("ul", { className: "feature-grid", children: features.map((feature) => (_jsxs("li", { className: "feature-card", children: [_jsx("h3", { children: feature.title }), _jsx("p", { children: feature.description })] }, feature.title))) })] }));
};
//# sourceMappingURL=FeaturesPage.js.map