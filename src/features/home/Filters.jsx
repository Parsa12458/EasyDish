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
      <Filter
        id="servings"
        optionsArr={recipeTypeOptions}
        type="number"
        defaultValue={1}
      >
        Servings
      </Filter>
      <Filter
        id="maxReadyTime"
        optionsArr={recipeTypeOptions}
        type="number"
        defaultValue={40}
      >
        Max Ready Time (minutes)
      </Filter>
    </div>
  );
}

export default Filters;
