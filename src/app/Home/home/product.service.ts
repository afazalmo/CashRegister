import { Injectable } from '@angular/core';
import { Product } from './cashRegister.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //stores the products list
  products: Product[] = [
    {
      name: 'Pants',
      quantity: 20,
      price: 10
    },
    {
      name: 'Shoes',
      quantity: 50,
      price: 5
    },
    {
      name: 'Hats',
      quantity: 10,
      price: 7
    },
    {
      name: 'T-Shirts',
      quantity: 10,
      price: 9
    },
    {
      name: 'Dresses',
      quantity: 24,
      price: 20
    }
  ];

  getAllProducts(){
    return [...this.products];
  }
  getProduct(name){
    return {...this.products.find(product=>{return product.name==name})};
      
    }
  
  constructor() { }
}
