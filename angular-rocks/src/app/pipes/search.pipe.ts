import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Pipe, PipeTransform } from '@angular/core';
import { Bands } from '../model/band';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: Bands, text: string): Bands {
    if(!text) return list;
    return list.filter(band => band.name.toUpperCase().includes(text.toUpperCase()))

  }

}
