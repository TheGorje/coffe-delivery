import { MapPinLine } from 'phosphor-react'
import { CheckoutAddressForm } from './Components/CheckoutAddressForm'
import { PaymentMethod } from './Components/PaymentMethod'
import { useFormContext } from '../../Contexts/CheckoutFormContext'

export function Checkount() {
  const { formData, validateFormCheckout } = useFormContext()

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (validateFormCheckout(formData)) {
      alert('Formulário válido, prosseguir com o pedido:')
    } else {
      alert('Formulário inválido, por favor corrija os erros.')
    }
  }

  return (
    <div className="flex flex-row gap-8 p-6 lg:flex-col lg:px-40">
      <section className="flex flex-col gap-[0.938rem]">
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

      {/* <section>
        <h1>Cafés selecinoados</h1>
      </section> */}
      <button onClick={handleSubmit}>teste</button>
    </div>
  )
}
