import { useContext } from 'react'
import { RouterContext } from '../Contexts/RouterContext'
import { Home } from '../pages/Home/Home'
import { Checkout } from '../pages/Checkout/Checkout'
import { Success } from '../pages/Checkout/Success'

export function DefaultLayout() {
  const context = useContext(RouterContext)
  const { router } = context

  const CurrentPage = () => {
    switch (router) {
      case 'home':
        return <Home />
      case 'checkout':
        return <Checkout />
      case 'success':
        return <Success />
      default:
        return <Home />
    }
  }

  return <CurrentPage />
}
