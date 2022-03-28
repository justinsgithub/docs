import { ProductType } from "../types/product-type";
const fancyCoffee = 'https://i.ibb.co/qksVRML/fancy-coffee.jpg'
const coffeeBreakfast = 'https://i.ibb.co/kyd4vwz/coffee-breakfast.jpg'
const coffeeCroissant = 'https://i.ibb.co/N9jpD9b/coffee-croissant.jpg'
const coffeeShot = 'https://i.ibb.co/V3XM7Kh/coffee-shot.jpg'
const freshBeans = 'https://i.ibb.co/261kgT1/fresh-beans.jpg'
const happyCoffee = 'https://i.ibb.co/yXBwV5M/happy-coffee.jpg'
const lovingBeans = 'https://i.ibb.co/4T1Lkjz/loving-beans.jpg'
const lovingCoffee = 'https://i.ibb.co/0nGVk9w/loving-coffee.jpg'

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
