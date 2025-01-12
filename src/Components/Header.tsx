import { MapPin, ShoppingCart } from 'phosphor-react'
import logoSVG from '../assets/Logo.svg'

export function Header() {
  return (
    <>
      <header className="fixed z-50 flex h-[6.5rem] w-screen items-center justify-between bg-background p-8 md:px-40">
        <button className="w-20">
          <img
            src={logoSVG}
            alt="Copo com um foguete escrito ao lado, 'Coffee Delivey"
          />
        </button>

        <nav className="flex gap-3">
          <section>
            <button className="flex items-center gap-1 whitespace-nowrap rounded-md bg-purple-light p-2">
              <MapPin weight="fill" color="var(--purple)" size={22} />
              <p className="font-title text-text-s text-purple-dark">
                Porto Alegre, RS
              </p>
            </button>
          </section>
          <section>
            <button className="relative flex size-[2.375rem] items-center justify-center rounded-md bg-yellow-light">
              <ShoppingCart
                size={22}
                weight="fill"
                color="var(--yellow-dark)"
              />
              <div className="absolute right-[-0.438rem] top-[-0.438rem] flex size-5 items-center justify-center rounded-full bg-yellow-dark">
                <p className="text-text-xs leading-[0px] text-white">3</p>
              </div>
            </button>
          </section>
        </nav>
      </header>
      <div className="h-[6.5rem]" />
    </>
  )
}
