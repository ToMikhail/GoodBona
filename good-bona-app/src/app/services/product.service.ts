import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IProductGroup } from '../models/interfaces/productGroup.interface';

@Injectable({
  providedIn: 'root',
})

export class ProductService implements OnInit {
  public productGroups?: IProductGroup[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {

  }

  //get all groups
  getProductGroups() {
    const url = '../../assets/data/productGroups.json';
    return this.http
      .get<IProductGroup[]>(url)
      // .subscribe((response: IProductGroup[]) => {
      //   this.productGroups = response;
      //   console.log('this.productGroups: ', this.productGroups);
      //   return this.productGroups;
      // });
  }
}
