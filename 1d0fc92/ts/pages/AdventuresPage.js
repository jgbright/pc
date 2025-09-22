import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const adventures = [
    {
        name: "Sunrise Shores",
        vibe: "Laid-back discovery",
        description: "Skim tidepools for ammonite shells, race friends on reed rafts, and wake the sleepy triceratops herds with a gentle tune.",
        moments: [
            "Glide across warm currents with your hand-made sailwing",
            "Share fresh-squeezed kelp juice buffs around the campfire",
            "Unlock stargazing constellations that react to your emotes"
        ]
    },
    {
        name: "Mosslight Hollow",
        vibe: "Cozy teamwork",
        description: "Mushroom canopies and glowing ferns hide ancient gadgets that only open when players sync up their rhythms.",
        moments: [
            "Form a percussion circle to coax fossils from singing stones",
            "Craft sprout lanterns that guide shy compsognathus companions",
            "Bounce across giant caps to reach secret pollen caches"
        ]
    },
    {
        name: "Crystal Spine Ridge",
        vibe: "Playful challenge",
        description: "Ice caves shimmer with puzzles, friendly stegosaur sentries, and surprising sled routes that loop back to base camp.",
        moments: [
            "Link crystal radios to remix the region's soundtrack",
            "Slide down frozen rivers on upgraded boneboards",
            "Trade shiny finds with traveling archaeologists"
        ]
    }
];
const snapshots = [
    {
        title: "Campfire mini-games",
        detail: "Quick five-minute loops—like ember juggling or dodo hide-and-seek—keep every hangout light-hearted between longer quests."
    },
    {
        title: "Creatures with personality",
        detail: "Each companion learns little tricks from how you treat them, so the ankylosaurus that loves lullabies might leave you stardust gifts."
    },
    {
        title: "Shared progress",
        detail: "Everything you discover adds to a communal field journal, so your friends see new recipes, badges, and doodles as soon as you find them."
    }
];
export const AdventuresPage = () => {
    return (_jsxs("section", { className: "page", "aria-labelledby": "adventures-heading", children: [_jsx("h2", { id: "adventures-heading", children: "A world built for wonder" }), _jsx("p", { className: "intro", children: "These featured adventures show how PaleoCraft sparks curiosity without pressure. Pick a biome that matches your mood, grab a couple of friends (or just your favorite dinosaur pal), and follow the surprising threads waiting in every corner of the map." }), _jsx("div", { className: "adventure-grid", children: adventures.map((adventure) => (_jsxs("article", { className: "adventure-card", "aria-label": adventure.name, children: [_jsxs("header", { children: [_jsx("span", { className: "adventure-tag", children: adventure.vibe }), _jsx("h3", { children: adventure.name }), _jsx("p", { children: adventure.description })] }), _jsx("ul", { children: adventure.moments.map((moment) => (_jsx("li", { children: moment }, moment))) })] }, adventure.name))) }), _jsx("div", { className: "snapshot-grid", "aria-label": "More playful details", children: snapshots.map((snapshot) => (_jsxs("article", { className: "snapshot-card", children: [_jsx("h3", { children: snapshot.title }), _jsx("p", { children: snapshot.detail })] }, snapshot.title))) })] }));
};
//# sourceMappingURL=AdventuresPage.js.map