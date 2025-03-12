
import { Type } from "./action.type";

export const initialState = {
  basket: [],
  user: null,
};

// reducer listens for actions and modifies the state accordingly
export const reducer = (state = initialState, action) => {
  // action.type- determines which state change should occur
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      // Check if the item already exists in the cart
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (!existingItem) {
        // if not create a new basket array
        return {
          // state- is the current global state(contain properties)
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        // If item exists, update its amount
        const updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
        return {
          ...state,
          basket: updatedBasket,
        };
      }
    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }
      return {
        ...state,
        basket: newBasket,
      };
    case Type.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };
    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

// import { Type } from "./action.type";

// export const initialState = {
//   basket: [],
//   user: null,
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case Type.ADD_TO_BASKET:
//       // *check if the item exist
//       const exixtingItem = state.basket.find(
//         (item) => item.id === action.item.id
//       );
//       if (!exixtingItem) {
//         return {
//           ...state,
//           basket: [...state.basket, { ...action.item, amount: 1 }],
//         };
//       } else {
//         const updatedBasket = state.basket.map((item) => {
//           return item.id === action.item.id
//             ? { ...item, amount: item.amount + 1 }
//             : item;
//         });

//         return { ...state, basket: updatedBasket };
//       }
//     // return { ...state,basket:[...state.basket,action.item] }
//     case Type.REMOVE_FROM_BASKET:
//       const index = state.basket.findIndex((item) => item.id === action.id);
//       let newBasket = [...state.basket];

//       if (index > 0) {
//         if (newBasket[index].amount > 1) {
//           newBasket[index] = {
//             ...newBasket[index],
//             amount: newBasket[index].amount - 1,
//           };
//         } else {
//           newBasket.splice(index, 1);
//         }
//       }
//       return {
//         ...state,
//         basket: newBasket,
//       };
//     case Type.EMPTY_BASKET:
//       return{
//         ...state,
//         basket:[],
//       };

//     case Type.SET_USER:
//         return {...state, user: action.user}

//     default:
//       return state;
//   }
// };
