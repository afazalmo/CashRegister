import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';
import { Product } from './cashRegister.model';
import { ProductService } from './product.service';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  numbers0: number = 0;
  
  numbers1: number[] = [1,2,3];

  numbers2: number[] = [4,5,6];

  numbers3: number[] = [7,8,9];

  products: Product[];

  digit:string = "";

  clear:boolean;

  total:number;

//value selected in radio group
  value_selected:string;

  constructor(private productService: ProductService, private historyService: HistoryService) { 
 
  }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }


onNumberClicked(number){

  //check to see if clear was pressed
  if(this.clear == true){
    this.clear=false;
    this.digit="";
    this.total=0;
  }


  this.digit += number;
  console.log(this.digit);
  this.setTotal();
}

setTotal(){
  if(this.value_selected!=null){
    this.total=this.calculateTotal();
   }
    
}

//reset quantity when clear is pressed
clearClicked(){
  this.clear = true;
  this.value_selected=null;
  this.total=0;
}


//check to see if product and number is selected
//if they are calculate price 
calculateTotal():number{
   const prod = {...this.products.find(product=>{return product.name==this.value_selected})};
  // if(prod.quantity >= Number(this.digit)){
   this.total=prod.price*Number(this.digit);
   console.log(this.total);

   return this.total;
   //}
   return 0;
}

buyNowClicked(){
  //update product quantity and store this bought product in product history
  const prod = {...this.products.find(product=>{return product.name==this.value_selected})}
  const prod2 =  {...this.products.find(product=>{return product.name==this.value_selected})}
  prod.quantity = Number(this.digit);
  if(prod.quantity >prod2.quantity){
  window.alert("That's too many!");
  return;
  }
  {this.products.find(product=>{return product.name==this.value_selected}).quantity -= Number(this.digit)}

  this.calculateTotal();
  window.alert('Your purchase was successful!');
  this.historyService.addToHistory(prod);
  this.clearClicked();
  
}



}
