import { ChangeEvent, FocusEvent } from 'react'
import { useFormContext } from '../../../Contexts/CheckoutFormContext'

export function CheckoutAddressForm() {
  const { formData, setFormData, errors } = useFormContext()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCepBlur = async (e: FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value

    if (cep && cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()

        if (!data.erro) {
          setFormData((prevState) => ({
            ...prevState,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            uf: data.uf,
          }))
        }
      } catch (error) {
        console.error('Erro na requisição:', error)
      }
    }
  }

  return (
    <form className="flex flex-col gap-4">
      <div className="relative">
        <input
          type="text"
          id="cep"
          name="cep"
          placeholder="CEP"
          autoComplete="off"
          value={formData.cep || ''}
          onChange={handleChange}
          onBlur={handleCepBlur}
          className={`${errors.cep && 'border-red-500'} rounded border border-base-button bg-base-input p-3 text-text-s text-base-text`}
        />
      </div>

      <div className="w-full">
        <input
          type="text"
          id="rua"
          name="rua"
          placeholder="Rua"
          autoComplete="off"
          value={formData.rua || ''}
          onChange={handleChange}
          className={`${errors.rua && 'border-red-500'} w-full rounded border border-base-button bg-base-input p-3 text-text-s text-base-text`}
        />
      </div>

      <div className="flex gap-3">
        <div>
          <input
            type="text"
            id="numero"
            name="numero"
            placeholder="Número"
            autoComplete="off"
            value={formData.numero || ''}
            onChange={handleChange}
            className={`${errors.numero && 'border-red-500'} rounded border border-base-button bg-base-input p-3 text-text-s text-base-text`}
          />
        </div>
        <div className="relative w-full">
          <label
            htmlFor="complemento"
            className="absolute right-0 flex h-full items-center p-3 py-[0.813rem] font-text text-text-xs font-normal italic text-base-label"
          >
            Opcional
          </label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            placeholder="Complemento"
            autoComplete="off"
            value={formData.complemento || ''}
            onChange={handleChange}
            className={`${errors.complemento && 'border-red-500'} w-full rounded border border-base-button bg-base-input p-3 text-text-s text-base-text`}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <div>
          <input
            type="text"
            id="bairro"
            name="bairro"
            placeholder="Bairro"
            autoComplete="off"
            value={formData.bairro || ''}
            onChange={handleChange}
            className={`${errors.bairro && 'border-red-500'} rounded border border-base-button bg-base-input p-3 text-text-s text-base-text`}
          />
        </div>
        <div>
          <input
            type="text"
            id="cidade"
            name="cidade"
            placeholder="Cidade"
            autoComplete="off"
            value={formData.cidade || ''}
            onChange={handleChange}
            className={`${errors.cidade && 'border-red-500'} rounded border border-base-button bg-base-input p-3 text-text-s text-base-text`}
          />
        </div>
        <div>
          <input
            type="text"
            id="uf"
            name="uf"
            placeholder="UF"
            autoComplete="off"
            value={formData.uf || ''}
            onChange={handleChange}
            className={`${errors.uf && 'border-red-500'} rounded border border-base-button bg-base-input p-3 text-text-s uppercase text-base-text`}
          />
        </div>
      </div>
    </form>
  )
}
