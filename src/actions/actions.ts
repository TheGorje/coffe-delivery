import { CartProps } from "../Contexts/LocalStorageContext"
import { ListCoffeesProps } from "../DATA"

export enum ActionTypes {
  INITIALIZE_CART = 'INITIALIZE_CART',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  REMOVE_ALLITEMS = 'REMOVE_ALLITEMS',
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
  SET_QUANTITY = 'SET_QUANTITY',
}


export type CartAction =
  | { type: ActionTypes.INITIALIZE_CART, payload: { cart: CartProps[] } }
  | { type: ActionTypes.ADD_ITEM, payload: { coffeeData: ListCoffeesProps } }
  | { type: ActionTypes.REMOVE_ITEM, payload: { coffeeData: { id: number } } }
  | { type: ActionTypes.REMOVE_ALLITEMS, payload: { }  }
  | { type: ActionTypes.INCREASE_QUANTITY, payload: { coffeeData: { id: number } } }
  | { type: ActionTypes.DECREASE_QUANTITY, payload: { coffeeData: { id: number } } }
  | { type: ActionTypes.SET_QUANTITY, payload: { coffeeData: ListCoffeesProps, quantity: number } }

export const initializeCartAction = (cart: CartProps[]): CartAction => ({
  type: ActionTypes.INITIALIZE_CART,
  payload: { cart },
})

export const addItemAction = (coffeeData: ListCoffeesProps): CartAction => ({
  type: ActionTypes.ADD_ITEM,
  payload: { coffeeData },
})

export const removeItemAction = (itemId: number): CartAction => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: { coffeeData: { id: itemId } },
})

export const removeAllItemsAction = (): CartAction => ({
  type: ActionTypes.REMOVE_ALLITEMS,
  payload: { },
})

export const incrementItemQuantityAction = (itemId: number): CartAction => ({
  type: ActionTypes.INCREASE_QUANTITY,
  payload: { coffeeData: { id: itemId } },
})

export const decrementItemQuantityAction = (itemId: number): CartAction => ({
  type: ActionTypes.DECREASE_QUANTITY,
  payload: { coffeeData: { id: itemId } },
})

export const setQuantityAction = (coffeeData: ListCoffeesProps, quantity: number): CartAction => ({
  type: ActionTypes.SET_QUANTITY,
  payload: { coffeeData, quantity },
})
