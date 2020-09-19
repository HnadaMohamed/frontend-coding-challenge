import { Pipe, PipeTransform } from '@angular/core';
import { Repository } from '../models/repository';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Array<Repository>, searchText: string): any {

    if (!items || !searchText) {
      return items;
    }
    return  items.filter(item => (item.repoName.indexOf(searchText) !== -1) );

  }

}
