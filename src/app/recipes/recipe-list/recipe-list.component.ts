import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Hamburger', 'This is the recipe for an Hamburger', 'https://www.deabyday.tv/data/guides/cucina-e-ricette/speciali/hamburger/Come-fare-gli-hamburger-al-formaggio/image_big_16_9/hamburger-al-formaggio.jpg'),
    new Recipe('French Fries', 'This is the recipe for French Fries', 'https://www.cookingclassy.com/wp-content/uploads/2019/01/french-fries-44.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
