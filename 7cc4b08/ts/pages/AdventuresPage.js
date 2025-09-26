import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const adventures = [
    {
        name: 'Glowcap Groove',
        session: 'Perfect for 20-minute catchups',
        description: 'Chase trails of bioluminescent spores to coax a shy Parasaurolophus into joining your campfire jam.',
        highlights: [
            'Craft glow-drums that pulse with the beat of your emotes',
            'Collect shimmer spores to dye your glider and outfits',
            'Record a looping camp soundtrack to share with friends'
        ]
    },
    {
        name: 'Storm-Chaser Sprint',
        session: 'Chaotic weather wrangling',
        description: 'Leap between basalt arches as a meteor shower charges the air. Calm the thunder lizards before the sky lights up.',
        highlights: [
            'Forge lightning rods that reshape the storm in real time',
            'Surf gusts with wind-sculpted gliders',
            'Snap time-lapse photos of the electric skyline'
        ]
    },
    {
        name: 'Amber Dunes Mystery',
        session: 'Co-op puzzle adventure',
        description: 'Decode rhythmic drum patterns, discover fossil murals, and protect a Sandrunner hatchery from mischievous raptors.',
        highlights: [
            'Collaborative rhythm puzzles that open hidden vaults',
            'Adopt a Sandrunner hatchling with a randomized personality',
            'Unlock story postcards that recap the expedition'
        ]
    }
];
export const AdventuresPage = () => {
    return (_jsxs("section", { className: "page adventures", "aria-labelledby": "adventures-heading", children: [_jsx("h2", { id: "adventures-heading", children: "Adventure loops built for belly laughs" }), _jsx("p", { className: "intro", children: "PaleoCraft's expeditions play out like improv sessions. Pick a biome, follow dynamic prompts, and leave with keepsakes you can show off the next time you log in." }), _jsx("div", { className: "adventure-grid", children: adventures.map((adventure) => (_jsxs("article", { className: "adventure-card", children: [_jsxs("header", { children: [_jsx("h3", { children: adventure.name }), _jsx("p", { className: "adventure-session", children: adventure.session })] }), _jsx("p", { children: adventure.description }), _jsx("ul", { children: adventure.highlights.map((highlight) => (_jsx("li", { children: highlight }, highlight))) })] }, adventure.name))) })] }));
};
//# sourceMappingURL=AdventuresPage.js.map