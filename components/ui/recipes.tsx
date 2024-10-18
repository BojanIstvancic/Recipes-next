"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./badge";
import { RecipeType } from "@/types";
import Link from "next/link";

interface RecipesProps {
  data: RecipeType[];
}

export default function Recipes({ data }: RecipesProps) {
  const [filteredRecipes, setFilteredRecipes] = useState<Array<RecipeType>>([]);
  const [badge, setBadge] = useState("");

  const recipes = filteredRecipes.length > 0 ? filteredRecipes : data;

  const handleOnBadgeClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    cuisine: string
  ) => {
    e.preventDefault();
    setBadge(cuisine);
  };

  useEffect(() => {
    if (badge) {
      const filteredRecipes = data.filter(
        (recipe: RecipeType) => recipe && recipe.cuisine === badge
      );
      setFilteredRecipes(filteredRecipes);
    }
  }, [badge, data]);

  const cousines: Array<string> = [
    "All",
    "Asian",
    "American",
    "Greek",
    "Italian",
    "Indian",
    "Japanese",
    "Mediterranean",
    "Mexican",
    "Pakistani",
  ];

  return (
    <>
      <div className="my-12">
        {cousines.map((cuisine, idx) => (
          <Badge
            key={`${cuisine}-${idx}`}
            variant="outline"
            className="border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 hover:scale-110 ease-in duration-200"
            onClick={(e) => handleOnBadgeClick(e, cuisine)}
          >
            <p>{cuisine}</p>
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-x-10 gap-y-20 xl:gap-y-32 xl:pt-32 pt-12 pb-40">
        {recipes.map((recipe: RecipeType, idx: number) => (
          <Link href={`/recipes/${recipe.id}`} key={`${recipe.name}-${idx}`}>
            <Card className="flex flex-col bg-orange-50 hover:scale-105 ease-in duration-200 xl:min-h-[600px] fancyGradient">
              <CardHeader className="mb-5">
                <div className="relative h-80">
                  <Image
                    src={recipe.image}
                    alt={recipe.name}
                    fill={true}
                    className="bg-cover rounded-md shadow-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="uppercase lg:text-3xl relative font-bold line-clamp-2">
                  {recipe.name}
                </CardTitle>
              </CardContent>
              <CardFooter className="flex items-start gap-2 lg:gap-12 lg:flex-row flex-col">
                <div className="flex flex-col">
                  <p className="text-lg">Serves</p>
                  <p className="text-gray-800">{recipe.servings}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">Prep Time</p>
                  <p className="text-gray-800">{recipe.prepTimeMinutes} MIN</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">Cook Time</p>
                  <p className="text-gray-800">{recipe.cookTimeMinutes} MIN</p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
