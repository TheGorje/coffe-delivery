import { ShoppingCart } from 'phosphor-react'
import { ListCoffeesProps } from '../DATA'
import { useState } from 'react'

export interface CoffeeCardProps {
  coffeeData: ListCoffeesProps
  handleSetQuantity: (coffeeData: ListCoffeesProps, quantity: number) => void
}

export function CoffeeCard({ coffeeData, handleSetQuantity }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  // SET_QUANTITY
  function formatPrice(price: number): string {
    return price.toFixed(2).replace('.', ',')
  }

  function handleIncreaseQuantity() {
    setQuantity((prev) => prev + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity === 1) {
      return null
    }

    setQuantity((prev) => prev - 1)
  }

  return (
    <div className="flex h-[19.375rem] w-64 select-none flex-col justify-between gap-4 rounded-md rounded-bl-[2.25rem] rounded-tr-[2.25rem] bg-base-card p-6">
      <div className="flex flex-col items-center gap-3">
        <img
          src={coffeeData.image}
          alt="Imagem na pespecitiva de cima do café especificado"
          className="-mt-11 size-[7.5rem]"
        />
        <div className="flex gap-1">
          {coffeeData.tags.map((tag, index) => {
            return (
              <span
                key={tag}
                className="rounded-full bg-yellow-light px-2 py-1 text-center text-tag uppercase text-yellow-dark"
              >
                {coffeeData.tags[index]}
              </span>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2 text-center">
        <h3 className="select-text font-title text-title-s text-base-subtitle">
          {coffeeData.name}
        </h3>
        <p className="select-text text-text-s text-base-label">
          {coffeeData.description}
        </p>
      </div>

      <section className="flex items-center justify-between">
        <div className="text-text-s text-base-text">
          {/* eslint-disable-next-line quotes, prettier/prettier */}
          R${" "}<span className="font-title text-title-m">{formatPrice(coffeeData.price)}</span>
        </div>

        <div className="flex gap-4">
          <div className="flex h-8 w-[4.5rem] items-center  rounded-md bg-base-button p-2">
            <button
              className="w-full text-text-m text-purple transition-colors duration-200 hover:text-purple-dark"
              onClick={handleDecreaseQuantity}
            >
              –
            </button>
            <span className="w-full text-center text-text-m">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="w-full text-text-m text-purple transition-colors duration-200 hover:text-purple-dark"
            >
              +
            </button>
          </div>

          <button
            onClick={() => handleSetQuantity(coffeeData, quantity)}
            className="flex size-[2.375rem] items-center justify-center rounded-lg bg-purple-dark transition-colors duration-200 hover:bg-purple"
          >
            <ShoppingCart weight="fill" color="var(--base-card)" size={22} />
          </button>
        </div>
      </section>
    </div>
  )
}
