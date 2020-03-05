import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  /*permet de passer l index de l item vers l exterieur ici recipe list*/
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }


}
