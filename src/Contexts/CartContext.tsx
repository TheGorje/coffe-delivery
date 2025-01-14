import React, { createContext, useReducer, ReactNode, useEffect } from 'react'
import { cartReducer, CartState } from '../Reducers/CartReducer'
import { ListCoffeesProps } from '../DATA'
import { CartProps, useDataContext } from './LocalStorageContext'
import {
  addItemAction,
  removeItemAction,
  removeAllItemsAction,
  incrementItemQuantityAction,
  decrementItemQuantityAction,
  setQuantityAction,
  initializeCartAction,
} from '../actions/actions'

interface CartContextType {
  cart: CartProps[]
  addItem: (item: ListCoffeesProps) => void
  removeItem: (itemId: number) => void
  removeAllItems: () => void
  incrementItemQuantity: (itemId: number) => void
  decrementItemQuantity: (itemId: number) => void
  setQuantity: (coffeeData: ListCoffeesProps, quantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const { data, setCart } = useDataContext()

  const initialState: CartState = {
    cart: data.cart,
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    const storedCart = data.cart

    if (storedCart) {
      dispatch(initializeCartAction(storedCart))
    }
  }, [data.cart])

  useEffect(() => {
    const areArraysNotEqual = (
      arr1: string | unknown[],
      arr2: string | unknown[]
    ) => {
      if (arr1.length !== arr2.length) {
        return true
      }

      for (let i = 0; i < arr1.length; i++) {
        if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) {
          return true
        }
      }

      return false
    }

    if (areArraysNotEqual(state.cart, data.cart)) {
      setCart(state.cart)
    }
  }, [state.cart, data.cart, setCart])

  const addItem = (item: ListCoffeesProps) => {
    dispatch(addItemAction(item))
  }

  const removeItem = (itemId: number) => {
    dispatch(removeItemAction(itemId))
  }

  const removeAllItems = () => {
    dispatch(removeAllItemsAction())
  }

  const incrementItemQuantity = (itemId: number) => {
    dispatch(incrementItemQuantityAction(itemId))
  }

  const decrementItemQuantity = (itemId: number) => {
    dispatch(decrementItemQuantityAction(itemId))
  }

  const setQuantity = (coffeeData: ListCoffeesProps, quantity: number) => {
    dispatch(setQuantityAction(coffeeData, quantity))
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addItem,
        removeItem,
        removeAllItems,
        incrementItemQuantity,
        decrementItemQuantity,
        setQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = React.useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
