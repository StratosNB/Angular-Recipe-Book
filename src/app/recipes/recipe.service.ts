import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Hamburger',
            'This is the recipe for an Hamburger',
            'https://www.deabyday.tv/data/guides/cucina-e-ricette/speciali/hamburger/Come-fare-gli-hamburger-al-formaggio/image_big_16_9/hamburger-al-formaggio.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('French Fries', 
                   'This is the recipe for French Fries',
                   'https://www.cookingclassy.com/wp-content/uploads/2019/01/french-fries-44.jpg',
                   [
                    new Ingredient('Buns', 2),
                    new Ingredient('Meat', 1)
                   ])
      ];

      constructor(private slService:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
       this.slService.addIngredients(ingredients); 
      }
}