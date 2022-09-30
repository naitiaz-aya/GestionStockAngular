import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Product } from '../product'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	products: Product[] = [];
	constructor(public productService: ProductService) { }
     

  ngOnInit(): void {
	this.productService.getAll().subscribe((data: Product[])=>{
		this.products = data;
		console.log(this.products);
	  }) 
  }

  deleteProduct(id:number){
    this.productService.delete(id).subscribe(res => {
         this.products = this.products.filter(item => item.id !== id);
         console.log('Product deleted successfully!');
    })
  }

}
