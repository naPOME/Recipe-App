import CircleIcon from "./components/CircleIcon"
import Search from "./components/Search"
import { FaCoffee, FaPizzaSlice, FaIceCream, FaApple } from 'react-icons/fa';
import Popular from "./components/Popular";
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
    <Search/>
    <div className="flex justify-center space-x-4">
      {/* Use CircleIcon with different icons and props for each circle */}
      <CircleIcon bgColor="rgb(31,41,55)" iconColor="#fff" description="Coffee" icon={<FaCoffee />} />
      <CircleIcon bgColor="rgb(31,41,55)" iconColor="#fff" description="Pizza" icon={<FaPizzaSlice />} />
      <CircleIcon bgColor="rgb(31,41,55)" iconColor="#fff" description="Ice Cream" icon={<FaIceCream />} />
      <CircleIcon bgColor="rgb(31,41,55)" iconColor="#fff" description="Apple" icon={<FaApple />} />
    </div>

    <Popular />
    <Popular />
    <Popular />
    

    </>
   
  )
}

export default App
