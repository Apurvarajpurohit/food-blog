import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <span className="text-3xl text-white font-bold">Loading... Please wait!</span>
    </div>
  );

  return (
    <div className="bg-black text-white py-8 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-center mb-12 tracking-wider uppercase">
        Explore the Best Recipes
      </h2>

      {/* Recipe List */}
      {recipeList && recipeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {recipeList.map((item) => (
            <div key={item.id} className="group relative">
              <RecipeItem item={item} />
              {/* Hover effect for Recipe Items */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="lg:text-4xl text-2xl font-extrabold tracking-wide">
            Nothing to show. Please search for something.
          </p>
        </div>
      )}
    </div>
  );
}
