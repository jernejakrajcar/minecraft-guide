export interface Craft {
  id: number;
  name: string;
  image: string;
  description: text;
  ingredients: text;
}

export const crafts: Craft[] = [
  {
    id: 1,
    name: 'Chest',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fminecraft.fandom.com%2Fwiki%2FChest&psig=AOvVaw3iCLzv9zk7r0wJIzZYu1wz&ust=1607428420757000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjy29Tnu-0CFQAAAAAdAAAAABAD',
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
