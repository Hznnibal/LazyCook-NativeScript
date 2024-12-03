import { Recipe } from './types/Recipe';

export type MainStackParamList = {
  Home: undefined;
  RecipeDetails: {
    recipe: Recipe;
  };
};