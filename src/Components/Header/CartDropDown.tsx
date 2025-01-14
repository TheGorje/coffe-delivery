import { useContext } from 'react'
import { RouterContext } from '../../Contexts/RouterContext'
import { useDataContext } from '../../Contexts/LocalStorageContext'
import { CartCoffeeList } from '../CartDetails/CartCoffeeList'
import { CartCoffeeTotal } from '../CartDetails/CartCoffeeTotal'
import { ShoppingCart } from 'phosphor-react'

interface HeaderCarProps {
  handleCollapseCart: () => void
}

export function CartDropDown({ handleCollapseCart }: HeaderCarProps) {
  const context = useContext(RouterContext)
  const { data } = useDataContext()
  const itemsInCart = data.cart

  const { handleChangeRouter } = context

  function handleChangeRouterAndCollapseCart() {
    handleChangeRouter('checkout')
    handleCollapseCart()
  }

  return (
    <div className="absolute right-0 top-20 p-10">
      {/* <div
        className="animation-in-opacity fixed left-0 top-0 z-20 size-full bg-black opacity-20"
        onClick={handleCollapseCart}
      /> */}

      <div className="animation-slideDown relative z-30 rounded-md rounded-bl-[2.25rem] rounded-tr-[2.25rem] bg-base-card p-10 shadow-lg">
        <div>
          {itemsInCart?.length >= 1 ? (
            <>
              <main className="flex flex-col gap-6">
                <div className="max-h-96 overflow-auto p-4">
                  <section className="flex flex-col gap-6">
                    <CartCoffeeList />
                  </section>
                </div>
                <CartCoffeeTotal />
              </main>
              <button
                onClick={handleChangeRouterAndCollapseCart}
                className="mt-6 flex h-[2.875rem] w-full items-center justify-center gap-2 rounded bg-yellow text-center transition-colors duration-200 hover:bg-yellow-dark hover:shadow-none"
              >
                <ShoppingCart size={22} weight="fill" color="var(--white)" />
                <p className="text-text-m-bold text-white">
                  ir para o carrinho
                </p>
              </button>
            </>
          ) : (
            <div>
              <p>Carrinho vázio</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
