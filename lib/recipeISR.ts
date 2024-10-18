export const getRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes", {
    next: { revalidate: 3600 },
  });
  const data = await response.json();
  return data.recipes;
};
