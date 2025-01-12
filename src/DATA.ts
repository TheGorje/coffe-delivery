export interface ListCoffeesProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  tags: string[]
}

const COFFEE_IMG_PATH = '../public/Coffes'

const COFFEE_IMAGES: { [key: string]: string } = {
  Expresso_Tradicional: `${COFFEE_IMG_PATH}/Expresso_Tradicional.svg`,
  Expresso_Americano: `${COFFEE_IMG_PATH}/Expresso_Americano.svg`,
  Expresso_Cremoso: `${COFFEE_IMG_PATH}/Expresso_Cremoso.svg`,
  Expresso_Gelado: `${COFFEE_IMG_PATH}/Expresso_Gelado.svg`,
  Café_com_Leite: `${COFFEE_IMG_PATH}/Café_com_Leite.svg`,
  Latte: `${COFFEE_IMG_PATH}/Latte.svg`,
  Capuccino: `${COFFEE_IMG_PATH}/Capuccino.svg`,
  Macchiato: `${COFFEE_IMG_PATH}/Macchiato.svg`,
  Mocaccino: `${COFFEE_IMG_PATH}/Mocaccino.svg`,
  Chocolate_Quente: `${COFFEE_IMG_PATH}/Chocolate_Quente.svg`,
  Cubano: `${COFFEE_IMG_PATH}/Cubano.svg`,
  Havaiano: `${COFFEE_IMG_PATH}/Havaiano.svg`,
  Árabe: `${COFFEE_IMG_PATH}/Árabe.svg`,
  Irlandês: `${COFFEE_IMG_PATH}/Irlandês.svg`,
}

export const ListCoffees: ListCoffeesProps[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: COFFEE_IMAGES.Expresso_Tradicional,
    tags: ['tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Café com leite vaporizado e uma leve camada de espuma.',
    price: 9.9,
    image: COFFEE_IMAGES.Expresso_Americano,
    tags: ['tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa.',
    price: 9.9,
    image: COFFEE_IMAGES.Expresso_Cremoso,
    tags: ['tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: COFFEE_IMAGES.Expresso_Gelado,
    tags: ['tradicional', 'gelado'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    image: COFFEE_IMAGES.Café_com_Leite,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    image: COFFEE_IMAGES.Latte,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    image: COFFEE_IMAGES.Capuccino,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    image: COFFEE_IMAGES.Macchiato,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    image: COFFEE_IMAGES.Mocaccino,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    image: COFFEE_IMAGES.Chocolate_Quente,
    tags: ['especial', 'com leite'],
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    image: COFFEE_IMAGES.Cubano,
    tags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    image: COFFEE_IMAGES.Havaiano,
    tags: ['especial'],
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    image: COFFEE_IMAGES.Árabe,
    tags: ['especial'],
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    image: COFFEE_IMAGES.Irlandês,
    tags: ['especial', 'alcoólico'],
  },
]

export const allTags: string[] = [
  ...new Set(ListCoffees.flatMap((coffee) => coffee.tags)),
]
