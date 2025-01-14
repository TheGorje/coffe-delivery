/* eslint-disable react-hooks/exhaustive-deps */
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { OrderConfirmationIllustration } from './Components/OrderConfirmationIllustration'
import { useDataContext } from '../../Contexts/LocalStorageContext'

interface ItemSectionProps {
  color: string
  icon: React.ReactNode
}

export function Success() {
  const { data } = useDataContext()
  const address = data?.address

  function ItemOrderIcon({ color, icon }: ItemSectionProps) {
    return (
      <div className="flex items-center gap-3">
        <div
          style={{ backgroundColor: color }}
          className="flex size-8 items-center justify-center rounded-full"
        >
          {icon}
        </div>
      </div>
    )
  }

  return (
    <div className="flex select-none flex-col items-center justify-center gap-[6.375rem] p-6 lg:p-40 2xl:flex-row 2xl:items-end">
      <section className="flex flex-col gap-10">
        <div>
          <h1 className="font-title text-title-l text-yellow-dark">
            Uhu! Pedido confirmado
          </h1>
          <h4 className="text-text-l text-base-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </h4>
        </div>

        <div className="border-gradient">
          <div className="relative z-10 flex flex-col gap-8 rounded rounded-bl-[2.25rem] rounded-tr-[2.25rem] bg-background p-10">
            <div className="flex gap-3">
              <ItemOrderIcon
                color="var(--purple)"
                icon={<MapPin size={16} weight="fill" color="var(--white)" />}
              />
              <div className="flex select-text flex-col text-base-text">
                <p>
                  Entrega em{' '}
                  <strong>
                    {address.rua}, {address.numero}
                  </strong>
                </p>
                <p>
                  {' '}
                  {address.cidade} - {address.bairro}, {address.uf}
                </p>
              </div>
            </div>

            <div className="flex gap-3 text-base-text">
              <ItemOrderIcon
                color="var(--yellow)"
                icon={<Clock size={16} weight="fill" color="var(--white)" />}
              />
              <div className="flex select-text flex-col text-base-text">
                <p>Previsão de entrega</p>
                <strong> 20 min - 30 min</strong>
              </div>
            </div>

            <div className="flex gap-3">
              <ItemOrderIcon
                color="var(--yellow-dark)"
                icon={
                  <CurrencyDollar
                    size={16}
                    weight="fill"
                    color="var(--white)"
                  />
                }
              />
              <div className="flex select-text flex-col">
                <p>Pagamento na entrega</p>
                <strong className="capitalize">{data.paymentMethod}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <OrderConfirmationIllustration />
      </section>
    </div>
  )
}
