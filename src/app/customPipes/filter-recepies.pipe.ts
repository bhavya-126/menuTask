import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { Ingredient } from '../interface/ingredient';

@Pipe({
  name: 'filterRecepies',
})
export class FilterRecepiesPipe implements PipeTransform {
  check(recipe: Recipe, ingrediants: Ingredient[]) {
    for (let ingrediant of recipe.ingredients) {
      if (ingrediant.quantity > ingrediants[ingrediant.ingredient].quantity) {
        return false;
      }
    }
    return true;
  }
  transform(recipes: Recipe[], ingrediant: Ingredient[]): Recipe[] {
    let selectedRecepies: Recipe[] = recipes.filter((recipe) =>
      this.check(recipe, ingrediant)
    );
    return selectedRecepies;
  }
}
