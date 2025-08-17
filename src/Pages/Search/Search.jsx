import React from "react";
import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className="ml-48 mb-3">
      <form className="relative">
        {/* Search Icon Inside Input */}
        <span className="absolute inset-y-0 left-4 flex items-center text-2xl font-extrabold text-gray-800">
          <CiSearch />
        </span>

        <input
          type="text"
          placeholder="Search"
          className="pl-13 pr-4 py-3 rounded-full bg-white text-gray-800 focus:outline-none "
        />
      </form>
    </div>
  );
}

export default Search;
