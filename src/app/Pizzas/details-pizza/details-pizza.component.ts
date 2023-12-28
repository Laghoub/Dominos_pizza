import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { LIST_PIZZAS } from 'src/app/shared/ListPizza';

@Component({
  selector: 'app-details-pizza',
  templateUrl: './details-pizza.component.html',
  styleUrls: ['./details-pizza.component.scss']
})
export class DetailsPizzaComponent implements OnInit {

  pizzaToDisplay : Pizza | undefined;
  listOfPizza: Pizza[] | undefined; 

  constructor(private activatedRoute : ActivatedRoute){


  }
  ngOnInit(): void {

    this.listOfPizza = LIST_PIZZAS;
    const retriveIdUrl: string | null = this.activatedRoute.snapshot.paramMap.get('id');

    this.listOfPizza.forEach((pizza : Pizza) =>{
      if (pizza.id === retriveIdUrl ) {
        this.pizzaToDisplay = pizza
        
      }


    })

    console.log(this.pizzaToDisplay)
  }

  

}
