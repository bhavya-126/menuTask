import { Component, inject } from '@angular/core';
import { Ingredient } from '../interface/ingredient';
import { IngrediantListService } from '../services/ingrediant-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent {
  constructor(private ingredientObj: IngrediantListService) {}
  ingredients: Ingredient[] = this.ingredientObj.getIngrediants(); //list of all ingredients
  router: Router = inject(Router);
  add() {
    this.router.navigate(['AddIngredient']); //to add new ingredient
  }
  Edit(id: number) {
    this.router.navigate(['AddIngredient'], { queryParams: { id } }); // to edit quantity of existing ingredient
  }
}
