import { useEffect, useState } from 'react'
import { useDataContext } from '../../Contexts/LocalStorageContext'
import { convertToCurrency } from '../../SCRIPTS'

export function CartCoffeeTotal() {
  const { data } = useDataContext()

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

  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <p className="text-text-s text-base-text">Total de itens</p>
        <p className="text-text-s text-base-text">
          {convertToCurrency(cartTotal.totalItems)}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-text-s text-base-text">Entrega</p>
        <p className="text-text-s text-base-text">
          {convertToCurrency(cartTotal.deliveryFee)}
        </p>
      </div>
      <div className="flex justify-between">
        <h2 className="text-text-l-bold text-base-subtitle">Total</h2>
        <h2 className="text-text-l-bold text-base-subtitle">
          {convertToCurrency(cartTotal.total)}
        </h2>
      </div>
    </section>
  )
}
