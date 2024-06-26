import { Injectable } from '@angular/core';
import { Ingredient } from '../interface/ingredient';

@Injectable({
  providedIn: 'root',
})
export class IngrediantListService {
  constructor() {}
  ingrediants: Ingredient[] = [
    { id: 1, name: 'Flour', quantity: 500 },
    { id: 2, name: 'Sugar', quantity: 200 },
    { id: 3, name: 'Milk', quantity: 300 },
    { id: 4, name: 'Eggs', quantity: 6 },
    { id: 5, name: 'Butter', quantity: 100 },
    // Add more ingredients as needed
  ];
  getIngrediants() {
    return this.ingrediants;
  }
  addIngrediants(name:string, quantity:number){
    let ingrediant = this.ingrediants.find((item) => item.name.toLowerCase() === name.toLowerCase());
    if(ingrediant){
      ingrediant.quantity += quantity;
    }else{
      this.ingrediants.push({id:(this.ingrediants.length+1), name:name, quantity:quantity});
    }
    this.ingrediants=[...this.ingrediants]
  }
}
