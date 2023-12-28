import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent {
  ingredients: string[] | undefined;
  @Input() pizza: Pizza | undefined; 

  constructor(private router: Router, private pizzaService: PizzasService) {
  }

  ngOnInit(): void {
    this.ingredients = this.pizzaService.getPizzaIngredients();
  }

  hasIngredient(ingredient: string): boolean {
    const index = this.pizza?.compositions?.indexOf(ingredient);
    return (index !== -1) ? true : false;
    
  }

  selectIngredient($event: any, ingredient: string): void {
    const checked = $event.target.checked;
    if (checked) {
      this.pizza?.compositions?.push(ingredient);
    } else {
      const index = this.pizza?.compositions?.indexOf(ingredient);
      if (index && index > -1) {
        this.pizza?.compositions?.splice(index, 1);
      }
    }
  }

  iscompositionValid(ingredient: string): boolean {
    if (this.pizza?.compositions?.length ===1 && this.hasIngredient(ingredient)){
      return false;
    }
    if (this.pizza?.compositions && this.pizza?.compositions.length >= 3 && !this.hasIngredient(ingredient))
    {
       return false;
    }
    return true;
  }

  onSubmit(): void {
    console.log('Submit Form !');
    const link = ['/pizzas', this.pizza?.id];
    this.router.navigate(link);
  }
}
