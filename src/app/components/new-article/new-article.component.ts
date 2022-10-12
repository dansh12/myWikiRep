import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NavigationComponent } from 'src/app/main-components/navigation/navigation.component';
import { PagesListService } from '../../services/pages-list/pages-list.service';



@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {
  pageForm = new FormGroup({
    'title': new FormControl(null, Validators.required),
    'body': new FormControl(null, Validators.required),
  });
  
  openDialog(){
    this.dialog.open(NavigationComponent,{width:"400px",height:"400px"})
  }
  constructor(private PagesService: PagesListService,public dialog: MatDialog) { }

  ngOnInit() {}
  onSubmit() {
    this.PagesService.addAnArticle({ title: this.pageForm.controls['title'].value!, body: this.pageForm.controls['body'].value!});
    this.pageForm.reset();
    }
}
