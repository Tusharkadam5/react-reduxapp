const inintialState ={
    cartData:[]
}
export default function cartItems(state = [], action)
{
    console.log('action.type', action.type)
    console.log('reducer', action.data)
    switch(action.type){
        case "ADD_TO_CART":
        return [
            ...state,
            {cartData:action.data}
        ]
        break;
        case "REMOVE_TO_CART":
        return [
            ...state,
            {cartData:action.data}
        ]
        break;
        default:
            return state;
    }
}