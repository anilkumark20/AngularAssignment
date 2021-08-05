import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input() itemName:string;
  @Input() price:string;
  @Input() stocked:boolean

  constructor(){
    this.itemName="";
    this.price="";
    this.stocked=false;
  }

  ngOnInit(): void {
    console.log(this.itemName);
  }
}