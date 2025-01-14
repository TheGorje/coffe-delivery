import { useEffect, useState } from 'react'
import { useCart } from '../../Contexts/CartContext'
import { useDataContext } from '../../Contexts/LocalStorageContext'
import { ListCoffeesProps } from '../../DATA'
import { Trash } from 'phosphor-react'
import { convertToCurrency } from '../../SCRIPTS'

export function CartCoffeeList() {
  const { data } = useDataContext()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { incrementItemQuantity, decrementItemQuantity, removeItem } = useCart()
  const [cartTotal, setCartTotal] = useState({
    totalItems: 0,
    deliveryFee: 5.0, // valor fictício da entrega
    total: 0,
  })

  useEffect(() => {
    if (data.cart && data.cart.length >= 1) {
      const totalItems = data.cart.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      )
      const total = totalItems + cartTotal.deliveryFee

      setCartTotal({ ...cartTotal, totalItems, total })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.cart])

  const itemsInCart = data.cart

  function handleDecreaseQuantity(coffeData: ListCoffeesProps) {
    decrementItemQuantity(coffeData.id)
  }

  function handleIncreaseQuantity(coffeData: ListCoffeesProps) {
    incrementItemQuantity(coffeData.id)
  }

  function handleRemoveitem(coffeeData: ListCoffeesProps) {
    removeItem(coffeeData.id)
  }

  return (
    <section className="flex w-full flex-col gap-6 xl:w-[23rem]">
      {itemsInCart.map((item) => {
        const coffe = item.coffeeData

        return (
          <div key={item.coffeeData.id}>
            <div className="flex justify-between gap-6">
              <div className="flex gap-5">
                <img
                  src={coffe.image}
                  alt="imagem de cima do café especificado"
                  className="size-16"
                />

                <div className="flex flex-col gap-2">
                  <p className="select-text">{coffe.name}</p>
                  <section className="flex gap-2 ">
                    <div className="flex h-8 w-[4.5rem] items-center rounded-md bg-base-button p-2">
                      <button
                        className="w-full text-text-m text-purple transition-colors duration-200 hover:text-purple-dark"
                        onClick={() => handleDecreaseQuantity(coffe)}
                      >
                        –
                      </button>
                      <span className="w-full text-center text-text-m">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncreaseQuantity(coffe)}
                        className="w-full text-text-m text-purple transition-colors duration-200 hover:text-purple-dark"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemoveitem(coffe)}
                      className="flex h-8 gap-1 rounded-md bg-base-button  p-2 duration-0 hover:bg-base-hover  active:border active:border-purple active:bg-purple-light active:shadow-none"
                    >
                      <Trash size={16} color="var(--purple)" />
                      <p className="text-text-xs font-normal uppercase text-base-text">
                        remover
                      </p>
                    </button>
                  </section>
                </div>
              </div>

              <div className="text-text-m-bold text-base-text">
                {convertToCurrency(coffe.price)}
              </div>
            </div>
            <mark className="mt-6 block h-px min-h-px w-full bg-base-button" />
          </div>
        )
      })}
    </section>
  )
}
