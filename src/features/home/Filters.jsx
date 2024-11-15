import Filter from "./Filter";

const recipeTypeOptions = [
  "All",
  "Main Course",
  "Dessert",
  "Appetizer",
  "Salad",
  "Breakfast",
  "Bread",
  "Soup",
  "Drink",
  "Sauce",
  "Snack",
  "Fingerfood",
];

const recipeCuisineOptions = [
  "All",
  "African",
  "Asian",
  "American",
  "British",
  "Chinese",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Italian",
  "Japanese",
  "Korean",
  "Mediterranean",
  "Mexican",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

const dietOptions = [
  "All",
  "Ketogenic",
  "Vegetarian",
  "Lacto Vegetarian",
  "Ovo Vegetarian",
  "Vegan",
  "Pescetarian",
  "Paleo",
  "Primal",
  "Low FODMAP",
  "Whole30",
];

const sortByOptions = [
  "None",
  "Popularity",
  "Healthiness",
  "Time",
  "Caffeine",
  "Energy",
  "Calories",
  "Calcium",
  "Carbohydrates",
  "Cholesterol",
  "Total Fat",
  "protein",
  "sugar",
];

const sortDirOptions = ["Ascending", "Descending"];

const servingsOptions = ["All", ...Array.from({ length: 20 }, (_, i) => i + 1)];

const maxReadyTimeOptions = [
  "All",
  ...Array.from({ length: 20 }, (_, i) => 10 * (i + 1)),
];

function Filters() {
  return (
    <div className="mt-6 flex flex-wrap items-end justify-center gap-8">
      <Filter id="recipeType" optionsArr={recipeTypeOptions}>
        Recipe Type
      </Filter>
      <Filter id="recipeCuisine" optionsArr={recipeCuisineOptions}>
        Recipe Cuisine
      </Filter>
      <Filter id="diet" optionsArr={dietOptions}>
        Diet
      </Filter>
      <Filter id="sortBy" optionsArr={sortByOptions}>
        Sort By
      </Filter>
      <Filter id="sortDir" optionsArr={sortDirOptions}>
        Sorting Direction
      </Filter>
      <Filter id="servings" optionsArr={servingsOptions}>
        Servings
      </Filter>
      <Filter id="maxReadyTime" optionsArr={maxReadyTimeOptions}>
        Max Ready Time (minutes)
      </Filter>
    </div>
  );
}

export default Filters;
