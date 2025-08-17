import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import HeroPentShirts from "../../assets/HeroPentShirts.jpg";
import Watches from "../../assets/Watches.jpg";
import ShalKamMen from "../../assets/ShalKam-Men.jpg";
import BeautyParlor from "../../assets/Beauty&parlor.PNG";
import ShalKamWomen from "../../assets/Shalkam-women.jpg";
import Mobiles from "../../assets/Mobiles.jpg";
import Laptops from "../../assets/Laptops.jpg";
import Headphones from "../../assets/Headphones.jpg";
import Smartwatches from "../../assets/Smartwatches.PNG";
import MenShoes from "../../assets/Shoes.jpg";
import Sports from "../../assets/Sports.jpg";
import categories from "../../Pages/Categories/Categories";

const imageSlides = [
  {
    url: HeroPentShirts,
    label: "Summer Sale 40% off - Shirts & Pants",
    type: "image",
    textColor: "text-black",
  },
  {
    url: Watches,
    label: "Summer Sale 30% off - Watches ",
    type: "image",
    textColor: "text-white",
  },
  {
    url: ShalKamMen,
    label: "Summer Sale 25% off - Men Shalwar Kameez",
    type: "image",
  },
  {
    url: BeautyParlor,
    label: "Sale 40% off - Women Fashion",
    type: "image",
    textColor: "text-white",
  },
  {
    url: ShalKamWomen,
    label: "Summer Sale 25% off - Women Shalwar Kameez",
    type: "image",
  },
  { url: Mobiles, label: "Mobiles", type: "image", textColor: "text-white" },
  { url: Laptops, label: "Laptops", type: "image", textColor: "text-white" },
  {
    url: Headphones,
    label: "Sale 40% off - Headphones & Airpods",
    type: "image",
    textColor: "text-white",
  },
  { url: Smartwatches, label: "Sale 35% - Smart Watches", type: "image" },
  {
    url: MenShoes,
    label: "Summer Sale 45% - Shoes",
    type: "image",
    textColor: "text-orange",
  },
  { url: Sports, label: "Summer Sale 45% - Sports", type: "image" },
];



function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === imageSlides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = imageSlides[currentIndex];

  return (
    <>
      <section className="h-[500px] relative overflow-hidden bg-black flex items-center justify-center">
        {currentSlide.type === "image" && (
          <img
            src={currentSlide.url}
            alt="Slide"
            className="w-full h-full object-cover transition-opacity duration-700"
            style={{ objectPosition: "center" }}
          />
        )}

        <div className="absolute left-12 bottom-2 text-5xl">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4 ${
              currentSlide.textColor || "text-white"
            }`}
          >
            {currentSlide.label}
          </h1>
        </div>
      </section>

      {/* Shopping Cards */}

<div className="flex mt-9 justify-center">
  <div className="grid grid-cols-5 gap-6">
    {categories.map((category) => (
      <div
        key={category.id}
        onClick={() => navigate(`/category/${category.slug}`)}
        className="relative w-72 h-72 p-4 bg-white hover:bg-slate-100 shadow-lg rounded-lg overflow-hidden cursor-pointer "
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-[80%] object-cover rounded-md hover:scale-105 transition-transform duration-300"
        />
        <div className="">
          <h3 className="text-xl font-semibold text-center mt-2">{category.name}</h3>
        </div>
      </div>
    ))}
  </div>
</div>

     
    </>
  );
}
export default Home;
