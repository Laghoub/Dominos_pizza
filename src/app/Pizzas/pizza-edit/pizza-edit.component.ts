import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.scss']
})
export class PizzaEditComponent implements OnInit {

  singlePizza: Pizza | undefined

  constructor(private route: ActivatedRoute, private pizzaService: PizzasService) {
  }

  ngOnInit(): void {
    const retrieveIdDormURL : string | null = this.route.snapshot.paramMap.get('id');
    this.singlePizza = this.pizzaService.getSinglePizza(retrieveIdDormURL);
    console.log('Vous avez séléctionné ', this.singlePizza);
  }

}
