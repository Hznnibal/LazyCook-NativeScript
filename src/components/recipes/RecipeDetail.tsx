import * as React from "react";
import { useTranslation } from "react-i18next";
import { Recipe } from "../../types/Recipe";

interface RecipeDetailProps {
  recipe: Recipe;
}

export function RecipeDetail({ recipe }: RecipeDetailProps) {
  const { t } = useTranslation();

  return (
    <scrollView className="w-full">
      <stackLayout className="p-4 space-y-4">
        <label className="text-2xl font-bold" text={recipe.name} />

        <label className="text-xl font-semibold" text={t('ingredients')} />
        <stackLayout className="space-y-2 ml-4">
          {recipe.ingredients.map((ingredient, index) => (
            <label
              key={index}
              className="text-gray-400"
              text={`• ${ingredient}`}
            />
          ))}
        </stackLayout>

        <label className="text-xl font-semibold" text={t('instructions')} />
        <label
          className="text-gray-400 ml-4"
          textWrap={true}
          text={recipe.instructions}
        />
      </stackLayout>
    </scrollView>
  );
}