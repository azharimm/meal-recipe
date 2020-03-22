import { Platform } from 'react-native'
import Color from '../constants/Color'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
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

const MealsFavTabNavigator = createBottomTabNavigator(
    {
        Meals: MealsNavigator,
        Favorites: FavoritesScreen
    }
)

export default createAppContainer(MealsFavTabNavigator)