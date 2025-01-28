import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-6 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 px-6 bg-black text-white">
      {/* Logo Section */}
      <h2 className="text-3xl font-bold text-white">
        <NavLink to={"/"} className="hover:text-blue-600 transition duration-300">RecipeBox</NavLink>
      </h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="w-full lg:w-auto mt-4 lg:mt-0">
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-white text-black p-3 px-8 rounded-full outline-none shadow-md w-full lg:w-96 focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </form>

      {/* Navigation Links */}
      <ul className="flex gap-8 mt-4 lg:mt-0">
        <li>
          <NavLink
            to={"/"}
            className="text-white hover:text-gray-300 duration-300 font-medium"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-white hover:text-gray-300 duration-300 font-medium"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
