import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/servicos/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  produtos: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtos = this.productService.getProdutos();
  }
}
