export interface Craft {
  id: number;
  name: string;
  image: string;
  description: string;
  ingredients: string;
}

export const crafts: Craft[] = [
  {
    id: 1,
    name: 'Chest',
    image: '/assets/images/Chest.png',
    description: 'Used to store blocks and items',
    ingredients: 'Wooden planks'
  },
  {
    id: 2,
    name: 'Ladder',
    image: '/assets/images/Ladders.png',
    description: 'Allows the player to climb vertically',
    ingredients: 'Sticks'
  },
  {
    id: 3,
    name: 'Crafting Table',
    image: '/assets/images/Crafting_Table.png',
    description: 'Opens a 3x3 crafting grid when right clicked',
    ingredients: 'Wooden planks'
  }
];
