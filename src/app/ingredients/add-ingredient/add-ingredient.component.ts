import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/interface/ingredient';
import { IngrediantListService } from 'src/app/services/ingrediant-list.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css'],
})
export class AddIngredientComponent {
  constructor(
    private ingredientService: IngrediantListService, //instance of ingredientService
    private activeRoute: ActivatedRoute
  ) {}
  router: Router = inject(Router);
  ingredients: Ingredient[] = this.ingredientService.getIngrediants(); //list of ingedients
  paramId: number = +this.activeRoute.snapshot.queryParamMap.get('id'); // id of an ingredient which we want to edit
  selectedIng: Ingredient = this.ingredients.find(
    // ingredient which is selected for editing
    (item) => item.id === this.paramId
  );
  ingName: string =  ''; // data bound property for name of ingredient
  ingQuantity: number = 0; // data bound property for quantity of ingredient
  requiredMsg = ''; // required msg
  previousQuantity:number;
  ngOnInit(){
    if(this.selectedIng){
      this.ingName =  this.selectedIng.name;
      this.previousQuantity = this.selectedIng.quantity;
    }
  }
  add() {
    if (!this.ingName || !this.ingQuantity) {
      // if we try to add ingredient without its name and quantity
      this.requiredMsg = 'required to fill name and qunatity of ingrediant';
      return;
    }
    if(this.ingQuantity<=0){
      this.requiredMsg = 'quantity must be a positive number';
      return;
    }
    if (this.selectedIng) {
      // if we are editing ingredient values
      this.selectedIng.quantity += this.ingQuantity;
    } else {
      this.ingredientService.addIngrediants(this.ingName, this.ingQuantity);
      console.log(this.ingredientService.ingrediants);
    }
    this.router.navigate(['/Ingredient']); // navigae to the ingredient page after adding or updating any ingredient
  }
}
