import { CreditCard, CurrencyDollar, Bank, Money } from 'phosphor-react'
import { useEffect, useState } from 'react'
import {
  type PaymentMethod,
  useDataContext,
} from '../../../Contexts/LocalStorageContext'

export function PaymentMethod() {
  const { data, setPayment } = useDataContext()

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    data.paymentMethod || 'dinheiro' // metodo de pagamento padrao
  )

  const handleUpdatePaymentMethod = (method: PaymentMethod) => {
    setPaymentMethod(method)
  }

  useEffect(() => {
    if (paymentMethod === data.paymentMethod) {
      return
    }

    return setPayment(paymentMethod)
  }, [data.paymentMethod, paymentMethod, setPayment])

  return (
    <section className="flex flex-col gap-8 rounded-md bg-base-card p-10">
      <div className="flex flex-col gap-8">
        <section>
          <div className="flex gap-2">
            <CurrencyDollar size={22} color="var(--purple)" />
            <div className="flex flex-col gap-0.5">
              <p className="text-text-m text-base-subtitle">Pagamento</p>
              <p className="text-text-s text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
        </section>

        <section className="flex gap-3">
          <button
            onClick={() => handleUpdatePaymentMethod('cartão de crédito')}
            className={`${paymentMethod === 'cartão de crédito' && 'border border-purple bg-purple-light focus-within:shadow-none hover:bg-purple-light'} flex h-12 w-full items-center justify-start gap-[0.938rem] rounded bg-base-button px-4 py-[1.094rem] transition-colors duration-150 hover:bg-base-hover`}
          >
            <CreditCard size={16} color="var(--purple)" />
            <p className="text-button-m uppercase text-base-text">
              CARTÃO DE CRÉDITO
            </p>
          </button>

          <button
            onClick={() => handleUpdatePaymentMethod('cartão de debito')}
            className={`${paymentMethod === 'cartão de debito' && 'border border-purple bg-purple-light focus-within:shadow-none hover:bg-purple-light'} flex h-12 w-full items-center justify-start gap-[0.938rem] rounded bg-base-button px-4 py-[1.094rem] transition-colors duration-150 hover:bg-base-hover`}
          >
            <Bank size={16} color="var(--purple)" />
            <p className="text-button-m uppercase text-base-text">
              CARTÃO DE DEBITO
            </p>
          </button>

          <button
            onClick={() => handleUpdatePaymentMethod('dinheiro')}
            className={`${paymentMethod === 'dinheiro' && 'border border-purple bg-purple-light focus-within:shadow-none hover:bg-purple-light'} flex h-12 w-full items-center justify-start gap-[0.938rem] rounded bg-base-button px-4 py-[1.094rem] transition-colors duration-150 hover:bg-base-hover`}
          >
            <Money size={16} color="var(--purple)" />
            <p className="text-button-m uppercase text-base-text">DINHEIRO</p>
          </button>
        </section>
      </div>
    </section>
  )
}
