import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
import { FormsModule } from '@angular/forms';
import { AddIngredientComponent } from './ingredients/add-ingredient/add-ingredient.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { FilterRecepiesPipe } from './customPipes/filter-recepies.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    RecipeComponent,
    IngredientsComponent,
    AddIngredientComponent,
    AddRecipeComponent,
    FilterRecepiesPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
