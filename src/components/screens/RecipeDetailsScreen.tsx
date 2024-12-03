import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { RecipeDetail } from "../../components/recipes/RecipeDetail";

type RecipeDetailsScreenProps = {
    route: RouteProp<MainStackParamList, "RecipeDetails">,
    navigation: FrameNavigationProp<MainStackParamList, "RecipeDetails">,
};

export function RecipeDetailsScreen({ route }: RecipeDetailsScreenProps) {
    const { recipe } = route.params;

    return (
        <gridLayout rows="*">
            <RecipeDetail recipe={recipe} />
        </gridLayout>
    );
}