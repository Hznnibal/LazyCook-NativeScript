import * as React from "react";
import { useTranslation } from "react-i18next";
import { Recipe } from "../../types/Recipe";

interface IngredientSelectorProps {
  recipes: Recipe[];
  selectedIngredients: string[];
  onIngredientToggle: (ingredient: string) => void;
  showAllIngredients: boolean;
}

export function IngredientSelector({
  recipes,
  selectedIngredients,
  onIngredientToggle,
  showAllIngredients
}: IngredientSelectorProps) {
  const { t } = useTranslation();

  const allIngredients = React.useMemo(() => {
    const ingredientSet = new Set<string>();
    recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        ingredientSet.add(ingredient);
      });
    });
    return Array.from(ingredientSet).sort();
  }, [recipes]);

  const ingredientsToShow = showAllIngredients ? allIngredients : allIngredients.slice(0, 8); // Limiter à 3 ingrédients si showAllIngredients est false

  return (
    <stackLayout className="p-4">
      <label className="text-lg font-semibold mb-2" text={t('selectIngredients')} />
      <wrapLayout className="space-x-2 space-y-2">
        {ingredientsToShow.map((ingredient) => (
          <button
            aria-label={ingredient}
            key={ingredient}
            className={`px-3 py-2 rounded-full ${selectedIngredients.includes(ingredient)
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
              }`}
            text={ingredient}
            onTap={() => onIngredientToggle(ingredient)}
          />
        ))}
      </wrapLayout>
    </stackLayout>
  );
}
