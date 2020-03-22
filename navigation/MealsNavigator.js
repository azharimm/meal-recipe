import React from 'react'
import { Text } from 'react-native'
import { Platform } from 'react-native'
import Color from '../constants/Color'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS == 'android' ? Color.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerTintColor: Platform.OS == 'android' ? 'white' : Color.primaryColor
}

const MealsNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: CategoryMealsScreen,
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
)

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
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
            tabBarColor: Color.primaryColor,
            tabBarLabel: Platform.OS == 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>: 'Meals'
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                        name="ios-star"
                        size={25}
                        color={tabInfo.tintColor}
                         />
            },
            tabBarColor: Color.accentColor,
            tabBarLabel: Platform.OS == 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>: 'Meals'
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
        labelStyle: {
            fontFamily: 'open-sans-bold'
        },
        tabBarOptions: {
            activeTintColor: Color.accentColor
        }
    }
)

const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
)

const mainNavigator = createDrawerNavigator(
    {
        MealsFavs: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: 'Meals'
            }
        },
        Filters: FiltersNavigator
    },
    {
        contentOptions: {
            activeTintColor: Color.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
)

export default createAppContainer(mainNavigator)