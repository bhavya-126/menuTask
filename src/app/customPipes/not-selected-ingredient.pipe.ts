import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from '../interface/ingredient';
interface recipeId {
  ingredient: number;
  quantity: number;
}
@Pipe({
  name: 'notSelectedIngredient',
})
export class NotSelectedIngredientPipe implements PipeTransform {
  checkSelectedIng(ingrediant: Ingredient, selectedIngradients: recipeId[]) {
    for (let recipeIng of selectedIngradients) {
      if (recipeIng.ingredient === ingrediant.id) {
        return false;
      }
    }
    return true;
  }
  transform(
    ingredients: Ingredient[],
    selectedIngradients: recipeId[]
  ): Ingredient[] {
    console.log(
      ingredients.filter((ing) =>
        this.checkSelectedIng(ing, selectedIngradients)
      )
    );
    ingredients =ingredients.filter((ing) =>
      this.checkSelectedIng(ing, selectedIngradients)
    );
    return ingredients
  }
}
