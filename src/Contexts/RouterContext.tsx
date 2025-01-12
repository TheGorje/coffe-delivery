import React, { createContext, useState } from 'react'

interface RouterContextProviderProps {
  children: React.ReactNode
}

interface RouterContextType {
  router: string
  handleChangeRouter: (newRouter: string) => void
}

export const RouterContext = createContext({} as RouterContextType)

export function RouterContextProvider({
  children,
}: RouterContextProviderProps) {
  const [router, setRouter] = useState('home')

  function handleChangeRouter(newRouter: string) {
    setRouter(newRouter)
  }

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
