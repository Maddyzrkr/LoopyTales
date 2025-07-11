import Cap from '../assets/Cap.jpg';
import scarf from '../assets/scarf.jpg';
import babyshoes from '../assets/babyshoes.jpg';
import m1 from '../assets/m1.jpg';
import HeadBand from '../assets/HeadBand.jpg';
import Tote1 from '../assets/Tote1.jpg';
import BabyDoll1 from '../assets/BabyDoll1.jpg';

const promoGrid = [
  {
    id: 1,
    type: "main",
    image: Cap,
    number: "18",
    label: "New Arrivals",
  },
  {
    id: 2,
    type: "category",
    image: scarf,
    title: "COLLECTION",
    subtitle: "SCARF",
    button: "SHOP NOW",
  },
  {
    id: 3,
    type: "category",
    image: Tote1,
    title: "COLLECTION",
    subtitle: "BAG",
    button: "SHOP NOW",
  },
  {
    id: 4,
    type: "sale",
    image: BabyDoll1,
    title: "SALE",
    subtitle: "Up to 40% off",
  },
];

export default promoGrid;
