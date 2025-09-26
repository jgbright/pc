import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const highlightCards = [
    {
        title: 'Play with pals, not pressure',
        description: 'Drop in for a 20-minute loop or linger for hours. PaleoCraft ditches chores for mini-missions that welcome curious friends and family.'
    },
    {
        title: 'Tinker your own toys',
        description: 'Blend fossils, flora, and goofy gadgets to remix your camp. Everything you craft changes how you glide, gather, or jam with dinos.'
    },
    {
        title: 'Capture keepsake moments',
        description: 'Photo modes, story postcards, and a shared journal let you bookmark every silly dance-off or thunderstorm discovery.'
    }
];
const expeditionBeats = [
    {
        label: 'Scout the horizon',
        detail: 'Ride dawn thermals on your glider, spot migrating herds, and chart where hidden relics might surface next.'
    },
    {
        label: 'Team up with dinos',
        detail: 'Bake treats, learn goofy emotes, and befriend prehistoric pals who lend unique abilities to your crew.'
    },
    {
        label: 'Celebrate the campfire',
        detail: 'Spin your best tall tales, record a jam-session loop, and craft keepsakes that glow with the night sky.'
    }
];
const heroMoments = [
    {
        title: "Tonight's forecast",
        description: 'Meteor lanterns flicker across Amberlight Ridge while parasaur flutes echo through the canyon.'
    },
    {
        title: 'Pocket goals',
        description: 'Unlock the Emberglow Glider, adopt a Sandrunner hatchling, and fill the camp journal with doodles.'
    }
];
export const OverviewPage = () => {
    return (_jsxs("div", { className: "overview", "aria-labelledby": "overview-heading", children: [_jsxs("section", { className: "page hero", role: "region", children: [_jsxs("div", { className: "hero-content", children: [_jsx("span", { className: "hero-badge", children: "Cozy survival \u2022 Starry skies \u2022 Silly dinos" }), _jsx("h1", { id: "overview-heading", children: "PaleoCraft is your pocket prehistoric playground" }), _jsx("p", { children: "Glide through neon twilights, improvise gadgets from fossils, and fill your camp with laughter. PaleoCraft keeps the survival vibes light-hearted so you can focus on surprising discoveries, not grinding meters." }), _jsx("ul", { className: "hero-highlights", children: heroMoments.map((moment) => (_jsxs("li", { children: [_jsx("h3", { children: moment.title }), _jsx("p", { children: moment.description })] }, moment.title))) }), _jsxs("div", { className: "hero-actions", children: [_jsx(Link, { className: "cta", to: "/adventures", children: "Peek at adventures" }), _jsx(Link, { className: "cta ghost", to: "/features", children: "See why players grin" })] })] }), _jsxs("div", { className: "hero-side hero-collage", "aria-hidden": "true", children: [_jsxs("div", { className: "collage-card", children: [_jsx("p", { className: "collage-label", children: "Camp snapshot" }), _jsx("h2", { children: "Amberlight Ridge" }), _jsx("p", { className: "collage-detail", children: "Skim over crystal dunes, chase comet fireflies, and sync your drums to awaken a sleepy stegosaur." }), _jsx("p", { className: "collage-reward", children: "Keepsake unlocked: Meteoric Maracas" })] }), _jsx("p", { className: "collage-caption", children: "Every expedition remix adds fresh weather, wildlife, and secrets." })] })] }), _jsxs("section", { className: "page highlights", "aria-labelledby": "overview-highlights", children: [_jsx("h2", { id: "overview-highlights", children: "Why PaleoCraft feels like a joyful time capsule" }), _jsx("p", { className: "intro", children: "We pulled inspiration from lazy Saturday cartoons and campfire stories. Each play session is a cozy loop built for sharing, storytelling, and trying something a little weird." }), _jsx("div", { className: "highlight-grid", children: highlightCards.map((card) => (_jsxs("article", { className: "highlight-card", children: [_jsx("h3", { children: card.title }), _jsx("p", { children: card.description })] }, card.title))) })] }), _jsxs("section", { className: "page expedition", "aria-labelledby": "expedition-beats", children: [_jsx("h2", { id: "expedition-beats", children: "A night in PaleoCraft" }), _jsx("p", { className: "intro", children: "Bring a friend or three, pick a biome, and follow these beats. No subscriptions, no store\u2014just a sandbox brimming with personality." }), _jsx("ol", { className: "expedition-grid", children: expeditionBeats.map((beat) => (_jsxs("li", { children: [_jsx("h3", { children: beat.label }), _jsx("p", { children: beat.detail })] }, beat.label))) })] })] }));
};
//# sourceMappingURL=OverviewPage.js.map