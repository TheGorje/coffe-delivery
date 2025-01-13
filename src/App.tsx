import { Header } from './Components/Header/Header'
import { FormProvider } from './Contexts/CheckoutFormContext'
import { DataProvider } from './Contexts/LocalStorageContext'
import { RouterContextProvider } from './Contexts/RouterContext'
import './Global.css'
import { DefaultLayout } from './Layout/Default'

export function App() {
  return (
    <div className="flex w-full flex-col">
      <DataProvider>
        <RouterContextProvider>
          <FormProvider>
            <Header />
            <DefaultLayout /> {/* gerencias as rotas */}
          </FormProvider>
        </RouterContextProvider>
      </DataProvider>
    </div>
  )
}
