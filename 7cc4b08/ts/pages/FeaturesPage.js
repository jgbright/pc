import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const features = [
    {
        title: 'Living biomes that remix nightly',
        detail: 'Weather systems riff like improv shows—volcanic gusts one moment, shimmering auroras the next. Fauna and resources react, nudging new play styles.'
    },
    {
        title: 'Friendship-first multiplayer',
        detail: 'Drop in without FOMO. Sessions scale to whoever shows up, and shared keepsakes mean everyone leaves with a story to tell.'
    },
    {
        title: 'Inventive crafting toys',
        detail: 'Blend fossils, flora, and found gadgets. Maybe you cook up a bone-xylophone, maybe it becomes a weather shield—either way it changes how you explore.'
    },
    {
        title: 'Memory-making tools',
        detail: 'Photo mode doodles, story postcards, and collaborative journals keep your greatest hits ready for the next campfire reunion.'
    }
];
const extras = [
    'No battle passes or microtransactions—progress comes from play.',
    'Built for controllers, touch, and mouse & keyboard from day one.',
    'Accessibility modes for color, input, and pacing right in the menu.'
];
export const FeaturesPage = () => {
    return (_jsxs("section", { className: "page features", "aria-labelledby": "features-heading", children: [_jsx("h2", { id: "features-heading", children: "Features tuned for delight" }), _jsx("p", { className: "intro", children: "PaleoCraft keeps its systems transparent and generous. If something sparks joy, we double down on it. If it feels like a grind, we toss it in the tar pit." }), _jsx("ul", { className: "feature-grid", children: features.map((feature) => (_jsxs("li", { className: "feature-card", children: [_jsx("h3", { children: feature.title }), _jsx("p", { children: feature.detail })] }, feature.title))) }), _jsxs("aside", { className: "feature-extras", "aria-label": "Extra notes", children: [_jsx("h3", { children: "Plus a few promises" }), _jsx("ul", { children: extras.map((extra) => (_jsx("li", { children: extra }, extra))) })] })] }));
};
//# sourceMappingURL=FeaturesPage.js.map