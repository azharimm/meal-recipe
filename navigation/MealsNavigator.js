import React from 'react'
import { Platform } from 'react-native'
import Color from '../constants/Color'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'

const MealsNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: CategoryMealsScreen,
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS == 'android' ? Color.primaryColor : ''
            },
            headerTintColor: Platform.OS == 'android' ? 'white' : Color.primaryColor
        }
    }
)

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                            name="ios-restaurant"
                            size={25}
                            color={tabInfo.tintColor} 
                        />
            },
            tabBarColor: Color.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                        name="ios-star"
                        size={25}
                        color={tabInfo.tintColor}
                         />
            },
            tabBarColor: Color.accentColor
        }
    }
}

const MealsFavTabNavigator = Platform.OS == 'android' ? 
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Color.primaryColor
        }
    }) 
    : 
    createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Color.accentColor
        }
    }
)

export default createAppContainer(MealsFavTabNavigator)