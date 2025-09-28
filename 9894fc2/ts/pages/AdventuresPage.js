import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const adventures = [
    {
        name: 'Glowing Grove Expedition',
        vibe: 'Cozy co-op gathering',
        description: 'Follow a trail of bioluminescent spores to coax a curious Parasaurolophus back to camp before dawn.',
        keepsakes: ['Harvest rare glowshrooms', 'Unlock the Luminous Lantern kit', 'Score a campfire jam track']
    },
    {
        name: 'Storm-Chase Safari',
        vibe: 'Chaotic weather wrangling',
        description: 'Ride the updrafts of a meteor shower, glide between rocky spires, and craft lightning rods to calm a thundering herd.',
        keepsakes: ['Snag storm crystal fossils', 'Master wind-sculpted gliders', 'Capture time-lapse sky art']
    },
    {
        name: 'Amber Dunes Mystery',
        vibe: 'Puzzle-loving explorers',
        description: 'Decode rhythmic drum patterns with friends to open ancient vaults hidden beneath shifting sands.',
        keepsakes: ['Collect shimmering relic shards', 'Adopt a Sandrunner hatchling', 'Chronicle the vault story in your journal']
    }
];
export const AdventuresPage = () => {
    return (_jsxs("section", { className: "page", "aria-labelledby": "adventures-heading", children: [_jsx("h2", { id: "adventures-heading", children: "Adventure loops that spark grins" }), _jsx("p", { className: "intro", children: "Every session in PaleoCraft blends chill crafting with surprising prehistoric moments. Pick a vibe, rally your crew, and discover keepsakes that linger long after the expedition wraps." }), _jsx("div", { className: "adventure-grid", children: adventures.map((adventure) => (_jsxs("article", { className: "adventure-card", children: [_jsxs("header", { children: [_jsx("h3", { children: adventure.name }), _jsx("p", { className: "adventure-vibe", children: adventure.vibe })] }), _jsx("p", { children: adventure.description }), _jsx("ul", { children: adventure.keepsakes.map((keepsake) => (_jsx("li", { children: keepsake }, keepsake))) })] }, adventure.name))) })] }));
};
//# sourceMappingURL=AdventuresPage.js.map