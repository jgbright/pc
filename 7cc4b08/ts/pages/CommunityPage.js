import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const communitySpotlights = [
    {
        title: 'Glider photo prompts',
        description: 'Share your best leaps over volcanic vents or mushroom forests. We collect favorite shots for a monthly postcard zine.'
    },
    {
        title: 'Campfire jam sessions',
        description: 'Players layer percussion, flute, and fossil chimes into collaborative tracks straight from their expeditions.'
    },
    {
        title: 'Dino kindness stories',
        description: 'From befriending runaway hatchlings to calming storm-stressed brontosaurs, the crew loves retelling wholesome moments.'
    }
];
const hangouts = [
    {
        label: 'Discord campfire',
        detail: 'Plan weekend expeditions, trade crafting blueprints, and stream cozy build-alongs.'
    },
    {
        label: 'Screenshot Saturdays',
        detail: 'Post your favorite snapshots on social with #PaleoCraftPlay. We highlight inventive builds every week.'
    },
    {
        label: 'Patch preview nights',
        detail: 'Hop into private servers to stress-test silly mechanics before they go public.'
    }
];
export const CommunityPage = () => {
    return (_jsxs("section", { className: "page community", "aria-labelledby": "community-heading", id: "community", children: [_jsx("h2", { id: "community-heading", children: "Campfire stories from the PaleoCraft crew" }), _jsx("p", { className: "intro", children: "No newsletter, no sales pitch\u2014just a bunch of players swapping discoveries and cheering on new builds. Drop by when you have a story to share or need fresh inspiration." }), _jsx("div", { className: "community-grid", children: communitySpotlights.map((spotlight) => (_jsxs("article", { className: "community-card", children: [_jsx("h3", { children: spotlight.title }), _jsx("p", { children: spotlight.description })] }, spotlight.title))) }), _jsxs("div", { className: "community-hangouts", "aria-label": "Ways to hang out", children: [_jsx("h3", { children: "Where to hang out" }), _jsx("ul", { children: hangouts.map((hangout) => (_jsxs("li", { children: [_jsx("strong", { children: hangout.label }), _jsx("p", { children: hangout.detail })] }, hangout.label))) })] })] }));
};
//# sourceMappingURL=CommunityPage.js.map