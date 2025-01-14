import { Check, House, MapPinLine } from 'phosphor-react'
import { CheckoutAddressForm } from './Components/CheckoutAddressForm'
import { PaymentMethod } from './Components/PaymentMethod'
import { useFormContext } from '../../Contexts/CheckoutFormContext'
import { CartCoffeeList } from '../../Components/CartDetails/CartCoffeeList'
import { CartCoffeeTotal } from '../../Components/CartDetails/CartCoffeeTotal'
import { useDataContext } from '../../Contexts/LocalStorageContext'
import { RouterContext } from '../../Contexts/RouterContext'
import { useContext } from 'react'
import { useCart } from '../../Contexts/CartContext'

export function Checkout() {
  const { removeAllItems } = useCart()
  const { formData, validateFormCheckout } = useFormContext()
  const { handleChangeRouter } = useContext(RouterContext)

  const { data } = useDataContext()
  const itemsInCart = data.cart

  const handleSubmit = () => {
    if (validateFormCheckout(formData)) {
      handleChangeRouter('success')
      removeAllItems()
    }
  }

  const handleGoBack = () => {
    handleChangeRouter('home')
  }

  return (
    <div className="flex select-none flex-col items-stretch justify-center gap-8 p-6 lg:px-40 xl:flex-row xl:items-start">
      <section className="flex w-full max-w-6xl flex-col gap-[0.938rem]">
        <h1 className="font-title text-title-xs text-base-subtitle">
          Complete seu pedido
        </h1>
        <section className="flex flex-col gap-8 rounded-md bg-base-card p-10">
          <div className="flex gap-2">
            <MapPinLine size={22} color="var(--yellow-dark)" />
            <div className="flex flex-col gap-0.5">
              <p className="text-text-m text-base-subtitle">
                Endereço de Entrega
              </p>
              <p className="text-text-s text-base-text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>

          <CheckoutAddressForm />
        </section>

        <PaymentMethod />
      </section>

      <section className="flex flex-col gap-[0.938rem]">
        <h1 className="font-title text-title-xs text-base-subtitle">
          Complete seu pedido
        </h1>
        <div className="relative z-30 rounded-md rounded-bl-[2.25rem] rounded-tr-[2.25rem] bg-base-card p-10">
          {itemsInCart?.length >= 1 ? (
            <>
              <main className="flex flex-col gap-6">
                <div className="p-4">
                  <section className="flex flex-col gap-6">
                    <CartCoffeeList />
                  </section>
                </div>
                <CartCoffeeTotal />
              </main>
              <button
                onClick={handleSubmit}
                className="mt-6 flex h-[2.875rem] w-full items-center justify-center gap-2 rounded bg-yellow text-center transition-colors duration-200 hover:bg-yellow-dark hover:shadow-none"
              >
                <Check size={22} weight="fill" color="var(--white)" />
                <p className="text-text-m-bold text-white">Confrimar pedido</p>
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-8 p-4 text-center">
              <h2 className="text-text-l-bold font-bold">
                Seu carrinho está vazio
              </h2>
              <p className="text-lg">
                Volte para a página inicial e escolha alguns itens para
                adicionar ao seu carrinho.
              </p>
              <button
                onClick={handleGoBack}
                className="flex h-[2.875rem] w-1/2 items-center justify-center gap-2 rounded bg-yellow text-center transition-colors duration-200 hover:bg-yellow-dark hover:shadow-none"
              >
                <House size={22} weight="fill" color="var(--white)" />
                <p className="text-text-m-bold text-white">
                  Voltar para a Página Inicial
                </p>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
