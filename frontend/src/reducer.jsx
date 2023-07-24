export const initialState = {
    basket : [],
    user : null
}


//selector
export const getBasketTotal = (basket)=>{
  return  basket?.reduce((amount,item)=>item.price + amount, 0)
}

const reducer = (state, action)=>{
    const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
    let newBasket = [...state.basket]
    switch(action.type){
        case "ADD_TO_BASKET":
            // console.log(state.user)
            return {
                ...state,
                basket : [...state.basket, action.item]

            };
            case "REMOVE_FROM_BASKET":
                if(index>=0){
                      newBasket.splice(index,1)
                }  else{
                    console.warn(`Cant remove product (id : ${action.id} as its not in basket!`)
                }
                  return {...state, basket : newBasket};

                  case "SET_USER":
                      return {...state , user : action.user};
                      case "EMPTY_BASKET":
                        return {
                            ...state, basket : []
                        };
                        case "GET_ORDERS":
                            return {
                                ...state
                            }
            default : 
            return state
    }
};

export default  reducer ;