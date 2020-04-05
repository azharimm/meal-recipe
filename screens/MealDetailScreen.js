import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const availableMeals = useSelector(state => state.meals.meals)
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedMeal.imgUrl}} />
            <View style={styles.detail}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    return {
        headerTitle: mealTitle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Favorite" iconName='ios-star' onPress={() => console.log('Favorite')}/>
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    detail: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10
    }
})

export default MealDetailScreen