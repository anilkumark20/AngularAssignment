import { Component, OnInit } from '@angular/core';
import { SearchToTableCommunicationService } from 'src/observables/searchToTableCommunicationService';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchText:string;
  productsInStock:boolean;

  constructor(public observable:SearchToTableCommunicationService) { 
    this.productsInStock=false;
    this.searchText="Search...";
  }

  ngOnInit(): void {
    console.log(this.productsInStock);
  }

  onChanged():void{
    this.observable.publish(this.productsInStock);
  }

  onSearchChange(searchString:any):void{
    this.searchText= searchString.target.value;
  }
}