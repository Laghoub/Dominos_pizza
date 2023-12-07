import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pizaIngredientColor'
})
export class PizaIngredientColorPipe implements PipeTransform {

  transform(type: string | undefined): string | undefined {

    let color: string | undefined;

    switch (type) {
      case 'S. tomate':
        color = 'red lighten-1'; // Classe issue de la librairie Materialize
        break;
      case 'v. kebab':
        color = 'blue lighten-1';
        break;
      case 'roquette':
        color = 'green lighten-1';
        break;
      case 'piments':
        color = 'green lighten-3';
        break;
      case 'miel':
        color = 'brown lighten-3';
        break;
      case 'C. fraîche':
        color = 'grey lighten-3';
        break;
      case 'v. hachée':
        color = 'blue lighten-3';
        break;
      case 'S.barbecue':
        color = 'deep-purple accent-1';
        break;
      case 'champignons':
        color = 'pink lighten-4';
        break;
      case 'merguez':
        color = 'deep-purple darken-2';
        break;
      case 'mozzarella':
        color = 'lime accent-1';
        break;
      case 'oignons':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;

  }

}
