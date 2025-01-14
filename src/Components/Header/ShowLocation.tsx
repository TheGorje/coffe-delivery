/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { MapPin } from 'phosphor-react'
import { useDataContext } from '../../Contexts/LocalStorageContext'

export function ShowLocation() {
  const { data, setAddress } = useDataContext()

  const [location, setLocation] = useState(() => {
    return data?.address?.cidade
      ? `${data.address.cidade}, ${data.address.uf}`
      : 'Localização'
  }) // Valor padrão

  const handleGetLocation = () => {
    if (data?.address?.cidade) {
      return null
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          fetchLocation()
        },
        (error) => {
          console.error('Erro ao obter localização:', error)
        }
      )
    } else {
      console.error('Geolocalização não é suportado')
    }
  }

  const fetchLocation = async () => {
    try {
      const response = await fetch('https://geolocation-db.com/json/')
      const geolocation = await response.json()
      const { city, state } = geolocation

      const responseIBGE = await fetch(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      )
      const allStates = await responseIBGE.json()
      const stateCode = allStates.find(
        (s: { nome: unknown }) => s.nome === state
      )?.sigla

      setLocation(`${city}, ${stateCode}`)
      setAddress({
        ...data.address,
        cidade: city,
        uf: stateCode, // Usando a sigla do estado
      })
    } catch (error) {
      console.error('Erro ao buscar localização:', error)
    }
  }

  useEffect(() => {
    if (data?.address?.cidade && data?.address?.uf) {
      setLocation(`${data.address.cidade}, ${data.address.uf}`)
    }
  }, [data.address])

  return (
    <section>
      <button
        className="flex items-center gap-1 whitespace-nowrap rounded-md bg-purple-light p-2"
        onClick={handleGetLocation}
      >
        <MapPin weight="fill" color="var(--purple)" size={22} />
        <p className="font-title text-text-s text-purple-dark">{location}</p>
      </button>
    </section>
  )
}
