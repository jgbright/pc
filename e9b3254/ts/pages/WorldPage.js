import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const biomes = [
    {
        name: "Fernwild Basin",
        description: "Sun-dappled wetlands where gentle stegos browse towering ferns and fossil beds glow beneath the waterline."
    },
    {
        name: "Ashen Ridges",
        description: "Volcanic cliffs rich with rare minerals, gusty updrafts, and brave pterosaurs willing to share their ledges."
    },
    {
        name: "Crystal Dunes",
        description: "Nocturnal deserts blanketed in bioluminescent spores that sparkle while pack hunters weave between the dunes."
    }
];
const moments = [
    {
        title: "Twilight glider runs",
        description: "Ride thermal currents as migrating herds thunder below and the sky blooms with meteor showers."
    },
    {
        title: "Fossil rush events",
        description: "Work together to uncover time-limited dig sites, then display your finds in camp for everyone to admire."
    },
    {
        title: "Campfire jam sessions",
        description: "Brew spiced teas, swap tall tales, and unlock new songs as your crew keeps the firelight dancing."
    }
];
export const WorldPage = () => {
    return (_jsxs("section", { className: "page", "aria-labelledby": "world-heading", children: [_jsx("h2", { id: "world-heading", children: "A living world to get lost in" }), _jsx("p", { className: "intro", children: "PaleoCraft\u2019s map is a mosaic of playful biomes, migrating herds, and secrets that only appear when you slow down and listen. The deeper you explore, the more the world responds to the way you play." }), _jsxs("div", { className: "world-section", children: [_jsx("h3", { children: "Biomes to call home" }), _jsx("ul", { className: "moment-grid", children: biomes.map((biome) => (_jsxs("li", { className: "moment-card", children: [_jsx("h4", { children: biome.name }), _jsx("p", { children: biome.description })] }, biome.name))) })] }), _jsxs("div", { className: "world-section", children: [_jsx("h3", { children: "Moments we keep replaying" }), _jsx("ul", { className: "moment-grid", children: moments.map((moment) => (_jsxs("li", { className: "moment-card", children: [_jsx("h4", { children: moment.title }), _jsx("p", { children: moment.description })] }, moment.title))) })] })] }));
};
//# sourceMappingURL=WorldPage.js.map