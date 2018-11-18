import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_FROM_CART,
  TOTAL_COST,
  DELIVERY_COST
} from './../constants/ActionTypes';   

const initialState = { 
  addedItems: [],
  totalCost: 0,
  deliveryCost: 0,
  numberOfItems: 0
};
/**
 * @returns {object} Cart state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload.addedItems;
      const numberOfItems = state.addedItems.length + 1;
      return { 
        ...state,
        addedItems: [...state.addedItems, item],
        numberOfItems
      };
    }
    case REMOVE_FROM_CART: {
      const itemId = action.payload.itemId;
      const updatedItems = state.addedItems;
      const numberOfItems = state.addedItems.length - 1;
      const itemIndex = updatedItems.findIndex((item => item.id === itemId));
      updatedItems[itemIndex].quantity = 1;
      const updatedItemsId = updatedItems.filter(item => item.id !== itemId);
      return { 
        ...state,
        addedItems: [...updatedItemsId],
        numberOfItems
      };
    }
    case CHECKOUT_REQUEST:
      return initialState;
    case ADD_ITEM: {
      const itemId = action.payload.itemId;
      const updatedItems = state.addedItems;
      const itemIndex = updatedItems.findIndex((obj => obj.id === itemId));
      updatedItems[itemIndex].quantity++; 
      return { 
        ...state,
          addedItems: [...updatedItems],
          numberOfItems: state.numberOfItems
      };
    }
    case REMOVE_ITEM: {
      const itemId = action.payload.itemId;
      const updatedItems = state.addedItems;
      const itemIndex = updatedItems.findIndex((item => item.id === itemId));
      if (updatedItems[itemIndex].quantity > 0) {
        updatedItems[itemIndex].quantity--;
      }
      return {
        ...state,
        addedItems: [...updatedItems],
        numberOfItems: state.numberOfItems
      };
    } 
    case TOTAL_COST: {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let total = 0;
      if (state.addedItems.length > 0) {
        const totalCost = state.addedItems.map((item) => (item.quantity * item.price));
        total = totalCost.reduce(reducer);
      }
      return {
        ...state,
        addedItems: [...state.addedItems],
        totalCost: total,
        deliveryCost: state.deliveryCost,
        numberOfItems: state.numberOfItems
      };
    }
    case DELIVERY_COST: {
      const getSum = (total, num) => total + num;
      let total = 0;
      if (state.addedItems.length > 0) {
        const array = state.addedItems;
        const uniqueArray = array.filter((obj, index, array) => { 
          return array.map(mapObj => mapObj['restaurantId']).indexOf(obj['restaurantId']) === index;
        }); 
        const deliveryCost = uniqueArray.map((item) => (item.dilivaryCost));
        total = deliveryCost.reduce(getSum);
      }
      return {
        ...state,
        addedItems: [...state.addedItems],
        totalCost: state.totalCost,
        deliveryCost: total,
        numberOfItems: state.numberOfItems
      };    
    }
    default:
      return state;
  }
};

