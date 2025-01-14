import { CoffeeCard } from './CoffeeCard'
import { allTags, ListCoffees, ListCoffeesProps } from '../DATA'
import { useCart } from '../Contexts/CartContext'
import { useState } from 'react'

export function CoffeeList() {
  const countAllTags = allTags.length
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setQuantity } = useCart()
  const [filterTag, setFilterTag] = useState('')
  const filteredList = ListCoffees.filter((item) =>
    item.tags.includes(filterTag)
  )

  function handleSetQuantity(
    coffeeData: ListCoffeesProps,
    quantity: number = 1
  ) {
    setQuantity(coffeeData, quantity)
  }

  function handleFilterSetTag(tag: string) {
    return filterTag === tag ? setFilterTag('') : setFilterTag(tag)
  }

  return (
    <section className="w-full p-6 lg:px-40">
      <div
        className={`flex flex-col items-center justify-between lg:flex-row ${countAllTags >= 8 && 'flex-col'} gap-2`}
      >
        <h2 className="font-title text-title-l font-bold text-base-subtitle">
          Nossos Cafés
        </h2>
        <div className="flex flex-nowrap justify-center gap-2">
          {allTags.map((item) => {
            return (
              <button
                key={item}
                onClick={() => handleFilterSetTag(item)}
                className="rounded-full border border-yellow px-3 py-1.5 text-tag uppercase text-yellow-dark transition-colors duration-200 hover:bg-yellow-light"
                style={{
                  backgroundColor:
                    filterTag === item ? 'var(--yellow-light)' : undefined,
                  boxShadow: filterTag === item ? 'none' : undefined,
                }}
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>

      <div
        className="mt-[3.375rem] grid justify-center gap-8"
        style={{ gridTemplateColumns: 'repeat(auto-fill, 256px)' }}
      >
        {filterTag.length >= 1
          ? filteredList.map((Coffee: ListCoffeesProps) => {
              return (
                <CoffeeCard
                  key={Coffee.id}
                  coffeeData={Coffee}
                  handleSetQuantity={handleSetQuantity}
                />
              )
            })
          : ListCoffees.map((Coffee: ListCoffeesProps) => {
              return (
                <CoffeeCard
                  key={Coffee.id}
                  coffeeData={Coffee}
                  handleSetQuantity={handleSetQuantity}
                />
              )
            })}
      </div>
    </section>
  )
}
