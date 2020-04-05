import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from '../components/MealItem'

const MealList = props => {

    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                imgUrl={itemData.item.imgUrl}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetail', {mealId: itemData.item.id, mealTitle: itemData.item.title})
                }} />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealList