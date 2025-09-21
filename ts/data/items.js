export const items = [
    {
        id: 'flint',
        name: 'Flint',
        description: 'Sharp stone used for crafting primitive tools.',
        rarity: 'common'
    },
    {
        id: 'fiber',
        name: 'Plant Fiber',
        description: 'Strong fiber harvested from ferns and reeds.',
        rarity: 'common'
    },
    {
        id: 'resin',
        name: 'Tree Resin',
        description: 'Sticky sap perfect for binding and sealing.',
        rarity: 'uncommon'
    },
    {
        id: 'bone',
        name: 'Ancient Bone',
        description: 'Remnants of colossal creatures, sturdy and resilient.',
        rarity: 'rare'
    },
    {
        id: 'amber-relic',
        name: 'Amber Relic',
        description: 'A legendary artifact humming with primordial energy.',
        rarity: 'legendary'
    }
];
export const findItem = (id) => items.find((item) => item.id === id);
//# sourceMappingURL=items.js.map