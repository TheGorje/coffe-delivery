import { ShoppingCart } from 'phosphor-react'
import { ListCoffeesProps } from '../DATA'
interface CoffeeCardProps {
  CoffeeData: ListCoffeesProps
}

export function CoffeeCard({ CoffeeData }: CoffeeCardProps) {
  // eslint-disable-next-line no-console
  console.log(CoffeeData)

  function formatPrice(price: number): string {
    return price.toFixed(2).replace('.', ',')
  }

  return (
    <div className="flex h-[19.375rem] w-64 select-none flex-col justify-between gap-4 rounded-md rounded-bl-[2.25rem] rounded-tr-[2.25rem] bg-base-card p-6">
      <div className="flex flex-col items-center gap-3">
        <img
          src={CoffeeData.image}
          alt="Imagem na pespecitiva de cima do café especificado"
          className="-mt-11 size-[7.5rem]"
        />
        <div className="flex gap-1">
          {CoffeeData.tags.map((tag, index) => {
            return (
              <span
                key={tag}
                className="rounded-full bg-yellow-light px-2 py-1 text-center text-tag uppercase text-yellow-dark"
              >
                {CoffeeData.tags[index]}
              </span>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2 text-center">
        <h3 className="select-text font-title text-title-s text-base-subtitle">
          {CoffeeData.name}
        </h3>
        <p className="select-text text-text-s text-base-label">
          {CoffeeData.description}
        </p>
      </div>

      <section className="flex items-center justify-between">
        <div className="text-text-s text-base-text">
          {/* eslint-disable-next-line quotes, prettier/prettier */}
          R${" "}<span className="font-title text-title-m">{formatPrice(CoffeeData.price)}</span>
        </div>

        <div className="flex gap-4">
          <div className="flex h-8 w-[4.5rem] items-center  rounded-md bg-base-button p-2">
            <button className="w-full text-text-m text-purple transition-colors duration-200 hover:text-purple-dark">
              –
            </button>
            <span className="w-full text-center text-text-m">00</span>
            <button className="w-full text-text-m text-purple transition-colors duration-200 hover:text-purple-dark">
              +
            </button>
          </div>

          <button className="flex size-[2.375rem] items-center justify-center rounded-lg bg-purple-dark transition-colors duration-200 hover:bg-purple">
            <ShoppingCart weight="fill" color="var(--base-card)" size={22} />
          </button>
        </div>
      </section>
    </div>
  )
}
