import React from 'react';
import PentShirtMen from '../../assets/Pent-shirtMen.webp';
import Watcheslist from '../../assets/Watcheslist.webp';
import MenCloths from '../../assets/MensCloths.webp';
import WomenCloths from '../../assets/WomenCloths.webp'
import MenShoes from '../../assets/Shoes.webp';
import Electronics from '../../assets/Electronics.webp';
import Grocery from '../../assets/Grocery.webp';
import KidsToys from '../../assets/KidsToys.webp';
import PetSupplies from '../../assets/Pet Supplies.webp';
import SportsAccessories from '../../assets/SportsAccessories.webp';

const categories = [
  {
    id: 1,
    name: "Men’s Traditional Wear",
    image: MenCloths,
    slug: "men-traditional",
    products: "MensCloths", // reference key
  },

  {
    id: 2,
    name: "Casual & Western Wear",
    image: PentShirtMen,
    slug: "casual-western",
    products: "CasualWestern",
  },

  {
    id:3,
    name: "Women’s Clothing",
    image: WomenCloths,
    slug: "womens-clothing",
    products: "WomensClothing",
  },

  {
    id: 4,
    name: "Footwear",
    image: MenShoes,
    slug: "foot-wear",
    products: "FootWear",
  },

  {
    id: 5,
    name: "Watches & Accessories",
    image: Watcheslist,
    slug: "watches-accessories",
    products: "Watches"
  },
  {
    id: 6,
    name: "Electronics & Gadgets",
    image: Electronics,
    slug: "Electronics",
    products: "ElectronicsGadgets",
   
  },
  {
    id: 7,
    name: "Sports & Fitness",
    image: SportsAccessories,
    slug: "sports-fitness",
    products: "Sports"
  },
  
  {
    id: 8,
    name: "Groceries & Essentials",
    image: Grocery,
    slug: "groceries-essentials",
    products: "Groceries",
  },
  {
    id: 9,
    name: "Kid & Toys ",
    image: KidsToys,
    slug: "kids-toys",
    products: "KidsToys",
  },
  {
    id: 10,
    name: "Pet Care & Supplies ",
    image: PetSupplies,
    slug: "pets care-supplies",
    products: "Pets"
  }
]



export default categories;