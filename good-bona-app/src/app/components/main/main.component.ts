import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  // public productService = inject(ProductService);
  public products?: any;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductGroups().subscribe(groups => {
      this.products = groups;
      console.log('this.products: ', this.products);
    })
  }
}
