import React, { createContext, useContext, useState, ReactNode } from 'react'
import * as z from 'zod'
import { DataContext, DataContextType, useDataContext } from './LocalStorageContext'

// Definindo o schema Zod
const addressSchema = z.object({
  cep: z.string().min(8, { message: 'CEP deve ter 8 dígitos' }).max(8),
  rua: z.string().nonempty('Rua é obrigatória'),
  numero: z.string().nonempty('Número é obrigatório'),
  complemento: z.string().optional(),
  bairro: z.string().nonempty('Bairro é obrigatório'),
  cidade: z.string().nonempty('Cidade é obrigatória'),
  uf: z.string().min(2, { message: 'UF deve ter 2 dígitos' }).max(2),
})

type AddressFormData = z.infer<typeof addressSchema>
type FormContextType = {
  formData: AddressFormData
  setFormData: React.Dispatch<React.SetStateAction<AddressFormData>>
  errors: Record<string, string>
  validateFormCheckout: (data: AddressFormData) => boolean
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: ReactNode }) {
  const { data, setAddress } = useDataContext()

  const addressSaveData = data.address // const savedData = localStorage.getItem('addressFormData')

  const [formData, setFormData] = useState<AddressFormData>(() => {
    return addressSaveData || ({} as Partial<AddressFormData>)
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateFormCheckout = (data: AddressFormData): boolean => {
    try {
      addressSchema.parse(data)
      setErrors({})
      // atualiza os dados de endereço e automaticamente salvando no localStorage
      setAddress(formData)

      return true
    } catch (e) {
      if (e instanceof z.ZodError) {
        const formattedErrors = e.errors.reduce(
          (acc, err) => {
            if (err.path.length > 0 && typeof err.path[0] === 'string') {
              acc[err.path[0]] = err.message
            }

            return acc
          },
          {} as Record<string, string>
        )

        setErrors(formattedErrors)
      }

      return false
    }
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        errors,
        validateFormCheckout,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }

  return context
}
