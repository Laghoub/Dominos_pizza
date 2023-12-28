import { Injectable } from '@angular/core';
import { Pizza } from '../Pizza';
import { LIST_PIZZAS } from '../shared/ListPizza';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor() {
  }

  /**
   * Récupérer la liste des pizzas
   */
  getListPizza(): Pizza[] {
    return LIST_PIZZAS;
  }

  /**
   * Retourner la pizza avec l'identifiant passé en paramètre
   * @param id
   */
  getSinglePizza(id: string|null): Pizza | undefined {
    const listPizzas = this.getListPizza();
    return listPizzas.find(pizza => pizza.id === id);
  }

  /**
   * Récupérer les types d'une pizza
   */
  getPizzaIngredients(): string[] {
    return ['S. tomate', 'v. kebab', 'chèvre', 'roquette', 'piments', 'miel', 'C. fraîche', 'v. hachée', 'S.barbecue', 'champignons',
      'merguez', 'mozzarella', 'oignons'];
  }
}
