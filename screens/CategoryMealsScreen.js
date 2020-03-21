import React from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import Color from '../constants/Color'

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId')
    const selectCategory = CATEGORIES.find(cat => cat.id === catId)
    return (
        <View style={styles.screen}>
            <Text>{selectCategory.title}</Text>
            <Button title="Go to Meal Detail" onPress={() => {
                props.navigation.push('MealDetail')
            }} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectCategory = CATEGORIES.find(cat => cat.id === catId)
    
    return {
        headerTitle: selectCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS == 'android' ? Color.primaryColor : ''
        },
        headerTintColor: Platform.OS == 'android' ? 'white' : Color.primaryColor
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen