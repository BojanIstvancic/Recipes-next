import Recipes from "@/components/ui/recipes";
import { getRecipes } from "@/lib/recipe";

export default async function HomePage() {
  const recipes = await getRecipes();

  return (
    <div className="xl:px-24 px-10">
      <div className="my-12">
        <Recipes data={recipes} />
      </div>
    </div>
  );
}
