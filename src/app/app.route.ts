import { Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipeComponent } from './recipe/recipe.component';
import { MenuComponent } from './menu/menu.component';
import { AddIngredientComponent } from './ingredients/add-ingredient/add-ingredient.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Menu', pathMatch: 'full' },
  { path: 'Menu', component: MenuComponent },
  { path: 'Recipe', component: RecipeComponent },
  { path: 'AddRecipe', component: AddRecipeComponent },
  { path: 'Ingredient', component: IngredientsComponent },
  { path: 'AddIngredient', component: AddIngredientComponent },
  { path: '**', component: PageNotFoundComponent },
];
