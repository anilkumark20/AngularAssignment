import { Inject, Injectable } from "@angular/core";

@Injectable()
export class Product{
    _category:string;
    _price:string;
    _stocked:boolean;
    _name:string

    constructor(@Inject(String) private category:string, 
                @Inject(String) private price:string, 
                @Inject(Boolean) private stocked:boolean, 
                @Inject(String) private name:string){
        this._category=category;
        this._price=price;
        this._stocked=stocked;
        this._name=name;
    }
}