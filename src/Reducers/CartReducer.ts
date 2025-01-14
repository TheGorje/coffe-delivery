import { produce } from 'immer'
import { CartAction, ActionTypes } from '../actions/actions'
import { ListCoffeesProps } from '../DATA'

export interface CartProps {
  coffeeData: ListCoffeesProps
  quantity: number
  totalPrice: number
}

export interface CartState {
  cart: CartProps[]
}

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.INITIALIZE_CART: {
        draft.cart = action.payload.cart
        break
      }

      case ActionTypes.ADD_ITEM: {
        const itemIndex = draft.cart.findIndex(
          (item) => item.coffeeData.id === action.payload.coffeeData.id
        )

        if (itemIndex !== -1) {
          const existingItem = draft.cart[itemIndex]

          existingItem.quantity += 1
          existingItem.totalPrice =
            existingItem.quantity * existingItem.coffeeData.price
        } else {
          draft.cart.push({
            coffeeData: action.payload.coffeeData,
            quantity: 1,
            totalPrice: action.payload.coffeeData.price,
          })
        }

        break
      }

      case ActionTypes.REMOVE_ITEM: {
        const itemIndex = draft.cart.findIndex((item) => {
          return item.coffeeData.id === action.payload.coffeeData.id
        })

        if (itemIndex !== -1) {
          draft.cart.splice(itemIndex, 1)
        }

        break
      }

      case ActionTypes.REMOVE_ALLITEMS: {
        return (state = { ...state, cart: [] }) // Retorna um novo estado com o carrinho vazio
      }

      case ActionTypes.INCREASE_QUANTITY: {
        const item = draft.cart.find(
          (item) => item.coffeeData.id === action.payload.coffeeData.id
        )

        if (item) {
          item.quantity += 1
          item.totalPrice = item.quantity * item.coffeeData.price
        }

        break
      }

      case ActionTypes.DECREASE_QUANTITY: {
        const item = draft.cart.find(
          (item) => item.coffeeData.id === action.payload.coffeeData.id
        )

        if (item) {
          if (item.quantity > 1) {
            item.quantity -= 1
            item.totalPrice = item.quantity * item.coffeeData.price
          }
          // else { Permite remover o item, se o valor for abaixo de 1
          //   draft.cart = draft.cart.filter(
          //     (item) => item.coffeeData.id !== action.payload.coffeeData.id
          //   )
          // }
        }

        break
      }

      case ActionTypes.SET_QUANTITY: {
        const item = draft.cart.find(
          (item) => item.coffeeData.id === action.payload.coffeeData.id
        )

        if (item) {
          item.quantity = action.payload.quantity
          item.totalPrice = item.quantity * item.coffeeData.price
        } else {
          draft.cart.push({
            coffeeData: action.payload.coffeeData,
            quantity: action.payload.quantity,
            totalPrice:
              action.payload.quantity * action.payload.coffeeData.price,
          })
        }

        break
      }

      default:
        return state
    }
  })
}
