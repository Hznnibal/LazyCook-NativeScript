import * as React from "react";
import { useTranslation } from "react-i18next";
import { Recipe } from "../../types/Recipe";

interface RecipeListProps {
  recipes: Recipe[];
  onRecipeSelect: (recipe: Recipe) => void;
}

export function RecipeList({ recipes, onRecipeSelect }: RecipeListProps) {
  const { t } = useTranslation();

  return (
    <scrollView className="w-full">
      <stackLayout className="p-4 space-y-4">
        {recipes.map((recipe, index) => (
          <gridLayout
            key={index}
            className="bg-white rounded-lg p-4 shadow-md"
            onTap={() => onRecipeSelect(recipe)}
          >
            <stackLayout>
              <label
                className="text-xl text-gray-600 font-bold"
                text={recipe.name}
              />
              <label
                className="text-sm text-gray-600 mt-2"
                text={`${recipe.ingredients.length} ${t('ingredients')}`}
              />
            </stackLayout>
          </gridLayout>
        ))}
        {recipes.length === 0 && (
          <label
            className="text-gray-600 text-center p-4 bg-white rounded-lg"
            text={t('noRecipesFound')}
          />
        )}
      </stackLayout>
    </scrollView>
  );
}