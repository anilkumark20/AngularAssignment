import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FilterableProductTableComponent } from '../filterable-product-table/filterable-product-table.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ProductTableComponent } from '../product-table/product-table.component';
import { ProductCategoryRowComponent } from '../product-category-row/product-category-row.component';
import { ProductRowComponent } from '../product-row/product-row.component';
import { FormsModule } from '@angular/forms';
import { SearchToTableCommunicationService } from 'src/observables/searchToTableCommunicationService';

@NgModule({
  declarations: [AppComponent, FilterableProductTableComponent, SearchBarComponent, ProductTableComponent, ProductCategoryRowComponent, ProductRowComponent],
  imports: [BrowserModule, FormsModule],
  providers: [SearchToTableCommunicationService, {provide:"productsInStock", useValue:false}],
  bootstrap: [AppComponent, FilterableProductTableComponent, SearchBarComponent, ProductTableComponent, ProductCategoryRowComponent, ProductRowComponent]
})
export class AppModule { }