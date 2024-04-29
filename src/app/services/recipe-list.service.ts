import { Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { IngrediantListService } from './ingrediant-list.service';

interface recipeIng {
  ingredient: number;
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  constructor(private ingredient: IngrediantListService) {}
  ingredients = this.ingredient.ingrediants;
  recipes: Recipe[] = [
    { id: 1, name: 'burger', ingredients: [{ ingredient: 0, quantity: 2 }], imageUrl:'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg'},
    {
      id: 2,
      name: 'pancake',
      ingredients: [
        { ingredient: 0, quantity: 4 },
        { ingredient: 3, quantity: 8 },
      ],
    },
  ];
  getRecipes() {
    return this.recipes;
  }
  addRecipe(name: string, ingredients: recipeIng[], imageUrl?:string) {
    const id = this.recipes.length + 1;
    this.recipes.push({ id, name, ingredients, imageUrl });
  }
}
