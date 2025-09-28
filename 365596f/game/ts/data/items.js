export const itemTypes = [
    {
        id: 'orange',
        name: 'Orange',
        rarity: 'common',
        scavengedByMinion: true,
        craftable: false,
        energyRestored: 1
    },
    {
        id: 'carrot',
        name: 'Carrot',
        rarity: 'common',
        scavengedByMinion: true,
        craftable: false,
        energyRestored: 1
    },
    {
        id: 'red-berries',
        name: 'Red Berries',
        rarity: 'common',
        scavengedByMinion: true,
        craftable: false,
        energyRestored: 1
    },
    {
        id: 'blue-berries',
        name: 'Blue Berries',
        rarity: 'common',
        scavengedByMinion: true,
        craftable: false,
        energyRestored: 1
    },
    {
        id: 'peanuts',
        name: 'Peanuts',
        rarity: 'common',
        scavengedByMinion: true,
        craftable: false,
        energyRestored: 2
    },
    {
        id: 'banana',
        name: 'Banana',
        rarity: 'common',
        scavengedByMinion: true,
        craftable: false,
        energyRestored: 2
    },
    {
        id: 'coconut',
        name: 'Coconut',
        rarity: 'common',
        scavengedByMinion: true,
        craftable: false
    },
    {
        id: 'vine',
        name: 'Vine',
        rarity: 'common',
        scavengedByMinion: true,
        craftable: false
    },
    {
        id: 'stick',
        name: 'Stick',
        rarity: 'common',
        scavengedByMinion: true,
        craftable: false
    },
    {
        id: 'rock',
        name: 'Rock',
        rarity: 'common',
        scavengedByMinion: true,
        craftable: false
    },
    {
        id: 'peeled-orange',
        name: 'Peeled Orange',
        rarity: 'common',
        scavengedByMinion: false,
        craftable: true,
        energyRestored: 3
    },
    {
        id: 'peeled-banana',
        name: 'Peeled Banana',
        rarity: 'common',
        scavengedByMinion: false,
        craftable: true,
        energyRestored: 3
    },
    {
        id: 'sliced-banana',
        name: 'Sliced Banana',
        rarity: 'common',
        scavengedByMinion: false,
        craftable: true,
        energyRestored: 8
    },
    {
        id: 'opened-coconut',
        name: 'Opened Coconut',
        rarity: 'common',
        scavengedByMinion: false,
        craftable: true
    },
    {
        id: 'raw-coconut',
        name: 'Raw Coconut',
        rarity: 'uncommon',
        scavengedByMinion: false,
        craftable: true,
        energyRestored: 8,
        returnsItemId: 'opened-coconut'
    },
    {
        id: 'red-berry-mash',
        name: 'Red Berry Mash',
        rarity: 'uncommon',
        scavengedByMinion: false,
        craftable: true,
        energyRestored: 8,
        returnsItemId: 'opened-coconut'
    },
    {
        id: 'blue-berry-mash',
        name: 'Blue Berry Mash',
        rarity: 'uncommon',
        scavengedByMinion: false,
        craftable: true,
        energyRestored: 8,
        returnsItemId: 'opened-coconut'
    },
    {
        id: 'fruit-skewer',
        name: 'Fruit Skewer',
        rarity: 'uncommon',
        scavengedByMinion: false,
        craftable: true,
        energyRestored: 10
    },
    {
        id: 'vine-cord',
        name: 'Vine Cord',
        rarity: 'common',
        scavengedByMinion: false,
        craftable: true
    },
    {
        id: 'stone',
        name: 'Stone Blank',
        rarity: 'common',
        scavengedByMinion: false,
        craftable: true
    },
    {
        id: 'sharp-stone',
        name: 'Sharp Stone',
        rarity: 'common',
        scavengedByMinion: false,
        craftable: true
    },
    {
        id: 'hammer',
        name: 'Hammer',
        rarity: 'common',
        scavengedByMinion: false,
        craftable: true
    },
    {
        id: 'knife',
        name: 'Stone Knife',
        rarity: 'uncommon',
        scavengedByMinion: false,
        craftable: true
    },
    {
        id: 'trail-mix',
        name: 'Trail Mix',
        rarity: 'uncommon',
        scavengedByMinion: false,
        craftable: true,
        energyRestored: 6
    }
];
export const itemTypeTemplate = {
    id: 'new-item-id',
    name: 'Readable Name',
    rarity: 'common',
    scavengedByMinion: false,
    craftable: true
};
export const findItemType = (id) => itemTypes.find((item) => item.id === id);
//# sourceMappingURL=items.js.map