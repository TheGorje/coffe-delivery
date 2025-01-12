import { CoffeeList } from '../../Components/CoffeeList'
import { IntroSection } from '../../Components/IntroSection'

export function Home() {
  return (
    <div className="flex flex-col">
      <IntroSection />
      <CoffeeList />
    </div>
  )
}
