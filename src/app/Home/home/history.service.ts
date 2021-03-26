import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  items = [];

  addToHistory(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  
  constructor() { }
}

