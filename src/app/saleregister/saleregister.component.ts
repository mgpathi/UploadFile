import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-saleregister',
  templateUrl: './saleregister.component.html',
  styleUrls: ['./saleregister.component.css']
})
export class SaleregisterComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() {
    this.title.setTitle("Sales Goods");
  }

}
