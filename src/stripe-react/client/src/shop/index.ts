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
    price: 1,
    quantity: 0,
  },
  {
    id: 2,
    title: 'Loving Coffee',
    description: 'Such Lovely Coffee',
    imageUrl: lovingCoffee,
    price: 2,
    quantity: 0,
  },
  {
    id: 3,
    title: 'Coffee with Croissant',
    description: 'For days when I just need to grab and go.',
    imageUrl: coffeeCroissant,
    price: 3,
    quantity: 0,
  },
  {
    id: 4,
    title: 'Shot of Coffee',
    description: 'SHOTS SHOTS SHOTS SHOTS',
    imageUrl: coffeeShot,
    price: 4,
    quantity: 0,
  },
  {
    id: 5,
    title: 'Fresh Coffee Beans',
    description: 'Nothing better than fresh coffee beans, I will sometimes eat them raw.',
    imageUrl: freshBeans,
    price: 5,
    quantity: 0,
  },
  {
    id: 6,
    title: 'Happy Coffee',
    description: 'Coffee is happiness, happiness is coffee',
    imageUrl: happyCoffee,
    price: 6,
    quantity: 0,
  },
  {
    id: 7,
    title: 'Loving Coffee Beans',
    description: 'Coffee beans with a side of love',
    imageUrl: lovingBeans,
    price: 7,
    quantity: 0,
  },
  {
    id: 8,
    title: 'Coffee Breakfast',
    description: 'A whole delicious, scrumptious, coffee breakfast',
    imageUrl: coffeeBreakfast,
    price: 8,
    quantity: 0,
  },
];

export default SHOP_DATA;
