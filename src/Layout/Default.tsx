import { useContext } from 'react'
import { RouterContext } from '../Contexts/RouterContext'
import { Home } from '../pages/Home/Home'
import { Checkount } from '../pages/Checkout/Checkout'

export function DefaultLayout() {
  const context = useContext(RouterContext)
  const { router } = context

  const CurrentPage = () => {
    switch (router) {
      case 'home':
        return <Home />
      case 'checkout':
        return <Checkount />
      default:
        return <Home />
    }
  }

  return <CurrentPage />
}
