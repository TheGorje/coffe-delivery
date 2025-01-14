import React, { createContext, useEffect, useState } from 'react'

interface RouterContextProviderProps {
  children: React.ReactNode
}

type RouterPaths = 'home' | 'checkout' | 'success'

interface RouterContextType {
  router: RouterPaths
  handleChangeRouter: (newRouter: RouterPaths) => void
}

export const RouterContext = createContext({} as RouterContextType)

export function RouterContextProvider({
  children,
}: RouterContextProviderProps) {
  const [router, setRouter] = useState<RouterPaths>('checkout')

  const handleChangeRouter = (newRouter: RouterPaths) => {
    setRouter(newRouter)
  }

  useEffect(() => {
    const titles = {
      home: 'Coffee Delivery',
      checkout: 'Finalizar Compra',
      success: 'Pedido Concluído',
    }

    document.title = titles[router]
  }, [router])

  return (
    <RouterContext.Provider
      value={{
        router,
        handleChangeRouter,
      }}
    >
      {children}
    </RouterContext.Provider>
  )
}
