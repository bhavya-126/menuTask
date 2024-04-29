import { Ingredient } from "./ingredient";
interface recipeIng {
    ingredient: number;
    quantity: number;
  }
export interface Recipe {
    id:number;
    name:string;
    ingredients:recipeIng[];
    imageUrl?:string;   
}
