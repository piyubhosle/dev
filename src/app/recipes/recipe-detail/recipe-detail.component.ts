import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Recipe } from "../recipe";
import { DBConnect } from 'src/app/shared/dbConnect.service';

@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
 loadedPosts : any[] = [];
 
    addRecipe(nf:NgForm){
      //  console.log("recipe added",nf.value);
       this.db.addrecipeToDB(nf.value);
  }
  
  loadRecipes(){
      console.log("in ts file");
      this.db.loadRecipefromDB().subscribe(
          posts=>{this.loadedPosts=posts}
          )
          console.log(this.loadedPosts);
  }

  constructor(private db:DBConnect) {} 
   
  ngOnInit() {
  }

}
