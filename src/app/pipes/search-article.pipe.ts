import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArticle',
  pure: false
})
export class SearchArticlePipe implements PipeTransform {
  transform(value: any, filterName: string, attribute: string){
    return value.filter((item:any)=> {return !item[attribute].toLowerCase().indexOf(filterName.toLowerCase())})
  }
}
