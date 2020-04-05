export const TOGGLE_FAVORITE = 'TOGGE_FAVORITE'

export const toggleFavorite = id => {
    return {
        type: TOGGLE_FAVORITE,
        mealId: id
    }
}