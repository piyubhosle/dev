import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
   selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId: number;
  @Input()
  iLike=false;

onClick(){
    this.iLike=!this.iLike;
    //{{liked}}+=this.iLike ? 1 : -1;
}
  constructor() {}

  ngOnInit() {
  }

}
