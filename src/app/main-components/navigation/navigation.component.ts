import { Component, ElementRef, OnInit, Pipe, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PagesListService } from '../../services/pages-list/pages-list.service';
import {BreakpointObserver}from '@angular/cdk/layout'; 

@Component({
  selector: 'app-pages',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  pages = this.pagesListService.getPages();
  searchArticleTitle = '';
  selectedPage=0;

  constructor(private pagesListService: PagesListService, private sideNavObserver: BreakpointObserver) { }

  ngOnInit() {}

  ngAfterViewInit(){
    this.sideNavObserver.observe(['(max-width:750px)']).subscribe(state =>{
      if(state.matches){
        this.sidenav.mode ='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }})
  }

  buttonClick(pageName: string) {
    this.selectedPage= this.pages.findIndex(page=> page["title"] == pageName);
  }
}
