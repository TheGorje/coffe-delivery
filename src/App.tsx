import { Header } from './Components/Header'
import './Global.css'
import { DefaultLayout } from './Layout/Default'

export function App() {
  return (
    <div className="w-full max-w-screen-2xl place-self-center">
      <Header />
      <div className="h-[6.5rem]" />
      <DefaultLayout /> {/* gerencias as rotas */}
    </div>
  )
}
