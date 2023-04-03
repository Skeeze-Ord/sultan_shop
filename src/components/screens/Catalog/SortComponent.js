import React, { useState } from "react";

const SortComponent = ({ items }) => {
  const [sortedItems, setSortedItems] = useState([...items]);

  const handleSort = (sortType) => {
    switch (sortType) {
      case "nameAsc":
        setSortedItems(
          [...sortedItems].sort((a, b) => a.name.localeCompare(b.name))
        );
        break;
      case "nameDesc":
        setSortedItems(
          [...sortedItems].sort((a, b) => b.name.localeCompare(a.name))
        );
        break;
      case "priceAsc":
        setSortedItems([...sortedItems].sort((a, b) => a.price - b.price));
        break;
      case "priceDesc":
        setSortedItems([...sortedItems].sort((a, b) => b.price - a.price));
        break;
      default:
        setSortedItems([...items]);
    }
  };

  return (
    <div>
      <br />
      <br />
      <button
        className="text-gray-600 border-r-2 border-x-black pr-1"
        onClick={() => handleSort("nameAsc")}
      >
        Sort by name A-Z
      </button>
      <button
        className="text-gray-600 border-r-2 border-x-black pr-1"
        onClick={() => handleSort("nameDesc")}
      >
        Sort by name Z-A
      </button>
      <button
        className="text-gray-600 border-r-2 border-x-black pr-1"
        onClick={() => handleSort("priceAsc")}
      >
        Sort by price UP
      </button>
      <button
        className="text-gray-600 border-r-2 border-x-black pr-1"
        onClick={() => handleSort("priceDesc")}
      >
        Sort by price DOWN
      </button>
      <button
        className="text-gray-600 border-r-2 border-x-black pr-1"
        onClick={() => handleSort("reset")}
      >
        Reset
      </button>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} <span>&#8376;</span>
          </li>
        ))}
      </ul>
      <br />
      <br />
    </div>
  );
};

export default SortComponent;
