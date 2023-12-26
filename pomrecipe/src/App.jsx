import React from "react";
import CircleIcon from "./components/CircleIcon";
import Search from "./components/Search";
import Popular from "./components/Popular";
import { FaCoffee, FaPizzaSlice, FaIceCream, FaApple } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="grid items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center">
          <p className="text-3xl font-semibold tracking-tight dark:brightness-150 transition duration-300 transform hover:scale-105 hover:text-white">
            <span className="text-gray-810">P</span>
            <span className="text-gray-700">O</span>
            <span className="text-gray-600">M</span>
            <span className="text-gray-500">'s </span>
            <span className="text-gray-810">R</span>
            <span className="text-gray-600">e</span>
            <span className="text-gray-700">c</span>
            <span className="text-gray-800">i</span>
            <span className="text-gray-600">p</span>
            <span className="text-gray-700">e</span>
          </p>
        </div>
      </div>
      <Search />
      <div className="flex justify-center space-x-4">
        {[
          { bgColor: "rgb(31,41,55)", iconColor: "#fff", description: "Coffee", icon: <FaCoffee /> },
          { bgColor: "rgb(31,41,55)", iconColor: "#fff", description: "Pizza", icon: <FaPizzaSlice /> },
          { bgColor: "rgb(31,41,55)", iconColor: "#fff", description: "Ice Cream", icon: <FaIceCream /> },
          { bgColor: "rgb(31,41,55)", iconColor: "#fff", description: "Apple", icon: <FaApple /> },
        ].map((circle, index) => (
          <CircleIcon key={index} {...circle} />
        ))}
      </div>
      <h4 className="mb-2 mt-0 text-3xl font-small leading-tight text-primary px-10 text-start">
        Popular Meal
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-0">
        
          <Popular  />
        
      </div>
    </>
  );
}

export default App;
