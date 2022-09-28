import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PagesListService } from '../../services/pages-list/pages-list.service';



@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  pageForm = new FormGroup({
    'title': new FormControl(null, Validators.required),
    'body': new FormControl(null, Validators.required),
  });
  body= '';
  title = '';
  
  constructor(private PagesService: PagesListService, ) { }

  ngOnInit() {}
  onSubmit() {
    this.PagesService.addAnArticle({ title: this.title, body: this.body });
    this.pageForm.reset();
    }
}
