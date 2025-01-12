import { Header } from './Components/Header'
import { RouterContextProvider } from './Contexts/RouterContext'
import './Global.css'
import { DefaultLayout } from './Layout/Default'

export function App() {
  return (
    <div className="w-full max-w-screen-2xl place-self-center">
      <Header />

      <RouterContextProvider>
        <DefaultLayout /> {/* gerencias as rotas */}
      </RouterContextProvider>
    </div>
  )
}
