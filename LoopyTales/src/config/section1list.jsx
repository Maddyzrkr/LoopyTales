import Cap from '../assets/Cap.jpg';
import scarf from '../assets/scarf.jpg';
import babyshoes from '../assets/babyshoes.jpg';
import RedTop from '../assets/RedTop.jpg';

const promoBoxes = [
  {
    id: 1,
    type: "image",// is this type used as classname in css? cuz ye dek 
    image: Cap,
    label: "Buy Now",
    alt: "Winter Caps",
  },
  {
    id: 2,
    type: "image",
    image: scarf,
    // title: "Get 70%",
    // description: "Scarf Collection",
    label: "EXPLORE NOW",
  },
  {
    id: 3,
    type: "image",
    image: RedTop,
    label: "Buy Now",
    alt: "Baby Shoes",
  },
];

export default promoBoxes;
