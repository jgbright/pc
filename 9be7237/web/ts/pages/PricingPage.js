import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const plans = [
    {
        name: 'Community',
        price: 'Free',
        perks: ['Seasonal live events', 'Recipe-of-the-month newsletter', 'Access to community Discord']
    },
    {
        name: 'Educator',
        price: '$29 / month',
        perks: ['Classroom management tools', 'Printable lesson blueprints', 'Unlimited student save slots']
    },
    {
        name: 'Studios',
        price: 'Custom',
        perks: ['Dedicated producer support', 'Co-branded content drops', 'Hands-on launch planning']
    }
];
export const PricingPage = () => {
    return (_jsxs("section", { className: "page", "aria-labelledby": "pricing-heading", children: [_jsx("h2", { id: "pricing-heading", children: "Flexible pricing for every partner" }), _jsx("div", { className: "pricing-grid", children: plans.map((plan) => (_jsxs("article", { className: "pricing-card", "aria-label": `${plan.name} plan`, children: [_jsx("h3", { children: plan.name }), _jsx("p", { className: "pricing-price", children: plan.price }), _jsx("ul", { children: plan.perks.map((perk) => (_jsx("li", { children: perk }, perk))) }), _jsx("button", { type: "button", className: "cta secondary", children: plan.price === 'Custom' ? 'Book a discovery call' : 'Start today' })] }, plan.name))) })] }));
};
//# sourceMappingURL=PricingPage.js.map