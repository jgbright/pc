import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const adventureBeats = [
    {
        title: 'Sunrise scouting',
        description: 'Follow dew-covered footprints through fern forests as the world wakes up and gentle dinos stretch their wings.'
    },
    {
        title: 'Midday tinkering',
        description: 'Return to camp to mix fossils, flowers, and river clay into gadgets that make the next expedition even more playful.'
    },
    {
        title: 'Twilight campfire',
        description: "Share discoveries with friends, roast tri-berry skewers, and plan tomorrow's trek while the constellations glow."
    }
];
const keepsakes = [
    {
        title: 'Fossil fragments',
        description: 'Piece together the stories of ancient creatures and display them proudly in your camp museum.'
    },
    {
        title: 'Dino friendships',
        description: 'Earn the trust of curious companions who remember your treats, your songs, and your favorite exploration routes.'
    },
    {
        title: 'Camp comforts',
        description: 'Decorate treehouse nooks with glowing lanterns, crafted instruments, and the keepsakes you discover along the way.'
    }
];
export const AdventuresPage = () => {
    return (_jsxs("section", { className: "page", "aria-labelledby": "adventures-heading", children: [_jsx("h2", { id: "adventures-heading", children: "A day in the PaleoCraft wilds" }), _jsx("p", { className: "intro", children: "From your first sunrise trek to the starlit campfire, PaleoCraft is filled with cheerful rituals that keep players smiling." }), _jsx("div", { className: "adventure-grid", children: adventureBeats.map((beat) => (_jsxs("article", { className: "adventure-card", children: [_jsx("h3", { children: beat.title }), _jsx("p", { children: beat.description })] }, beat.title))) }), _jsxs("div", { className: "adventure-highlight", children: [_jsx("h3", { children: "Moments you'll want to screenshot" }), _jsx("ul", { children: keepsakes.map((keep) => (_jsxs("li", { children: [_jsx("h4", { children: keep.title }), _jsx("p", { children: keep.description })] }, keep.title))) })] }), _jsx("p", { className: "adventure-footer", children: "Bring your curiosity and a couple of friends\u2014PaleoCraft rewards playfulness with new discoveries every session." })] }));
};
//# sourceMappingURL=AdventuresPage.js.map