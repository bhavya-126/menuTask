import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/interface/ingredient';
import { Recipe } from 'src/app/interface/recipe';
import { IngrediantListService } from 'src/app/services/ingrediant-list.service';
import { RecipeListService } from 'src/app/services/recipe-list.service';
interface recipeId {
  ingredient: number;
  quantity: number;
}

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent {
  constructor(
    private ingredientService: IngrediantListService,
    private recipeService: RecipeListService
  ) {}
  ingredients: Ingredient[] = this.ingredientService.getIngrediants(); //list of ingredients
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  selectedId: number = +this.activeRoute.snapshot.queryParamMap.get('recipeid');
  selectedRecipe: Recipe = this.recipeService // selecting the recipe for editing
    .getRecipes()
    .find((recipe) => recipe.id === this.selectedId);
  recipeName: string = this.selectedId ? this.selectedRecipe.name : ''; //name of recipe
  recipeIngredients: recipeId[] = this.selectedId // ingredients selected for that recipe
    ? this.selectedRecipe.ingredients
    : [];
  recipeId: number; //id of ingredient of recipe which is currently selected
  recipeIngQuantity: number; // quantity of that ingredient
  imageUrl: string = this.selectedId ? this.selectedRecipe.imageUrl : '';
  router: Router = inject(Router);
  errMsg: string = '';
  selectIngredients = this.ingredients.filter((ingredient) => {
    for (let recipeIng of this.recipeIngredients) {
      if (recipeIng.ingredient + 1 === ingredient.id) return false;
    }
    return ingredient;
  });
  addIng() {
    if (!this.recipeId || !this.recipeIngQuantity) {
      // selection of ingredients
      this.errMsg = 'must select name and quantity of ingredient';
      return;
    }
    let ing = this.recipeIngredients.find(
      (ing) => ing.ingredient === this.recipeId - 1
    );
    if (ing) {
      ing.quantity += this.recipeIngQuantity;
    } else {
      this.recipeIngredients.push({
        // adding ingredient in recipe
        ingredient: this.recipeId - 1,
        quantity: this.recipeIngQuantity,
      });
    }
    this.recipeIngQuantity=0;
    this.errMsg = '';
    this.selectIngredients = this.ingredients.filter((ingredient) => {
      for (let recipeIng of this.recipeIngredients) {
        if (recipeIng.ingredient + 1 === ingredient.id) return false;
      }
      return ingredient;
    });
    console.log(this.selectIngredients);
  }
  addRecipe() {
    if (!this.recipeName || !this.recipeIngredients.length) {
      // if we try to add recipe without name or not adding atleast one ingredient
      this.errMsg =
        'add recipe name and recipe must have at least one ingredient';
      return;
    }
    if (this.selectedId) {
      //editing existing recipe
      this.recipeService.recipes[this.selectedId - 1].name = this.recipeName; // id-1 because id of recipes starts from 1 but indexing from 0
      this.recipeService.recipes[this.selectedId - 1].ingredients =
        this.recipeIngredients;
      this.recipeService.recipes[this.selectedId - 1].imageUrl = this.imageUrl;
    } else {
      // adding new recipe
      this.recipeService.addRecipe(
        this.recipeName,
        this.recipeIngredients,
        this.imageUrl
      );
    }
    this.router.navigate(['Recipe']);
  }
}
