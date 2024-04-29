import { Component, inject } from '@angular/core';
import { RecipeListService } from '../services/recipe-list.service';
import { Recipe } from '../interface/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { IngrediantListService } from '../services/ingrediant-list.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent {
  constructor(private recipeService: RecipeListService, private ingredientService:IngrediantListService) {}
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  recipes: Recipe[] = this.recipeService.getRecipes(); // list of recepies
  ingredientList = this.ingredientService.getIngrediants(); // list of ingredients
  addReipe() {  // to add new recipe
    this.router.navigate(['AddRecipe']);
  }
  edit(recipeid:number){
    this.router.navigate(['AddRecipe'], {queryParams:{recipeid}}) // to edit recipe with particular id
  }
}
