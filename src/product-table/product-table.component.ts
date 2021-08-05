import { Component, OnInit } from '@angular/core';
import { SearchToTableCommunicationService } from 'src/observables/searchToTableCommunicationService';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  products: Array<any>;
  categories: Array<string>;
  subscriptionRef:any;
  isInStockChecked:boolean;

  constructor(public observable: SearchToTableCommunicationService) {

    this.products= [
      {category: "", price: "", stocked: true, name: ""},
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];
    this.categories=[];
    this.isInStockChecked=false;
   }

  ngOnInit(): void {

    this.readCategories();

    this.subscriptionRef=this.observable.subscribeForStreamChange().subscribe(data =>{
      this.isInStockChecked=data;
      });
  }

  readCategories(){
    // extract the distinct categories from JSON
    for(const [,v] of Object.entries(this.products)){
      const categoryName = v.category;
      if(!this.categories.includes(categoryName)){
        this.categories.push(categoryName);
      }
    }
  }

  canShowProductRow(product:any, category:string, isInStockChecked:boolean):boolean{
    return product.category == category && (!isInStockChecked || (isInStockChecked && product.stocked));
  }

  ngOnDestroy(){
    this.subscriptionRef.unsubscribe();
  }
}