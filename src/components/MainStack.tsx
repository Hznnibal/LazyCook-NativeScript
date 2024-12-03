import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { RecipeDetailsScreen } from "./screens/RecipeDetailsScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
            />
            <StackNavigator.Screen
                name="RecipeDetails"
                component={RecipeDetailsScreen}
                options={{
                    headerShown: true,
                    // title: "Recipe instructions"
                }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);