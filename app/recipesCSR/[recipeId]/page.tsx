import RecipeClient from "@/components/ui/reclpe-client";

export default async function Page({
  params,
}: {
  params: { recipeId: string };
}) {
  return <RecipeClient recipeId={params.recipeId} />;
}
