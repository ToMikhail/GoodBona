import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs';
import { IProduct } from '../../../../models/interfaces/product.interface';
import { ProductService } from '../../../../services/product.service';

enum TabTypes {
  ALL = 10,
  PRODUCT_1 = 0,
  PRODUCT_2 = 1,
  PRODUCT_3 = 2,
  PRODUCT_4 = 3,
  PRODUCT_5 = 4,
  PRODUCT_6 = 5,
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  public tabName: string | number = 'all';
  public productService = inject(ProductService);
  public productGroups$?: any;
  private currentGroup?: any = 'all';
  public products$?: any;
  public products?: any;

  ngOnInit(): void {
    this.productGroups$ = this.productService.getProductGroups().pipe(
      map((groups) => {
        let groupNameArray = groups.map((item: any) => item.type);
        return [...new Set(groupNameArray)];
      })
    );

    // this.products$ = this.productService.getProducts();

    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.products = products;
    });
  }

  public getGroup($event: Event, i: any = 'all'): any {
    this.tabName = i;
    this.currentGroup = ($event.target as HTMLElement).textContent;

    this.productService.getProducts().subscribe((products: IProduct[]) => {
      if (this.currentGroup.trim() === 'all')  this.products = products;

      else {
        this.products = products.filter(
          (product) => product.group.trim() == this.currentGroup.trim()
          );
        }
    });
  }
}
