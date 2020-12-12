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
    image: '',
    description: 'Used to store blocks and items',
    ingredients: 'Wooden planks'
  },
  {
    id: 2,
    name: 'Ladder',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fminecraft.fandom.com%2Fwiki%2FLadder&psig=AOvVaw1-Oh-GnegQtG__IVWnIYRf&ust=1607428453083000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDGuOLnu-0CFQAAAAAdAAAAABAD',
    description: 'Allows the player to climb vertically',
    ingredients: 'Sticks'
  }
]
