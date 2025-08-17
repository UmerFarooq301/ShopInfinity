import React from "react";
import { useParams } from "react-router-dom";
import categories from "../../Pages/Categories/Categories";
import categoryProducts from "../../Pages/Categories/CategoryProducts";

function CategoryPage() {
  const { slug } = useParams();

  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    return <h2 className="text-red-600 p-6">Category not found</h2>;
  }

  const products = categoryProducts[category.products];

  if (!products || products.length === 0) {
    return (
      <h2 className="text-gray-700 p-6">
        No products available in this category
      </h2>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 ">{category.name} Collection</h1>
      <div className="grid grid-cols-4 gap-6 ml-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            <div className="relative w-full h-96 overflow-hidden">
              <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
                New
              </span>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition duration-300"></div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1 mb-3">
                Trendy & comfortable
              </p>
              <div className=" gap-1">{item.rating}</div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-800">
                  {item.price}
                </span>

                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                  {item.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
