import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/servicos/product.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  produto!: Product;
  imageDefault!:string; //propriedade do tipo string

  constructor(
   private productService: ProductService,
   private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  if (id !== null) {
    this.getProdutoById(Number(id));
  }
  }

  getProdutoById(id: number): void {
    this.produto = this.productService.getProdutoById(id);
    this.imageDefault = this.produto.image // A propriedade produto é atualizada com o produto retornado e a propriedade imageDefault é definida com o valor da imagem do produto.
    // está copiando o valor da propriedade image do objeto produto e atribuindo-o à propriedade imageDefault do componente. Isso permite que o componente utilize o URL ou caminho da imagem padrão do produto armazenado na propriedade imageDefault.
  }

  changeImageDefault(url:string){ //Este método é responsável por alterar a propriedade imageDefault com um novo URL de imagem
    this.imageDefault = url
  }

}





/* ngOnInit() {
    const id = 1;
    this.getProdutoById(id);

  }


  getProdutoById(id: number): void {
    const produto = this.productService.getProdutoById(id);
    console.log(produto); // faça o que desejar com o produto retornado
  }*/
