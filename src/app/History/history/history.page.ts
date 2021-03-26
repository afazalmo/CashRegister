import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/Home/home/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  items;
  
  constructor(private historyService:HistoryService) { }

  ngOnInit() {
    this.items = this.historyService.getItems();
  }

}
