import { Component } from '@angular/core';
import { RecipeListService } from '../services/recipe-list.service';
import { IngrediantListService } from '../services/ingrediant-list.service';
import { Recipe } from '../interface/recipe';
import { Ingredient } from '../interface/ingredient';
import {FilterRecepiesPipe } from '../customPipes/filter-recepies.pipe'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor( private recipeObj: RecipeListService, private ingredientObj: IngrediantListService){}
  recipeList: Recipe[] = this.recipeObj.getRecipes(); // list of all recipes
  ingredientList:Ingredient[] = this.ingredientObj.getIngrediants(); // list of ingredients
}
