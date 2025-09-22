import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const features = [
    {
        title: 'Guided exploration',
        description: 'Story-driven quests introduce key paleontology concepts while keeping the adventure lighthearted and accessible.'
    },
    {
        title: 'Collaborative crafting',
        description: 'Drop-in multiplayer encourages families and classrooms to craft tools together and document their discoveries.'
    },
    {
        title: 'Curriculum-ready content',
        description: 'Modular lesson plans, printable worksheets, and educator dashboards keep learning goals front and center.'
    }
];
export const FeaturesPage = () => {
    return (_jsxs("section", { className: "page", "aria-labelledby": "features-heading", children: [_jsx("h2", { id: "features-heading", children: "Why partners choose PaleoCraft" }), _jsx("ul", { className: "feature-grid", children: features.map((feature) => (_jsxs("li", { className: "feature-card", children: [_jsx("h3", { children: feature.title }), _jsx("p", { children: feature.description })] }, feature.title))) })] }));
};
//# sourceMappingURL=FeaturesPage.js.map