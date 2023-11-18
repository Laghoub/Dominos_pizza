import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/Pizza';
import { LIST_PIZZAS } from 'src/app/shared/ListPizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  Pizza : Pizza[] = [] 

  ngOnInit(): void {
    this.Pizza = LIST_PIZZAS;
  }

  selectPizza(selectedPizza: Pizza): void{
    alert("Vous avez sélectionner: " + selectedPizza.name);
  }

  


}
