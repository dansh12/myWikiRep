import { Component, ElementRef, OnInit, Pipe } from '@angular/core';
import { PagesListService } from '../../services/pages-list/pages-list.service';


@Component({
  selector: 'app-pages',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  pages = this.pagesListService.getPages();
  searchArticleTitle = '';
  selectedPage=0;

  constructor(private pagesListService: PagesListService) { }

  ngOnInit() {}

  buttonClick(pageName: string) {
    this.selectedPage= this.pages.findIndex(page=> page["title"] == pageName);
  }
}
