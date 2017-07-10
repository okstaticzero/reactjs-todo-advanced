 export const insertItem = (array, action) => {
    return [
        ...array.slice(0, action.index),
        action.item,
        ...array.slice(action.index)
    ]
}

export const removeItem = (array, index) => {
    return [
        ...array.slice(0, index), //take all item up to index
        ...array.slice(index + 1) //take all items after index
    ];
}