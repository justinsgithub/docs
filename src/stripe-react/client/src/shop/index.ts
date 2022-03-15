import { ProductType } from "../types/product-type";
import fancyCoffee from '../assets/fancy-coffee.jpg'
import coffeeBreakfast from '../assets/coffee-breakfast.jpg'
import coffeeCroissant from '../assets/coffee-croissant.jpg'
import coffeeShot from '../assets/coffee-shot.jpg'
import freshBeans from '../assets/fresh-beans.jpg'
import happyCoffee from '../assets/happy-coffee.jpg'
import lovingBeans from '../assets/loving-beans.jpg'
import lovingCoffee from '../assets/loving-coffee.jpg'

const SHOP_DATA: Array<ProductType> = [ {
    id: 1,
    title: 'Fancy Coffee',
    description: 'Delicious tasting and looking, wonderful piece of art',
    imageUrl: fancyCoffee,
    price: 15,
    quantity: 0,
  },
  {
    id: 2,
    title: 'Loving Coffee',
    description: 'The Sling is encased in cloud-like waterproof nylon, features eight pockets, and can be worn as a waistbag or crossbody sling. Five colors, multiple carrying modes, all you. Vegan friendly + made for everyone.',
    imageUrl: lovingCoffee,
    price: 25,
    quantity: 0,
  },
  {
    id: 3,
    title: 'Coffee with Croissant',
    description: 'For days when you just need to grab and go. The Dance Bag is a compact, gumdrop-shaped backpack wrapped in water-repellent nylon. It’s the perfect carry-all for your life in motion.',
    imageUrl: coffeeCroissant,
    price: 35,
    quantity: 0,
  },
  {
    id: 4,
    title: 'Shot of Coffee',
    description: 'The Stratus is encased in cloud-like waterproof nylon and features exterior + interior pockets for your water bottle, umbrella, and laptop. Reach around to the side for on-the-go access to the main compartment. Collapse it for easy travel. Your backpack just got an upgrade.',
    imageUrl: coffeeShot,
    price: 30,
    quantity: 0,
  },
  {
    id: 5,
    title: 'Fresh Coffee Beans',
    description: 'The Cirrus rucksack is encased in cloud-like waterproof nylon and features ample interior and exterior pockets, including built-in phone + battery pockets to stay powered up on the go. Luggage slip and secure passport sleeve make it the perfect travel companion. Adventure away.',
    imageUrl: freshBeans,
    price: 65,
    quantity: 0,
  },
  {
    id: 6,
    title: 'Happy Coffee',
    description: 'The Mini Circle is the ultimate multipurpose grab and go style. Transfer it from crossbody to waistbelt to wristlet simply by changing straps. Internal built-in battery that can charge your USB device. Vegan friendly.',
    imageUrl: happyCoffee,
    price: 40,
    quantity: 0,
  },
  {
    id: 7,
    title: 'Loving Coffee Beans',
    description: 'You’re not any one thing, why should your bag be? The Studio Bag Vaqueta features everything you know and love about the Studio Bag wrapped up in colorful Italian nylon and exquisite vaqueta leather. ',
    imageUrl: lovingBeans,
    price: 75,
    quantity: 0,
  },
  {
    id: 8,
    title: 'Coffee Breakfast',
    description: 'A whole cofee breakfast',
    imageUrl: coffeeBreakfast,
    price: 28,
    quantity: 0,
  },
];

export default SHOP_DATA;
