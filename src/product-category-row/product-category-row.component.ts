import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-category-row',
  templateUrl: './product-category-row.component.html',
  styleUrls: ['./product-category-row.component.css']
})
export class ProductCategoryRowComponent implements OnInit {

  @Input() categoryName:string;
  @Input() products: Array<any>;
  stocked:boolean;

  constructor() { 
    this.categoryName="";
    this.stocked=true;
    this.products=[];
  }

  ngOnInit(): void {
  }
}