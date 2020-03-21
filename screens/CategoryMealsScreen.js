import React from 'react'
import { View, Text, StyleSheet, Button, } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

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