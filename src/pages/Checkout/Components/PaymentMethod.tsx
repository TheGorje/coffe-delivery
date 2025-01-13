import { CreditCard, CurrencyDollar, Bank, Money } from 'phosphor-react'
import { useState } from 'react'
interface PaymentMethodProps {
  paymentMethod: 'cartão de crédito' | 'cartão de debito' | 'dinheiro'
}

export function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodProps>({
    paymentMethod: 'dinheiro', // metodo de pagamento padrao
  })

  const handleUpdatePaymentMethod = (
    method: PaymentMethodProps['paymentMethod']
  ) => {
    setPaymentMethod({ paymentMethod: method })
  }

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
            className={`${paymentMethod.paymentMethod === 'cartão de crédito' && 'border border-purple bg-purple-light focus-within:shadow-none hover:bg-purple-light'} flex h-12 w-full items-center justify-start gap-[0.938rem] rounded bg-base-button px-4 py-[1.094rem] text-button-m uppercase text-base-text transition-colors duration-150 hover:bg-base-hover`}
          >
            <CreditCard size={16} color="var(--purple)" />
            CARTÃO DE CRÉDITO
          </button>

          <button
            onClick={() => handleUpdatePaymentMethod('cartão de debito')}
            className={`${paymentMethod.paymentMethod === 'cartão de debito' && 'border border-purple bg-purple-light focus-within:shadow-none hover:bg-purple-light'} flex h-12 w-full items-center justify-start gap-[0.938rem] rounded bg-base-button px-4 py-[1.094rem] text-button-m uppercase text-base-text transition-colors duration-150 hover:bg-base-hover`}
          >
            <Bank size={16} color="var(--purple)" />
            CARTÃO DE DEBITO
          </button>

          <button
            onClick={() => handleUpdatePaymentMethod('dinheiro')}
            className={`${paymentMethod.paymentMethod === 'dinheiro' && 'border border-purple bg-purple-light focus-within:shadow-none hover:bg-purple-light'} flex h-12 w-full items-center justify-start gap-[0.938rem] rounded bg-base-button px-4 py-[1.094rem] text-button-m uppercase text-base-text transition-colors duration-150 hover:bg-base-hover`}
          >
            <Money size={16} color="var(--purple)" />
            DINHEIRO
          </button>
        </section>
      </div>
    </section>
  )
}
