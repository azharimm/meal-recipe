import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id})
            }} />
        )
    }

    return (
        <FlatList keyExtractor={(item, index) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    )
}

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meals Categories',
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen