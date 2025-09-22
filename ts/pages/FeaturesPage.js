import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const features = [
    {
        title: 'Living biomes',
        description: 'Weather shifts, seasonal festivals, and playful wildlife create new stories every time you log in.'
    },
    {
        title: 'Friendship-first multiplayer',
        description: 'Drop-in co-op keeps sessions short, silly, and welcoming—perfect for couch co-conspirators or long-distance crews.'
    },
    {
        title: 'Inventive crafting',
        description: 'Blend fossils, flora, and found objects to unlock gadgets that change how you explore and express yourself.'
    },
    {
        title: 'Shareable keepsakes',
        description: 'Capture moments with photo modes, story journals, and tradeable souvenirs to celebrate your favorite expeditions.'
    }
];
export const FeaturesPage = () => {
    return (_jsxs("section", { className: "page", "aria-labelledby": "features-heading", children: [_jsx("h2", { id: "features-heading", children: "What makes PaleoCraft a delight" }), _jsx("p", { className: "intro", children: "Dawn-ready lighting, chunky pixel dinos, and a soundtrack that bops between adventure and chill-time make every expedition feel like a weekend getaway." }), _jsx("ul", { className: "feature-grid", children: features.map((feature) => (_jsxs("li", { className: "feature-card", children: [_jsx("h3", { children: feature.title }), _jsx("p", { children: feature.description })] }, feature.title))) })] }));
};
//# sourceMappingURL=FeaturesPage.js.map