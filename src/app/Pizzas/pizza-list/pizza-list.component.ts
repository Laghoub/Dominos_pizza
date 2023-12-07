import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { LIST_PIZZAS } from 'src/app/shared/ListPizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  Pizza : Pizza[] = [] 

  constructor(private router: Router){
    
  }

  ngOnInit(): void {
    this.Pizza = LIST_PIZZAS;
  }

  selectPizza(selectedPizza: Pizza): void{
    //alert("Vous avez sélectionner: " + selectedPizza.name);
    const link = ['pizzas' , selectedPizza.id];
    this.router.navigate(link);
  }

  


}
