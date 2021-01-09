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
  }
];
