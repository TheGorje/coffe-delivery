import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import Background from '../assets/IntroSectionBackground.svg'
import Coffe from '../assets/IntroSectionCoffe.svg'

interface ItemSectionProps {
  text: string
  color: string
  icon: React.ReactNode
}

export function IntroSection() {
  function ItemSection({ text, color, icon }: ItemSectionProps) {
    return (
      <div className="flex items-center gap-3">
        <div
          style={{ backgroundColor: color }}
          className="flex size-8 items-center justify-center rounded-full"
        >
          {icon}
        </div>
        <p className="text-start text-text-m text-base-text">{text}</p>
      </div>
    )
  }

  return (
    <div className="relative h-[34rem]">
      <img
        src={Background}
        alt="Background minimalist"
        className="hue-rotation-infinite absolute inset-0 -z-10 size-full object-cover opacity-100"
      />
      <main className="flex size-full items-center">
        <section className="flex size-full flex-col items-center justify-evenly px-4 text-center md:px-16 xl:items-start xl:text-justify">
          <div>
            <h1 className="font-title text-title-l text-base-title smaller:text-title-xl">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <br />
            <h6 className="text-text-l text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h6>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row md:gap-10">
            <section className="flex flex-col gap-5">
              <ItemSection
                text="Compra simples e segura"
                color="var(--yellow-dark)"
                icon={
                  <ShoppingCart size={16} weight="fill" color="var(--white)" />
                }
              />
              <ItemSection
                text="Entrega rápida e rastreada"
                color="var(--yellow)"
                icon={<Timer size={16} weight="fill" color="var(--white)" />}
              />
            </section>
            <section className="flex flex-col gap-5">
              <ItemSection
                text="Embalagem mantém o café intacto"
                color="var(--base-text)"
                icon={<Package size={16} weight="fill" color="var(--white)" />}
              />
              <ItemSection
                text="O café chega fresquinho até você"
                color="var(--purple)"
                icon={<Coffee size={16} weight="fill" color="var(--white)" />}
              />
            </section>
          </div>
        </section>

        <section className="hidden size-full items-center justify-start xl:flex">
          <img
            src={Coffe}
            alt="Cafe com um fundo amarelo"
            className="max-w-2xl lg:w-9/12"
          />
        </section>
      </main>
    </div>
  )
}
