import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { useTranslation } from "react-i18next";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { Recipe } from "../../types/Recipe";
import { IngredientSelector } from "../ingredients/IngredientSelector";
import { LanguageSelector } from '../navigation/LanguageSelector';
import { RecipeList } from "../recipes/RecipeList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">;
    navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const { t } = useTranslation('recipes');
    const recipes = t('recipes', { returnObjects: true }) as Recipe[];
    const [selectedIngredients, setSelectedIngredients] = React.useState<string[]>([]);
    const [showAllIngredients, setShowAllIngredients] = React.useState(false);

    // Filtrer les recettes en fonction des ingrédients sélectionnés
    const filteredRecipes = React.useMemo(() => {
        if (selectedIngredients.length === 0) return [];
        return recipes.filter(recipe =>
            recipe.ingredients.every(ingredient =>
                selectedIngredients.includes(ingredient)
            )
        );
    }, [recipes, selectedIngredients]);

    // Fonction pour activer/désactiver un ingrédient
    const handleIngredientToggle = (ingredient: string) => {
        setSelectedIngredients(prev =>
            prev.includes(ingredient)
                ? prev.filter(i => i !== ingredient) // Désélectionner si déjà sélectionné
                : [...prev, ingredient] // Ajouter si non sélectionné
        );
    };

    // Fonction pour tout sélectionner/désélectionner
    const handleSelectAllIngredients = () => {
        const allIngredients = recipes.flatMap(recipe => recipe.ingredients);
        const uniqueIngredients = Array.from(new Set(allIngredients)); // Supprimer les doublons

        if (selectedIngredients.length === uniqueIngredients.length) {
            // Si tous les ingrédients sont déjà sélectionnés, on les désélectionne tous
            setSelectedIngredients([]);
        } else {
            // Sinon, on sélectionne tous les ingrédients
            setSelectedIngredients(uniqueIngredients);
        }
    };

    return (
        <stackLayout className="bg-gray-800">
            <LanguageSelector />
            <scrollView>
                <stackLayout>
                    {/* Bouton pour tout sélectionner/désélectionner */}
                    <button className="btn" onTap={handleSelectAllIngredients}>
                        {selectedIngredients.length === 0
                            ? "Tout sélectionner"
                            : "Désélectionner tout"}
                    </button>

                    {/* Sélection des ingrédients */}
                    <IngredientSelector
                        recipes={recipes}
                        selectedIngredients={selectedIngredients}
                        onIngredientToggle={handleIngredientToggle}
                        showAllIngredients={showAllIngredients}
                    />
                    {/* Bouton pour afficher/masquer tous les ingrédients */}
                    <button className="btn" onTap={() => setShowAllIngredients(!showAllIngredients)}>
                        {showAllIngredients ? "⬆" : "⬇"}
                    </button>

                    {/* Affichage des recettes filtrées */}
                    <RecipeList
                        recipes={filteredRecipes}
                        onRecipeSelect={(recipe) =>
                            navigation.navigate("RecipeDetails", { recipe })
                        }
                    />
                </stackLayout>
            </scrollView>
        </stackLayout>
    );
}
