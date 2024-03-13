import { IProduct } from "../../app/models/interfaces/product.interface";
import { ProductGroupType } from "../../app/models/emuns/product.enum";
import { IProductGroup } from "../../app/models/interfaces/productGroup.interface";

export const ProductGroup: IProductGroup[] =
[
  {
    name: "frytki",
    image: "../img/ctnt/frytki.png"
  },
  {
    name: "smażone pielmieni z mięsem",
    image: "../img/ctnt/pielmieni.png.png"
  },
  {
    name: "czeburek",
    image: "../img/ctnt/czebureki.png.png"
  },
  {
    name: "Shawarma z kurczaka",
    image: "../img/ctnt/szawarma.png.png"
  },
  {
    name: "Shawarma wołowy",
    image: "../img/ctnt/szawarma2.png.png"
  },
  {
    name: "Naleśniki z miesem",
    image: "../img/ctnt/nalesniki.png.png"
  },
  {
    name: "naleśniki na słodko",
    image: "../img/ctnt/nalesniki2.png.png"
  },
  {
    name: "Gofry",
    image: "../img/ctnt/gofry.png.png"
  }
];

export const product: IProduct[] =
[
  {
    group: ProductGroupType.food,
    type: "frytki",
    name: "małe frytki",
    description: "pieczone ziemniaki / 100g",
    price: 9,
  },
  {
    group: ProductGroupType.food,
    type: "frytki",
    name: "duże frytki",
    description: "pieczone ziemniaki / 200g",
    price: 15,
  },
  {
    group: ProductGroupType.food,
    type: "smażone pielmieni z mięsem",
    name: "mała porcja",
    description: "Pierogi smażone na głębokim tłuszczu / 100g",
    price: 12,
  },
  {
    group: ProductGroupType.food,
    type: "smażone pielmieni z mięsem",
    name: "duża porcja",
    description: "Pierogi smażone na głębokim tłuszczu / 200g",
    price: 18,
  },
  {
    group: ProductGroupType.food,
    type: "czebureki",
    name: "czeburek z mięsem",
    description: "smaczne ciasto z soczystym mięsnym nadzieniem / 250g",
    price: 15,
  },
  {
    group: ProductGroupType.food,
    type: "czebureki",
    name: "czeburek z szynką i serem",
    description: "Pyszne ciasto z kremowym nadzieniem mięsnym / 250g.",
    price: 13,
  },
  {
    group: ProductGroupType.food,
    type: "Shawarmy z kurczaka",
    name: "Shawarma z kurczaka mała",
    description: "Pkurczak, sałata, ogórek, pomidor, marynowana cebula, sos opcjonalny (można dodawać dodatki) / 300g.",
    price: 15,
  },
  {
    group: ProductGroupType.food,
    type: "Shawarma z kurczaka",
    name: "Shawarmaz kurczaka duży",
    description: "Pkurczak, sałata, ogórek, pomidor, marynowana cebula, sos opcjonalny (można dodawać dodatki) / 450g.",
    price: 20,
  },
  {
    group: ProductGroupType.food,
    type: "Shawarma wołowa",
    name: "Shawarma wołowa mała",
    description: "swołowina, sałata, ogórek, pomidor, marynowana cebula, sos opcjonalny (można dodawać dodatki) / 300g.",
    price: 22,
  },
  {
    group: ProductGroupType.food,
    type: "Naleśniki z miesem",
    name: "Naleśniki z szynka i serem",
    description: "Każdy kęs to uczta dla kubków smakowych / 250g",
    price: 15,
  },
  {
    group: ProductGroupType.food,
    type: "Naleśniki z miesem",
    name: "Naleśniki z salami i serem",
    description: "Świetny wybór dla tych, którzy uwielbiają połączenie słonych i serowych smaków / 250g",
    price: 15,
  },
  {
    group: ProductGroupType.food,
    type: "Naleśniki z miesem",
    name: "Naleśniki z kurczkiem i pieczarkami",
    description: "Pyszne naleśniki z kurczakiem i pieczarkami - magiczne połączenie delikatnego ciasta i apetycznego nadzienia! / 250g",
    price: 15,
  },
  {
    group: ProductGroupType.food,
    type: "naleśniki na słodko",
    name: "naleśniki z twarogiem",
    description: "Pyszny naleśnik z kremowym, delikatnym nadzieniem twarogowym / 200g",
    price: 12,
  },
  {
    group: ProductGroupType.food,
    type: "naleśniki na słodko",
    name: "naleśnik ze słodkimi sosami",
    description: "naleśnik na słodko z syropem do wyboru / 120g",
    price: 8,
  },
  {
    group: ProductGroupType.food,
    type: "gofry",
    name: "gofry wiedeńskie",
    description: "Delikatne ciasto łączy się z waniliowym smakiem, a każdy kęs to mały kawałek radości / 100g",
    price: 12,
  },
  {
    group: ProductGroupType.food,
    type: "gofry",
    name: "gofry wiedeńskie z bitą śmietaną",
    description: "Delikatne ciasto łączy się z waniliowym smakiem, a każdy kęs to mały kawałek radości / 150g",
    price: 15,
  },
  {
    group: ProductGroupType.drinks,
    type: "gofry",
    name: "gofry wiedeńskie z bitą śmietaną",
    description: "Delikatne ciasto łączy się z waniliowym smakiem, a każdy kęs to mały kawałek radości / 150g",
    price: 15,
  },
]
