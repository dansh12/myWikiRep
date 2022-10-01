import { Pipe, PipeTransform } from '@angular/core';
import { Page } from '../interfaces/page';

@Pipe({
  name: 'searchArticle',
  pure: false
})
export class SearchArticlePipe implements PipeTransform {
  transform(value: Array<Page>, filterName: string, attribute: string){
    return value.filter((item:any)=> {return item[attribute].toLowerCase().includes(filterName.toLowerCase())})
  }
}
