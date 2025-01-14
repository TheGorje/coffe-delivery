import ExpressoTradicional from '../src/assets/Coffees/Expresso_Tradicional.svg'
import ExpressoAmericano from '../src/assets/Coffees/Expresso_Americano.svg'
import ExpressoCremoso from '../src/assets/Coffees/Expresso_Cremoso.svg'
import ExpressoGelado from '../src/assets/Coffees/Expresso_Gelado.svg'
import CafeComLeite from '../src/assets/Coffees/Café_com_Leite.svg'
import Latte from '../src/assets/Coffees/Latte.svg'
import Capuccino from '../src/assets/Coffees/Capuccino.svg'
import Macchiato from '../src/assets/Coffees/Macchiato.svg'
import Mocaccino from '../src/assets/Coffees/Mocaccino.svg'
import ChocolateQuente from '../src/assets/Coffees/Chocolate_Quente.svg'
import Cubano from '../src/assets/Coffees/Cubano.svg'
import Havaiano from '../src/assets/Coffees/Havaiano.svg'
import Arabe from '../src/assets/Coffees/Árabe.svg'
import Irlandes from '../src/assets/Coffees/Irlandês.svg'

export interface ListCoffeesProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  tags: string[]
}

export const ListCoffees: ListCoffeesProps[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: ExpressoTradicional,
    tags: ['tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Café com leite vaporizado e uma leve camada de espuma.',
    price: 9.9,
    image: ExpressoAmericano,
    tags: ['tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa.',
    price: 9.9,
    image: ExpressoCremoso,
    tags: ['tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: ExpressoGelado,
    tags: ['tradicional', 'gelado'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    image: CafeComLeite,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    image: Latte,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    image: Capuccino,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    image: Macchiato,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    image: Mocaccino,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    image: ChocolateQuente,
    tags: ['especial', 'com leite'],
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    image: Cubano,
    tags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    image: Havaiano,
    tags: ['especial'],
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    image: Arabe,
    tags: ['especial'],
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    image: Irlandes,
    tags: ['especial', 'alcoólico'],
  },
]

export const allTags: string[] = [
  ...new Set(ListCoffees.flatMap((coffee) => coffee.tags)),
]
