import { ProductGroupType } from "../emuns/product.enum";

export interface IProduct {
  group: ProductGroupType,
  type: string,
  name: string,
  description?: string,
  price: number,
  image?: string
}
