import { CoffeeCard } from './CoffeeCard'
import { allTags, ListCoffees, ListCoffeesProps } from '../DATA'

export function CoffeeList() {
  const countAllTags = allTags.length

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
                className="rounded-full border border-yellow px-3 py-1.5 text-tag uppercase text-yellow-dark transition-colors duration-200 hover:bg-yellow-light"
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
        {ListCoffees.map((Coffee: ListCoffeesProps) => {
          return <CoffeeCard key={Coffee.id} CoffeeData={Coffee} />
        })}
      </div>
    </section>
  )
}
