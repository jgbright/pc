import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const communitySpaces = [
    {
        name: "Discord campfire",
        description: "Swap survival stories, find expedition buddies, and share screenshots of your favorite builds.",
        href: "https://discord.gg/paleocraft",
        cta: "Join the chat"
    },
    {
        name: "Field guide updates",
        description: "Peek at concept art, patch notes, and the design sketches that inspire new expeditions.",
        href: "https://paleocraft.com/field-guide",
        cta: "Read the guide"
    },
    {
        name: "Photo mode gallery",
        description: "Tag #PaleoCraft to see community shots featured on our rotating in-game museum walls.",
        href: "https://instagram.com/explore/tags/paleocraft",
        cta: "Share a capture"
    }
];
export const CommunityPage = () => {
    return (_jsxs("section", { className: "page", "aria-labelledby": "community-heading", id: "community", children: [_jsx("h2", { id: "community-heading", children: "Share your PaleoCraft story" }), _jsx("p", { className: "intro", children: "PaleoCraft was built for cozy explorers who love comparing discoveries. Join the campfire, keep up with new builds, and tell us about the creatures that won you over." }), _jsx("ul", { className: "community-links", children: communitySpaces.map((space) => (_jsxs("li", { className: "community-card", children: [_jsx("h3", { children: space.name }), _jsx("p", { children: space.description }), _jsx("a", { className: "community-link", href: space.href, target: "_blank", rel: "noreferrer", children: space.cta })] }, space.name))) }), _jsxs("form", { className: "contact-form", "aria-label": "Send a message to the PaleoCraft crew", children: [_jsx("label", { htmlFor: "community-name", children: "Name or nickname" }), _jsx("input", { id: "community-name", name: "name", type: "text", placeholder: "What should we call you?" }), _jsx("label", { htmlFor: "community-email", children: "Email (optional)" }), _jsx("input", { id: "community-email", name: "email", type: "email", placeholder: "you@example.com" }), _jsx("label", { htmlFor: "community-creature", children: "Favorite creature" }), _jsx("input", { id: "community-creature", name: "creature", type: "text", placeholder: "Ankylosaur? Microraptor? Surprise us." }), _jsx("label", { htmlFor: "community-story", children: "Share your latest adventure" }), _jsx("textarea", { id: "community-story", name: "story", placeholder: "Tell us what made your last session unforgettable.", rows: 4, required: true }), _jsx("button", { type: "submit", className: "cta", children: "Send your story" })] })] }));
};
//# sourceMappingURL=CommunityPage.js.map