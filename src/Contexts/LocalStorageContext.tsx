import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from 'react'
import { ListCoffeesProps } from '../DATA'

export type PaymentMethod =
  | 'cartão de crédito'
  | 'cartão de debito'
  | 'dinheiro'

export interface CartProps {
  coffeeData: ListCoffeesProps
  quantity: number
  totalPrice: number
}
type DataState = {
  address: {
    cep?: string
    rua?: string
    numero?: string
    complemento?: string | undefined
    bairro?: string
    cidade?: string
    uf?: string
  }
  cart: CartProps[] // definição do carrinho oq recebe
  paymentMethod: PaymentMethod
}

export type DataContextType = {
  data: DataState
  setAddress: (address: DataState['address']) => void
  setCart: (cart: CartProps[]) => void
  setPayment: (paymentMethod: PaymentMethod) => void
}

export const DataContext = createContext<DataContextType | undefined>(undefined)

export function DataProvider({ children }: { children: ReactNode }) {
  const initialData: DataState = {
    address: {
      cep: '',
      rua: '',
      numero: '',
      complemento: undefined,
      bairro: '',
      cidade: '',
      uf: '',
    },
    cart: [],
    paymentMethod: 'dinheiro', // Mudança: inicializado diretamente como string,
  }

  const [data, setData] = useState<DataState>(() => {
    const savedData = localStorage.getItem('@coffeDelivery: userData-1.0.0')

    return savedData ? JSON.parse(savedData) : initialData
  })

  useEffect(() => {
    localStorage.setItem('@coffeDelivery: userData-1.0.0', JSON.stringify(data))
  }, [data])

  const setAddress = (address: DataState['address']) => {
    setData((prevState) => ({
      ...prevState,
      address,
    }))
  }

  const setCart = (cart: CartProps[]) => {
    setData((prevState) => ({
      ...prevState,
      cart,
    }))
  }

  const setPayment = (paymentMethod: PaymentMethod) => {
    setData((prevState) => ({
      ...prevState,
      paymentMethod,
    }))
  }

  return (
    <DataContext.Provider value={{ data, setAddress, setCart, setPayment }}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider')
  }

  return context
}
