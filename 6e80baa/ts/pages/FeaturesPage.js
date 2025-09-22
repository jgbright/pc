import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const features = [
    {
        title: 'Living ecosystems',
        description: 'Watch herds migrate, weather patterns shift, and the landscape respond to your curiosity in real time.'
    },
    {
        title: 'Creative tinkering',
        description: 'Combine fossils, flora, and camp gadgets to invent playful tools that surprise even veteran explorers.'
    },
    {
        title: 'Drop-in co-op fun',
        description: 'Invite friends at any moment to ride dinos, swap discoveries, and photograph your favorite memories together.'
    }
];
export const FeaturesPage = () => {
    return (_jsxs("section", { className: "page", "aria-labelledby": "features-heading", children: [_jsx("h2", { id: "features-heading", children: "Why PaleoCraft is a blast to play" }), _jsx("ul", { className: "feature-grid", children: features.map((feature) => (_jsxs("li", { className: "feature-card", children: [_jsx("h3", { children: feature.title }), _jsx("p", { children: feature.description })] }, feature.title))) })] }));
};
//# sourceMappingURL=FeaturesPage.js.map