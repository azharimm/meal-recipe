import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native'

const CategoryGridTile = props => {
    let TouchComp = TouchableOpacity;
    if(Platform.OS == 'android' && Platform.Version >= 21) {
        TouchComp = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridItem}>
            <TouchComp style={{flex: 1}} onPress={props.onSelect}>
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchComp>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS == 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 3,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
})

export default CategoryGridTile