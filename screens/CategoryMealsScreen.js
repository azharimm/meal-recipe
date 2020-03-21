import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoryMealsScreen = props => {
    console.log(props)
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
            <Button title="Go to Meal Detail" onPress={() => {
                props.navigation.push('MealDetail')
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen