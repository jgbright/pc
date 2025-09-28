export const recipes = [
    {
        id: 'peel-orange',
        name: 'Peel Orange',
        ingredients: [{ itemId: 'orange', quantity: 1 }],
        outputs: [{ itemId: 'peeled-orange', quantity: 1 }]
    },
    {
        id: 'peel-banana',
        name: 'Peel Banana',
        ingredients: [{ itemId: 'banana', quantity: 1 }],
        outputs: [{ itemId: 'peeled-banana', quantity: 1 }]
    },
    {
        id: 'slice-banana',
        name: 'Slice Banana',
        ingredients: [{ itemId: 'peeled-banana', quantity: 1 }],
        toolId: 'knife',
        outputs: [{ itemId: 'sliced-banana', quantity: 1 }]
    },
    {
        id: 'twist-vine-cord',
        name: 'Twist Vine Cord',
        ingredients: [{ itemId: 'vine', quantity: 2 }],
        outputs: [{ itemId: 'vine-cord', quantity: 1 }]
    },
    {
        id: 'lash-hammer',
        name: 'Lash Hammer',
        ingredients: [
            { itemId: 'rock', quantity: 1 },
            { itemId: 'stick', quantity: 1 },
            { itemId: 'vine-cord', quantity: 1 }
        ],
        outputs: [{ itemId: 'hammer', quantity: 1 }]
    },
    {
        id: 'shape-stone-blank',
        name: 'Shape Stone Blank',
        ingredients: [{ itemId: 'rock', quantity: 1 }],
        toolId: 'hammer',
        alternateToolIds: ['rock'],
        outputs: [{ itemId: 'stone', quantity: 1 }]
    },
    {
        id: 'knap-sharp-stone',
        name: 'Knap Sharp Stone',
        ingredients: [{ itemId: 'stone', quantity: 1 }],
        toolId: 'hammer',
        alternateToolIds: ['rock'],
        outputs: [{ itemId: 'sharp-stone', quantity: 1 }]
    },
    {
        id: 'lash-knife',
        name: 'Lash Stone Knife',
        ingredients: [
            { itemId: 'sharp-stone', quantity: 1 },
            { itemId: 'stick', quantity: 1 },
            { itemId: 'vine-cord', quantity: 1 }
        ],
        toolId: 'hammer',
        alternateToolIds: ['sharp-stone'],
        outputs: [{ itemId: 'knife', quantity: 1 }]
    },
    {
        id: 'open-coconut',
        name: 'Open Coconut',
        ingredients: [{ itemId: 'coconut', quantity: 1 }],
        toolId: 'hammer',
        alternateToolIds: ['rock'],
        outputs: [{ itemId: 'opened-coconut', quantity: 1 }]
    },
    {
        id: 'scoop-coconut-meat',
        name: 'Scoop Coconut Meat',
        ingredients: [{ itemId: 'opened-coconut', quantity: 1 }],
        toolId: 'knife',
        alternateToolIds: ['hands'],
        outputs: [{ itemId: 'raw-coconut', quantity: 1 }]
    },
    {
        id: 'red-berry-mash',
        name: 'Mash Red Berries',
        ingredients: [
            { itemId: 'opened-coconut', quantity: 1 },
            { itemId: 'red-berries', quantity: 2 }
        ],
        toolId: 'hammer',
        alternateToolIds: ['rock'],
        outputs: [{ itemId: 'red-berry-mash', quantity: 1 }]
    },
    {
        id: 'blue-berry-mash',
        name: 'Mash Blue Berries',
        ingredients: [
            { itemId: 'opened-coconut', quantity: 1 },
            { itemId: 'blue-berries', quantity: 2 }
        ],
        toolId: 'hammer',
        alternateToolIds: ['rock'],
        outputs: [{ itemId: 'blue-berry-mash', quantity: 1 }]
    },
    {
        id: 'mix-trail-mix',
        name: 'Mix Trail Mix',
        ingredients: [
            { itemId: 'peanuts', quantity: 2 },
            { itemId: 'red-berries', quantity: 1 },
            { itemId: 'blue-berries', quantity: 1 }
        ],
        outputs: [{ itemId: 'trail-mix', quantity: 1 }]
    },
    {
        id: 'assemble-fruit-skewer',
        name: 'Assemble Fruit Skewer',
        ingredients: [
            { itemId: 'stick', quantity: 1 },
            { itemId: 'sliced-banana', quantity: 1 },
            { itemId: 'red-berries', quantity: 1 }
        ],
        outputs: [{ itemId: 'fruit-skewer', quantity: 1 }]
    }
];
export const recipeTemplate = {
    id: 'new-recipe-id',
    name: 'Readable Recipe Name',
    ingredients: [{ itemId: 'example-input', quantity: 1 }],
    outputs: [{ itemId: 'example-output', quantity: 1 }]
};
//# sourceMappingURL=recipes.js.map