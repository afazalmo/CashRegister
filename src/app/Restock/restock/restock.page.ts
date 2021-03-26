import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Home/home/cashRegister.model';
import { ProductService } from 'src/app/Home/home/product.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {

  products:Product[];

  value_selected:string;

  qty:number;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  onRestockClick(){
    if(this.value_selected!=null && !isNaN(Number(this.qty))){
     {this.products.find(product=>{return product.name==this.value_selected}).quantity = Number(this.qty)};
    }else{
      alert("Please select a product and enter a number");
    }

    }
  

}
