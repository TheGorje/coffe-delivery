import { ShoppingCart } from 'phosphor-react'
import logoSVG from '../../assets/Logo.svg'
import { useContext, useEffect, useState } from 'react'
import { useDataContext } from '../../Contexts/LocalStorageContext'
import { RouterContext } from '../../Contexts/RouterContext'
import { CartDropDown } from './CartDropDown'
import { ShowLocation } from './ShowLocation'

export function Header() {
  const context = useContext(RouterContext)
  const { handleChangeRouter } = context

  const { data } = useDataContext()
  const itemsInCart = data?.cart.length >= 1 && data.cart.length

  const [isExpandCart, setIsExpandCart] = useState(false)

  useEffect(() => {
    if (!itemsInCart) {
      setIsExpandCart(false)
    }
  }, [itemsInCart])

  function handleExpandCart() {
    if (itemsInCart) {
      setIsExpandCart(!isExpandCart)
    } else {
      setIsExpandCart(false)
    }
  }

  const handleCollapseCart = () => {
    setIsExpandCart(false)
  }

  return (
    <>
      <header className="fixed z-50 flex h-[6.5rem] w-screen select-none items-center justify-between bg-background p-8 md:px-40">
        <button className="w-20" onClick={() => handleChangeRouter('home')}>
          <img
            src={logoSVG}
            alt="Copo com um foguete escrito ao lado, 'Coffee Delivey"
          />
        </button>

        <nav className="flex gap-3">
          <ShowLocation />

          <section className="relative flex flex-col items-center justify-center">
            <button
              className="flex size-[2.375rem] items-center justify-center rounded-md bg-yellow-light"
              onClick={handleExpandCart}
            >
              <ShoppingCart
                size={22}
                weight="fill"
                color="var(--yellow-dark)"
              />
              {itemsInCart && (
                <div className="absolute right-[-0.438rem] top-[-0.438rem] flex size-5 items-center justify-center rounded-full bg-yellow-dark">
                  <p className="text-text-xs leading-[0px] text-white">
                    {itemsInCart}
                  </p>
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-yellow opacity-75"></span>
                </div>
              )}
            </button>
          </section>
        </nav>
        {isExpandCart && (
          <CartDropDown handleCollapseCart={handleCollapseCart} />
        )}
      </header>
      <div className="h-[6.5rem]" />
    </>
  )
}
