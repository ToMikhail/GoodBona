import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/interfaces/product.interface';
import { IProductGroup } from '../models/interfaces/productGroup.interface';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  public productGroups?: IProductGroup[] = [];
  public products?: IProduct[] = [];

  constructor(private http: HttpClient) {}

  //get all groups
  public getProductGroups() {
    const url = '../../assets/data/productGroups.json';
    return this.http
      .get<IProductGroup[]>(url)
      // .subscribe((response: IProductGroup[]) => {
      //   this.productGroups = response;
      //   console.log('this.productGroups: ', this.productGroups);
      //   return this.productGroups;
      // });
  }

  //get all products
  public getProducts() {
    const url = '../../assets/data/product.json';
    return this.http
      .get<IProduct[]>(url)
  }
}
