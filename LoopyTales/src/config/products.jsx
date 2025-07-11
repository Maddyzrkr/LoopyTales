import Beanie from '../assets/Beanie.jpg';
import Beanie2 from '../assets/Beanie2.jpg';

import Sweater from '../assets/Sweater.jpg';
import Top from '../assets/BlackTop.jpg';
import Top2 from '../assets/BlackTop2.jpg';

import Scarf1 from '../assets/Scarf1.jpg';
import Scarf2 from '../assets/Scarf2.jpg';
import Scarf3 from '../assets/Scarf3.jpg';

import Bag from '../assets/Bag.jpg';
import Bag2 from '../assets/Bag2.jpg';
import Bag3 from '../assets/Bag3.jpg';

import PinkTop from '../assets/PinkTop.jpg';
import PinkTop2 from '../assets/PinkTop2.jpg';
import PinkTop3 from '../assets/PinkTop3.jpg';

import RedTop from '../assets/RedTop.jpg';
import RedTop1 from '../assets/RedTop1.jpg';

import Gajra from '../assets/Gajra.jpg';
import Gajra1 from '../assets/Gajra1.jpg';

import Tote from '../assets/Tote1.jpg';
import Tote1 from '../assets/Tote1.jpg';

import BabyDoll from '../assets/BabyDoll.jpg';
import BabyDoll1 from '../assets/BabyDoll1.jpg';

import HeadBand from '../assets/HeadBand.jpg';
import HeadBand1 from '../assets/HeadBand1.jpg';

const products = [
  {
    id: 1,
    name: 'Crochet Beanie',
    price: '₹499',
    image: Beanie,
    images: [Beanie, Beanie2],
    sizes: ['S', 'M', 'L'],
    description: 'Keep warm and stylish with our handcrafted beanie. Designed for comfort in every season.',
    material: 'Soft Acrylic Yarn',
    care: 'Hand wash with cold water only.'
  },
  {
    id: 2,
    name: 'Crochet Top',
    price: '₹1199',
    image: Top,
    images: [ Top, Top2],
    sizes: ['S', 'M', 'L'],
    description: 'A soft, snug-fit crochet sweater perfect for breezy evenings or cozy layering. Its rich black tone adds elegance while the handwoven texture brings warmth and comfort — a timeless staple for your wardrobe.',
    material: 'Cotton Blend',
    care: 'Gentle hand wash. Dry flat in shade.'
  },
  {
    id: 3,
    name: 'Cozy Scarf',
    price: '₹699',
    image: Scarf1,
    images: [Scarf1, Scarf2, Scarf3],
    sizes: ['S', 'M', 'L'],
    description: 'Wrap yourself in softness. This cozy scarf adds warmth and texture to any outfit.',
    material: 'Premium Wool Blend',
    care: 'Dry clean preferred or delicate hand wash.'
  },
  {
    id: 4,
    name: 'Crochet Bag',
    price: '₹899',
    image: Bag,
    images: [Bag, Bag2, Bag3],
    description: 'A charming sunflower-patterned crochet bag. Spacious enough for your daily essentials.',
    material: 'Cotton Yarn',
    care: 'Spot clean with damp cloth.'
  },
  {
    id: 5,
    name: 'Pink Crochet Top',
    price: '₹1099',
    image: PinkTop,
    images: [PinkTop, PinkTop2, PinkTop3],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Cute, airy and handcrafted with love — this pink top is ideal for brunches and beach days.',
    material: 'Cotton',
    care: 'Hand wash separately. Do not wring.'
  },
  {
    id: 6,
    name: 'Sleeveless Red Top',
    price: '₹999',
    image: RedTop,
    images: [RedTop, RedTop1],
    sizes: ['S', 'M', 'L'],
    description: 'Bold and breathable, this sleeveless red crochet top makes a standout statement.',
    material: 'Mercerized Cotton',
    care: 'Machine wash in mesh bag on gentle cycle.'
  },
  {
    id: 7,
    name: 'Floral Gajra',
    price: '₹199',
    image: Gajra,
    images: [Gajra, Gajra1],
    description: 'Traditional floral gajra reimagined with yarn. Adds a graceful charm to your hairstyle.',
    material: 'Cotton Yarn + Elastic',
    care: 'Store in dry place when not in use.'
  },
  {
    id: 8,
    name: 'Tote Bag',
    price: '₹799',
    image: Tote,
    images: [Tote, Tote1],
    description: 'Handmade crochet tote perfect for daily errands, books or a quick shopping trip.',
    material: 'Cotton + Nylon blend',
    care: 'Hand wash or spot clean.'
  },
  {
    id: 9,
    name: 'Baby Doll Top',
    price: '₹1199',
    image: BabyDoll,
    images: [BabyDoll, BabyDoll1],
    sizes: ['S', 'M', 'L'],
    description: 'A flowy baby doll style crochet top with a boho finish. Fits light and breezy.',
    material: '100% Cotton',
    care: 'Hand wash and dry flat.'
  },
  {
    id: 10,
    name: 'Hair Band',
    price: '₹149',
    image: HeadBand,
    images: [HeadBand, HeadBand1],
    description: 'Stylish and stretchable crochet hair band to elevate any look.',
    material: 'Elastic + Soft Yarn',
    care: 'Spot clean only.'
  }
];

export default products;
